export type ThemeMode = 'dark' | 'light'

const THEME_STORAGE_KEY = 'theme'

/**
 * Reads the stored theme preference, falling back to null when unset or invalid.
 * @returns The stored theme mode, or null when the system preference should decide.
 */
export function getStoredTheme(): ThemeMode | null {
  try {
    const stored = window.localStorage.getItem(THEME_STORAGE_KEY)
    return stored === 'dark' || stored === 'light' ? stored : null
  } catch {
    return null
  }
}

/**
 * Resolves the theme the system currently reports.
 * @returns The system theme mode.
 */
export function getSystemTheme(): ThemeMode {
  return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark'
}

/**
 * Resolves the theme in effect right now, preferring the explicit document attribute.
 * @returns The active theme mode.
 */
export function getEffectiveTheme(): ThemeMode {
  const attribute = document.documentElement.dataset.theme
  if (attribute === 'dark' || attribute === 'light') {
    return attribute
  }
  return getSystemTheme()
}

/**
 * Applies a theme to the document and persists the choice.
 * @param theme - The theme mode to activate.
 */
export function applyTheme(theme: ThemeMode): void {
  document.documentElement.dataset.theme = theme
  try {
    window.localStorage.setItem(THEME_STORAGE_KEY, theme)
  } catch {
    console.warn('Theme preference could not be persisted')
  }
}
