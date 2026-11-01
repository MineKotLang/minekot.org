interface DocsCache {
  [key: string]: unknown
}

const STORAGE_KEY = 'mk-docs-cache'

const readCache = (): DocsCache => {
  try {
    const raw = sessionStorage.getItem(STORAGE_KEY)
    const parsed: DocsCache = raw ? JSON.parse(raw) : {}
    return parsed
  } catch (error: unknown) {
    console.warn('Docs cache read failed', error)
    try {
      sessionStorage.removeItem(STORAGE_KEY)
    } catch (removeError: unknown) {
      console.warn('Docs cache reset failed', removeError)
    }
    return {}
  }
}

const writeCache = (cache: DocsCache): void => {
  try {
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(cache))
  } catch (error: unknown) {
    console.warn('Docs cache write failed', error)
  }
}

/**
 * Reads a cached value by key.
 * @param key - Cache key to read.
 * @returns Cached value or null when missing.
 */
export const readCached = <T>(key: string): T | null => {
  const cache = readCache()
  const value: unknown = cache[key]
  return value === undefined ? null : (value as T)
}

/**
 * Writes a value to the docs cache.
 * @param key - Cache key to write.
 * @param value - Value to store.
 */
export const writeCached = <T>(key: string, value: T): void => {
  const cache = readCache()
  cache[key] = value
  writeCache(cache)
}

/**
 * Clears the docs cache.
 */
export const purgeDocsCache = (): void => {
  try {
    sessionStorage.removeItem(STORAGE_KEY)
  } catch (error: unknown) {
    console.warn('Docs cache purge failed', error)
  }
}

/**
 * Cache keys used by the docs pages.
 */
export const CACHE_KEYS = {
  sidebarTree: 'sidebar-tree',
  // one key per page: page:<physical path>
  page: (physicalPath: string): string => `page:${physicalPath}`,
}
