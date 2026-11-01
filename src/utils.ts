import minimessageConfig from './config/minimessage.json'

interface FrontmatterResult {
  content: string
  metadata: Record<string, string>
}

/**
 * Escapes special HTML characters to prevent rendering issues and XSS.
 * @param text - The raw text to escape.
 * @returns The escaped text safe for embedding in HTML.
 */
export function escapeHtml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
}

/**
 * Replaces `{key}` placeholders in a template with provided values.
 * @param template - The template containing placeholders.
 * @param values - Map of placeholder keys to replacement values.
 * @returns The template with known placeholders replaced.
 */
export function formatTemplate(template: string, values: Record<string, string>): string {
  return template.replace(/\{([a-zA-Z_]\w*)\}/g, (match: string, key: string): string => {
    return values[key] ?? match
  })
}

function escapeRegex(text: string): string {
  return text.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}

/**
 * Colorizes MiniMessage color tags inside already-highlighted, entity-escaped source HTML.
 * @param html - Highlighted source HTML where angle brackets are escaped.
 * @returns The HTML with MiniMessage tag content wrapped in color spans.
 */
export function colorizeMiniMessageSource(html: string): string {
  let result = html
  Object.entries(minimessageConfig.colors).forEach(([name, value]) => {
    const openTag = `&lt;${name}&gt;`
    const closeTag = `&lt;/${name}&gt;`
    const pattern = new RegExp(`${escapeRegex(openTag)}([\\s\\S]*?)${escapeRegex(closeTag)}`, 'g')
    result = result.replace(
      pattern,
      (_match: string, content: string): string =>
        `${openTag}<span style="color: ${value};">${content}</span>${closeTag}`,
    )
  })
  return result
}

function parseColors(text: string): string {
  let result = text
  Object.entries(minimessageConfig.colors).forEach(([colorName, colorValue]) => {
    const openRegex = new RegExp(`<${colorName}>`, 'g')
    const closeRegex = new RegExp(`</${colorName}>`, 'g')
    result = result.replace(openRegex, `<span style="color: ${colorValue};">`)
    result = result.replace(closeRegex, '</span>')
  })
  return result
}

function parseDecorations(text: string): string {
  let result = text
  Object.entries(minimessageConfig.decorations).forEach(([decoName, cssClass]) => {
    const openRegex = new RegExp(`<${decoName}>`, 'g')
    const closeRegex = new RegExp(`</${decoName}>`, 'g')
    result = result.replace(openRegex, `<span style="${getDecorationStyle(cssClass)};">`)
    result = result.replace(closeRegex, '</span>')
  })
  return result
}

/**
 * Converts MiniMessage tags to HTML spans.
 * @param text - Raw MiniMessage text.
 * @returns HTML with MiniMessage tags rendered.
 */
export function parseMiniMessage(text: string): string {
  let result: string = text

  result = parseColors(result)
  result = parseDecorations(result)

  result = result.replace(
    /<gradient:([^>]+)>(.*?)<\/gradient>/g,
    (_match: string, colors: string, content: string): string => {
      const colorList = colors.split(':')
      return createGradientSpan(escapeHtml(content), colorList)
    },
  )

  result = result.replace(/<rainbow>(.*?)<\/rainbow>/g, (_match: string, content: string): string => {
    return createRainbowSpan(escapeHtml(content))
  })

  result = result.replace(/<rainbow:!>(.*?)<\/rainbow>/g, (_match: string, content: string): string => {
    return createRainbowSpan(escapeHtml(content), true)
  })

  result = result.replace(
    /<shadow:([^>]+):([0-9.]+)>(.*?)<\/shadow>/g,
    (_match: string, color: string, alpha: string, content: string): string => {
      return (
        `<span style="text-shadow: 2px 2px 4px rgba(${hexToRgb(color)}, ${alpha});">` +
        `${escapeHtml(content)}</span>`
      )
    },
  )

  result = result.replace(
    /<shadow:([^>]+)>(.*?)<\/shadow>/g,
    (_match: string, color: string, content: string): string => {
      return `<span style="text-shadow: 2px 2px 4px ${color};">${escapeHtml(content)}</span>`
    },
  )

  result = result.replace(
    /<font:([^>]+)>(.*?)<\/font>/g,
    (_match: string, font: string, content: string): string => {
      return `<span style="font-family: '${font}';">${escapeHtml(content)}</span>`
    },
  )

  result = result.replace(/<newline>/g, '<br>')

  result = result.replace(
    /<click:([^:]+):([^>]+)>(.*?)<\/click>/g,
    (_match: string, action: string, value: string, content: string): string => {
      return (
        `<span style="cursor: pointer; text-decoration: underline;" data-click-action="${action}" ` +
        `data-click-value="${value}">${escapeHtml(content)}</span>`
      )
    },
  )

  result = result.replace(
    /<hover:show_text:([^>]+)>(.*?)<\/hover>/g,
    (_match: string, tooltip: string, content: string): string => {
      return `<span title="${escapeHtml(tooltip).replace(/'/g, "\\'")}">${escapeHtml(content)}</span>`
    },
  )

  result = result.replace(
    /<hover:show_item:([^>]+)>(.*?)<\/hover>/g,
    (_match: string, item: string, content: string): string => {
      return `<span title="Item: ${escapeHtml(item)}">${escapeHtml(content)}</span>`
    },
  )

  result = result.replace(/<key:([^>]+)>/g, (_match: string, key: string): string => {
    return (
      '<kbd style="background: #eee; border: 1px solid #ccc; border-radius: 3px; ' +
      `padding: 2px 6px; font-family: monospace;">${escapeHtml(key)}</kbd>`
    )
  })

  result = result.replace(
    /<insert:([^>]+)>(.*?)<\/insert>/g,
    (_match: string, text: string, content: string): string => {
      return `<span style="cursor: pointer;" data-insert="${escapeHtml(text)}">${escapeHtml(content)}</span>`
    },
  )

  result = result.replace(/<lang:([^>]+)>/g, (_match: string, key: string): string => {
    return `<span data-lang="${escapeHtml(key)}" style="color: #aaa;">[${escapeHtml(key)}]</span>`
  })

  result = result.replace(
    /<lang_or:([^:]+):([^>]+)>/g,
    (_match: string, key: string, fallback: string): string => {
      return (
        `<span data-lang="${escapeHtml(key)}" data-fallback="${escapeHtml(fallback)}">` +
        `${escapeHtml(fallback)}</span>`
      )
    },
  )

  result = result.replace(/<selector:([^>]+)>/g, (_match: string, sel: string): string => {
    return `<span data-selector="${escapeHtml(sel)}" style="color: #aaa;">@${escapeHtml(sel)}</span>`
  })

  result = result.replace(
    /<score:([^:]+):([^>]+)>/g,
    (_match: string, name: string, objective: string): string => {
      return (
        `<span data-score-name="${escapeHtml(name)}" data-score-objective="${escapeHtml(objective)}" ` +
        `style="color: #aaa;">${escapeHtml(name)}: ${escapeHtml(objective)}</span>`
      )
    },
  )

  result = result.replace(
    /<nbt:entity:([^:]+):([^>]+)>/g,
    (_match: string, selector: string, path: string): string => {
      return (
        `<span data-nbt-type="entity" data-nbt-selector="${escapeHtml(selector)}" ` +
        `data-nbt-path="${escapeHtml(path)}" style="color: #aaa;">${escapeHtml(path)}</span>`
      )
    },
  )

  result = result.replace(/<pride>(.*?)<\/pride>/g, (_match: string, content: string): string => {
    return createPrideSpan(escapeHtml(content), 'pride')
  })

  result = result.replace(
    /<pride:([^>]+)>(.*?)<\/pride>/g,
    (_match: string, flag: string, content: string): string => {
      return createPrideSpan(escapeHtml(content), flag)
    },
  )

  result = result.replace(
    /<sprite:([^:]+):([^>]+)>/g,
    (_match: string, atlas: string, sprite: string): string => {
      return (
        `<span data-sprite-atlas="${escapeHtml(atlas)}" data-sprite="${escapeHtml(sprite)}" ` +
        'style="display: inline-block; width: 16px; height: 16px; background: #eee;">🖼️</span>'
      )
    },
  )

  result = result.replace(
    /<transition:([^>]+)>(.*?)<\/transition>/g,
    (_match: string, colors: string, content: string): string => {
      const colorList = colors.split(':')
      return createGradientSpan(escapeHtml(content), colorList)
    },
  )

  result = result.replace(/<reset>/g, '')

  return result
}

function hexToRgb(hex: string): string {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  return result ? `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}` : '0, 0, 0'
}

function getDecorationStyle(decoration: string): string {
  const styles: Record<string, string> = {
    bold: 'font-weight: bold',
    italic: 'font-style: italic',
    underlined: 'text-decoration: underline',
    strikethrough: 'text-decoration: line-through',
    obfuscated: 'filter: blur(2px)',
  }
  return styles[decoration] || ''
}

function createGradientSpan(content: string, colors: string[]): string {
  if (colors.length < 2) {
    return content
  }
  const gradient = `linear-gradient(90deg, ${colors.join(', ')})`
  return (
    `<span style="background: ${gradient}; -webkit-background-clip: text; ` +
    `-webkit-text-fill-color: transparent; background-clip: text;">${content}</span>`
  )
}

function createRainbowSpan(content: string, reverse = false): string {
  const rainbowColors = reverse
    ? ['#ff0000', '#ff7f00', '#ffff00', '#00ff00', '#0000ff', '#4b0082', '#9400d3']
    : ['#9400d3', '#4b0082', '#0000ff', '#00ff00', '#ffff00', '#ff7f00', '#ff0000']
  return createGradientSpan(content, rainbowColors)
}

function createPrideSpan(content: string, flag: string): string {
  const flagColors: Record<string, string[]> = {
    pride: ['#e40303', '#ff8c00', '#ffed00', '#008026', '#24408e', '#732982'],
    trans: ['#5bcefa', '#f5a9b8', '#ffffff', '#f5a9b8', '#5bcefa'],
    bi: ['#d60270', '#d60270', '#9b4f96', '#9b4f96', '#0038a8', '#0038a8'],
    pan: ['#ff218c', '#ffd800', '#21b1ff'],
    lesbian: ['#d52d00', '#ef7627', '#ff9a56', '#ffffff', '#d162a4', '#b55690', '#a30262'],
    ace: ['#000000', '#a4a4a4', '#ffffff', '#810082'],
    nb: ['#fff430', '#ffffff', '#9c59d1', '#2c2c2c'],
    progress: ['#ffffff', '#ffafc8', '#ff74b0', '#ff51a5', '#ff268a', '#ff0060', '#99004a'],
    agender: ['#000000', '#bcbcbc', '#ffffff', '#bcbcbc', '#000000'],
    demisexual: ['#000000', '#ffffff', '#810082'],
    genderqueer: ['#b57edc', '#ffffff', '#4a8123'],
    genderfluid: ['#ffb76b', '#ffc8c8', '#ffffff', '#ffc8c8', '#ffb76b'],
    intersex: ['#ffd800', '#7902aa', '#ffd800'],
    aro: ['#3da542', '#a8d47a', '#ffffff', '#a8d47a', '#3da542'],
    baker: ['#ff7f27', '#ffdf00', '#24c8f8', '#ffffff', '#24c8f8', '#ffdf00', '#ff7f27'],
    philly: ['#009639', '#0b3d91', '#ee2c2f', '#ffffff', '#ee2c2f', '#0b3d91', '#009639'],
    queer: ['#b57edc', '#ffffff', '#4a8123'],
    gay: ['#078d70', '#26ceaa', '#98ff98', '#ffffff', '#98ff98', '#26ceaa', '#078d70'],
    bigender: ['#c679e8', '#ffffff', '#9d4edd', '#ffffff', '#c679e8'],
    demigender: ['#7fff7f', '#ffffff', '#bf7fff', '#ffffff', '#7fff7f'],
    femboy: ['#ff9acd', '#ffffff', '#ff9acd'],
    intersex_inclusive: ['#ffd800', '#7902aa', '#ffd800', '#ffffff', '#ffd800', '#7902aa', '#ffd800'],
  }
  const colors = flagColors[flag] || flagColors.pride
  return createGradientSpan(content, colors)
}

/**
 * Normalizes a URL path by stripping trailing slashes, ensuring a leading slash,
 * lowercasing, and removing any repeating path segments or segment sequences
 * that would cause the URL to grow unboundedly on repeated navigation.
 * @param p - The raw path to normalize.
 * @returns A clean, deduplicated, absolute lowercase path.
 */
export function normalizePath(p: string): string {
  let clean: string = p.replace(/\.md$/, '').toLowerCase()

  if (clean.endsWith('/') && clean.length > 1) {
    clean = clean.slice(0, -1)
  }

  if (!clean.startsWith('/')) {
    clean = '/' + clean
  }

  // dedupe consecutive and alternating repeats
  const parts = clean.split('/').filter((part) => part.length > 0)
  const deduped: string[] = []

  for (const part of parts) {
    if (deduped[deduped.length - 1] === part) {
      continue
    }

    let repeated = false
    for (let len = 1; len <= Math.floor(deduped.length / 2); len++) {
      const tail = deduped.slice(deduped.length - len)
      const preceding = deduped.slice(deduped.length - len * 2, deduped.length - len)
      if (JSON.stringify(preceding) === JSON.stringify(tail)) {
        repeated = true
        break
      }
    }

    if (!repeated) {
      deduped.push(part)
    }
  }

  return '/' + deduped.join('/')
}

/**
 * Parses Jekyll/YAML-like frontmatter from the beginning of a Markdown string.
 * @param rawMarkdown - The raw Markdown content.
 * @returns An object containing the cleaned content and metadata key-value pairs.
 */
export function parseFrontmatter(rawMarkdown: string): FrontmatterResult {
  const metadata: Record<string, string> = {}
  let content = rawMarkdown

  if (rawMarkdown.startsWith('---')) {
    const endIdx = rawMarkdown.indexOf('---', 3)
    if (endIdx !== -1) {
      const frontmatterText = rawMarkdown.slice(3, endIdx)
      content = rawMarkdown.slice(endIdx + 3).trim()

      const lines = frontmatterText.split('\n')
      for (const line of lines) {
        const colonIdx = line.indexOf(':')
        if (colonIdx !== -1) {
          const key = line.slice(0, colonIdx).trim()
          const value = line.slice(colonIdx + 1).trim()
          const cleanValue = value.replace(/^["']|["']$/g, '')
          if (key) {
            metadata[key] = cleanValue
          }
        }
      }
    }
  }

  return { content, metadata }
}

/**
 * Builds a human-readable label from the last URL path segment.
 * @param path - Path to derive the label from.
 * @returns Title-cased label.
 */
export function getFallbackLabel(path: string): string {
  let segment = path.split('/').filter(Boolean).pop() || ''
  segment = segment.replace(/\.md$/, '')
  const spaced = segment.replace(/[-_]+/g, ' ')
  return spaced
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
}
