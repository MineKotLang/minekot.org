import github from './config/github.json'

export interface Contributor {
  login: string
  avatarUrl: string
  profileUrl: string
  contributions: number
}

interface GitHubContributor {
  login: string
  avatar_url: string
  html_url: string
  contributions: number
}

interface GitHubRepo {
  contributors_url: string
}

interface ContributorsCache {
  savedAt: number
  contributors: Contributor[]
}

const CACHE_KEY = 'contributors-cache'
const CACHE_TTL = 60 * 60 * 1000
const BOT_SUFFIX = '[bot]'

const toContributor = (raw: GitHubContributor): Contributor => ({
  login: raw.login,
  avatarUrl: raw.avatar_url,
  profileUrl: raw.html_url,
  contributions: raw.contributions,
})

/**
 * Merges contributor groups into one list, summing contributions per login and dropping bots.
 * @param groups - The contributor lists to merge.
 * @returns The deduplicated contributors sorted by contribution count.
 */
export const mergeContributors = (groups: Contributor[][]): Contributor[] => {
  const merged = new Map<string, Contributor>()

  groups.forEach((group) => {
    group.forEach((contributor) => {
      const key = contributor.login.toLowerCase()
      if (key.endsWith(BOT_SUFFIX)) {
        return
      }
      const existing = merged.get(key)
      if (existing === undefined) {
        merged.set(key, contributor)
      } else {
        merged.set(key, { ...existing, contributions: existing.contributions + contributor.contributions })
      }
    })
  })

  return [...merged.values()].sort((a, b) => b.contributions - a.contributions)
}

const fetchJson = async <T>(url: string): Promise<T> => {
  const response = await fetch(url)
  if (!response.ok) {
    throw new Error(`GitHub request failed with status ${response.status}`)
  }
  return (await response.json()) as T
}

const readCache = (): Contributor[] | null => {
  try {
    const raw = window.localStorage.getItem(CACHE_KEY)
    if (raw === null) {
      return null
    }
    const parsed = JSON.parse(raw) as Partial<ContributorsCache> | null
    if (parsed === null || typeof parsed !== 'object') {
      return null
    }
    if (typeof parsed.savedAt !== 'number' || !Array.isArray(parsed.contributors)) {
      return null
    }
    if (Date.now() - parsed.savedAt > CACHE_TTL) {
      return null
    }
    return parsed.contributors
  } catch {
    return null
  }
}

const writeCache = (contributors: Contributor[]): void => {
  try {
    const entry: ContributorsCache = { savedAt: Date.now(), contributors }
    window.localStorage.setItem(CACHE_KEY, JSON.stringify(entry))
  } catch {
    console.warn('Contributor cache could not be written')
  }
}

const fetchOrgGroups = async (): Promise<Contributor[][]> => {
  const repos = await fetchJson<GitHubRepo[]>(github['contributors-org-repos-url'])
  return await Promise.all(
    repos.map(async (repo): Promise<Contributor[]> => {
      try {
        const raw = await fetchJson<GitHubContributor[]>(`${repo.contributors_url}?per_page=100`)
        return raw.map(toContributor)
      } catch {
        return []
      }
    }),
  )
}

/**
 * Loads the merged contributor list from the organization repositories and the MineKot repository.
 * The repository pull keeps outside pull request authors that organization data may miss.
 * Results are cached in local storage for one hour to stay within GitHub rate limits.
 * @returns The contributors sorted by contribution count.
 * @throws {Error} Throws when no GitHub source could be reached.
 */
export const loadContributors = async (): Promise<Contributor[]> => {
  const cached = readCache()
  if (cached !== null) {
    return cached
  }

  const groups: Contributor[][] = []
  let fetched = false

  try {
    groups.push(...(await fetchOrgGroups()))
    fetched = true
  } catch (error) {
    console.warn('Organization contributors could not be loaded', error)
  }

  try {
    const raw = await fetchJson<GitHubContributor[]>(github['contributors-repo-url'])
    groups.push(raw.map(toContributor))
    fetched = true
  } catch (error) {
    console.warn('MineKot repository contributors could not be loaded', error)
  }

  if (!fetched) {
    throw new Error('Contributors could not be loaded from GitHub')
  }

  const contributors = mergeContributors(groups)
  writeCache(contributors)
  return contributors
}
