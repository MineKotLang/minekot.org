interface SimulatorSettings {
  name: string
  version: string
  author: string
}

export interface SimulatorCommand {
  name: string
  description: string
  aliases: string[]
  messages: string[]
}

export interface SimulatorScript {
  settings: SimulatorSettings
  hasJoinHandler: boolean
  joinMessages: string[]
  commands: SimulatorCommand[]
  loadMessages: string[]
  unloadMessages: string[]
}

export type SimulatorIssueCode = 'MISSING_SETTINGS' | 'MISSING_SETTINGS_NAME' | 'UNBALANCED_BRACES'

interface SimulatorParseResult {
  script: SimulatorScript | null
  issues: SimulatorIssueCode[]
}

interface TextBlock {
  body: string
  endIndex: number
}

interface StringLiteral {
  value: string
  endIndex: number
}

interface SettingsParseResult {
  settings: SimulatorSettings | null
  issues: SimulatorIssueCode[]
}

const MESSAGE_CALL_PATTERN = '\\b(?:sendMessage|sendActionBar|reply|info|warn|error|broadcast)\\s*\\('
const EVENT_PATTERN = '\\b(?:on|listen)\\s*<\\s*MKPlayerJoinEvent\\s*>'
const COMMAND_PATTERN = '\\bcommand\\s*\\('

function decodeEscapes(raw: string): string {
  return raw.replace(/\\(u[0-9a-fA-F]{4}|.)/g, (_match: string, token: string): string => {
    if (token.startsWith('u') && token.length === 5) {
      return String.fromCharCode(parseInt(token.slice(1), 16))
    }

    switch (token) {
      case 'n':
        return '\n'
      case 'r':
        return '\r'
      case 't':
        return '\t'
      case 'b':
        return '\b'
      case '0':
        return '\0'
      case '\\':
        return '\\'
      case '"':
        return '"'
      case "'":
        return "'"
      case '$':
        return '$'
      default:
        return token
    }
  })
}

function readStringAt(source: string, startIndex: number): StringLiteral | null {
  if (source[startIndex] !== '"') {
    return null
  }

  if (source.startsWith('"""', startIndex)) {
    const end = source.indexOf('"""', startIndex + 3)
    if (end === -1) {
      return null
    }
    return { value: source.slice(startIndex + 3, end), endIndex: end + 3 }
  }

  let index = startIndex + 1
  let raw = ''

  while (index < source.length) {
    const char = source[index]
    if (char === '\\') {
      raw += source.slice(index, index + 2)
      index += 2
      continue
    }
    if (char === '"') {
      return { value: decodeEscapes(raw), endIndex: index + 1 }
    }
    raw += char
    index++
  }

  return null
}

function readCharLiteralEnd(source: string, startIndex: number): number {
  let index = startIndex + 1

  while (index < source.length) {
    if (source[index] === '\\') {
      index += 2
      continue
    }
    if (source[index] === "'") {
      return index + 1
    }
    if (source[index] === '\n') {
      return -1
    }
    index++
  }

  return -1
}

/**
 * Finds the matching closing bracket while skipping string and character literals.
 * @param source - The source text to inspect.
 * @param openIndex - The index of the opening bracket.
 * @param openChar - The opening bracket character.
 * @param closeChar - The closing bracket character.
 * @returns The index of the matching closing bracket, or -1 when unbalanced.
 */
function findBalanced(source: string, openIndex: number, openChar: string, closeChar: string): number {
  let depth = 0
  let index = openIndex

  while (index < source.length) {
    const char = source[index]

    if (char === '"') {
      const literal = readStringAt(source, index)
      if (literal === null) {
        return -1
      }
      index = literal.endIndex
      continue
    }

    if (char === "'") {
      const end = readCharLiteralEnd(source, index)
      if (end !== -1) {
        index = end
        continue
      }
    }

    if (char === openChar) {
      depth++
    } else if (char === closeChar) {
      depth--
      if (depth === 0) {
        return index
      }
    }

    index++
  }

  return -1
}

function readBlock(source: string, openIndex: number): TextBlock | null {
  if (source[openIndex] !== '{') {
    return null
  }

  const endIndex = findBalanced(source, openIndex, '{', '}')
  if (endIndex === -1) {
    return null
  }

  return { body: source.slice(openIndex + 1, endIndex), endIndex }
}

function skipWhitespace(source: string, startIndex: number): number {
  let index = startIndex

  while (index < source.length && /\s/.test(source[index])) {
    index++
  }

  return index
}

/**
 * Removes line and block comments while preserving string literals and line breaks.
 * @param source - The raw script source.
 * @returns The source without comments.
 */
function stripComments(source: string): string {
  let result = ''
  let index = 0

  while (index < source.length) {
    const char = source[index]

    if (char === '"') {
      const literal = readStringAt(source, index)
      if (literal !== null) {
        result += source.slice(index, literal.endIndex)
        index = literal.endIndex
        continue
      }
    }

    if (char === "'") {
      const end = readCharLiteralEnd(source, index)
      if (end !== -1) {
        result += source.slice(index, end)
        index = end
        continue
      }
    }

    if (char === '/' && source[index + 1] === '/') {
      const newline = source.indexOf('\n', index + 2)
      if (newline === -1) {
        break
      }
      result += '\n'
      index = newline + 1
      continue
    }

    if (char === '/' && source[index + 1] === '*') {
      const end = source.indexOf('*/', index + 2)
      if (end === -1) {
        break
      }
      result += source.slice(index, end + 2).replace(/[^\n]/g, '')
      index = end + 2
      continue
    }

    result += char
    index++
  }

  return result
}

/**
 * Checks that every brace in the source has a matching partner outside literals.
 * @param source - The source text to inspect.
 * @returns True when all braces are balanced.
 */
function hasBalancedBraces(source: string): boolean {
  let depth = 0
  let index = 0

  while (index < source.length) {
    const char = source[index]

    if (char === '"') {
      const literal = readStringAt(source, index)
      if (literal === null) {
        return false
      }
      index = literal.endIndex
      continue
    }

    if (char === "'") {
      const end = readCharLiteralEnd(source, index)
      if (end !== -1) {
        index = end
        continue
      }
    }

    if (char === '{') {
      depth++
    } else if (char === '}') {
      depth--
      if (depth < 0) {
        return false
      }
    }

    index++
  }

  return depth === 0
}

function parseAssignments(body: string): Record<string, string> {
  const values: Record<string, string> = {}
  const pattern = /([A-Za-z_]\w*)\s*=\s*/g
  let match: RegExpExecArray | null = pattern.exec(body)

  while (match !== null) {
    const literal = readStringAt(body, match.index + match[0].length)
    if (literal !== null) {
      values[match[1]] = literal.value
      pattern.lastIndex = literal.endIndex
    }
    match = pattern.exec(body)
  }

  return values
}

function extractFirstString(source: string): string | null {
  for (let index = 0; index < source.length; index++) {
    if (source[index] !== '"') {
      continue
    }

    const literal = readStringAt(source, index)
    if (literal !== null) {
      return literal.value
    }
  }

  return null
}

function extractAllStrings(source: string): string[] {
  const values: string[] = []
  let index = 0

  while (index < source.length) {
    if (source[index] !== '"') {
      index++
      continue
    }

    const literal = readStringAt(source, index)
    if (literal === null) {
      index++
      continue
    }

    values.push(literal.value)
    index = literal.endIndex
  }

  return values
}

function extractAssignmentString(source: string, key: string): string | null {
  const pattern = new RegExp(`\\b${key}\\s*=\\s*`, 'g')
  const match = pattern.exec(source)
  if (match === null) {
    return null
  }

  const literal = readStringAt(source, match.index + match[0].length)
  return literal !== null ? literal.value : null
}

function extractAliases(signature: string): string[] {
  const pattern = /\baliases\s*=\s*listOf\s*\(/g
  const match = pattern.exec(signature)
  if (match === null) {
    return []
  }

  const openIndex = match.index + match[0].length - 1
  const closeIndex = findBalanced(signature, openIndex, '(', ')')
  if (closeIndex === -1) {
    return []
  }

  return extractAllStrings(signature.slice(openIndex + 1, closeIndex))
}

function extractMessageCalls(body: string): string[] {
  const messages: string[] = []
  const pattern = new RegExp(MESSAGE_CALL_PATTERN, 'g')
  let match: RegExpExecArray | null = pattern.exec(body)

  while (match !== null) {
    const openIndex = match.index + match[0].length - 1
    const closeIndex = findBalanced(body, openIndex, '(', ')')
    if (closeIndex !== -1) {
      const message = extractFirstString(body.slice(openIndex + 1, closeIndex))
      if (message !== null && message.length > 0) {
        messages.push(message)
      }
    }
    match = pattern.exec(body)
  }

  return messages
}

function readBlockAfter(source: string, searchIndex: number): TextBlock | null {
  const openIndex = skipWhitespace(source, searchIndex)
  return readBlock(source, openIndex)
}

function parseSettings(source: string): SettingsParseResult {
  const match = /\bsettings\s*\{/.exec(source)
  if (match === null) {
    return { settings: null, issues: ['MISSING_SETTINGS'] }
  }

  const block = readBlock(source, match.index + match[0].length - 1)
  if (block === null) {
    return { settings: null, issues: ['UNBALANCED_BRACES'] }
  }

  const values = parseAssignments(block.body)
  const name = values.name ?? ''
  if (name.length === 0) {
    return { settings: null, issues: ['MISSING_SETTINGS_NAME'] }
  }

  return {
    settings: {
      name,
      version: values.version ?? '',
      author: values.author ?? '',
    },
    issues: [],
  }
}

interface JoinHandlerParseResult {
  found: boolean
  messages: string[]
}

function parseJoinMessages(source: string): JoinHandlerParseResult {
  const messages: string[] = []
  let found = false
  const pattern = new RegExp(EVENT_PATTERN, 'g')
  let match: RegExpExecArray | null = pattern.exec(source)

  while (match !== null) {
    let cursor = skipWhitespace(source, match.index + match[0].length)

    if (source[cursor] === '(') {
      const closeIndex = findBalanced(source, cursor, '(', ')')
      if (closeIndex === -1) {
        break
      }
      cursor = skipWhitespace(source, closeIndex + 1)
    }

    if (source[cursor] !== '{') {
      match = pattern.exec(source)
      continue
    }

    const block = readBlock(source, cursor)
    if (block === null) {
      break
    }

    found = true
    messages.push(...extractMessageCalls(block.body))
    pattern.lastIndex = block.endIndex + 1
    match = pattern.exec(source)
  }

  return { found, messages }
}

function parseLifecycleMessages(source: string, hook: string): string[] {
  const pattern = new RegExp(`\\b${hook}\\s*\\{`, 'g')
  const match = pattern.exec(source)
  if (match === null) {
    return []
  }

  const block = readBlock(source, match.index + match[0].length - 1)
  return block !== null ? extractMessageCalls(block.body) : []
}

function parseCommands(source: string): SimulatorCommand[] {
  const commands: SimulatorCommand[] = []
  const pattern = new RegExp(COMMAND_PATTERN, 'g')
  let match: RegExpExecArray | null = pattern.exec(source)

  while (match !== null) {
    const openIndex = match.index + match[0].length - 1
    const closeIndex = findBalanced(source, openIndex, '(', ')')
    if (closeIndex === -1) {
      break
    }

    const signature = source.slice(openIndex + 1, closeIndex)
    const name = extractFirstString(signature)
    const block = readBlockAfter(source, closeIndex + 1)

    if (name === null || name.length === 0 || block === null) {
      pattern.lastIndex = closeIndex + 1
      match = pattern.exec(source)
      continue
    }

    const description =
      extractAssignmentString(signature, 'description') ?? extractAssignmentString(block.body, 'description')

    commands.push({
      name,
      description: description ?? '',
      aliases: extractAliases(signature),
      messages: extractMessageCalls(block.body),
    })

    pattern.lastIndex = block.endIndex + 1
    match = pattern.exec(source)
  }

  return commands
}

/**
 * Parses an editable MineKot script into the data used by the homepage simulator.
 * @param source - The raw script source entered in the editor.
 * @returns The parsed script and any issues found.
 */
export function parseScript(source: string): SimulatorParseResult {
  if (source.trim().length === 0) {
    return { script: null, issues: ['MISSING_SETTINGS'] }
  }

  const cleaned = stripComments(source)
  if (!hasBalancedBraces(cleaned)) {
    return { script: null, issues: ['UNBALANCED_BRACES'] }
  }

  const settingsResult = parseSettings(cleaned)
  if (settingsResult.settings === null) {
    return { script: null, issues: settingsResult.issues }
  }

  const joinHandler = parseJoinMessages(cleaned)

  return {
    script: {
      settings: settingsResult.settings,
      hasJoinHandler: joinHandler.found,
      joinMessages: joinHandler.messages,
      commands: parseCommands(cleaned),
      loadMessages: parseLifecycleMessages(cleaned, 'onLoad'),
      unloadMessages: parseLifecycleMessages(cleaned, 'onUnload'),
    },
    issues: settingsResult.issues,
  }
}

/**
 * Replaces `${key}` placeholders with provided values.
 * @param text - Text containing placeholders.
 * @param values - Map of placeholder keys to values.
 * @returns Text with known placeholders replaced.
 */
export function applyPlaceholders(text: string, values: Record<string, string>): string {
  return text.replace(/\$\{([^}]+)\}/g, (match: string, expression: string): string => {
    const key = expression.trim()
    return values[key] ?? match
  })
}
