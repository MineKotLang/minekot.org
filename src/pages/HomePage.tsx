import React, { useEffect, useMemo, useRef, useState } from 'react'

import { HeroMascot } from '../components/HeroMascot.tsx'
import { useMessages } from '../hooks/useLanguage.tsx'
import homepageData from '../config/homepage.json'
import type { SimulatorCommand, SimulatorIssueCode, SimulatorScript } from '../scriptSimulator.ts'
import { applyPlaceholders, parseScript } from '../scriptSimulator.ts'
import { colorizeMiniMessageSource, escapeHtml, formatTemplate, parseMiniMessage } from '../utils.ts'

interface HighlightResult {
  value: string
}

interface LoadedScriptEntry {
  file: string
  script: SimulatorScript
  enabled: boolean
}

declare const hljs:
  | {
      highlight(code: string, options: { language: string }): HighlightResult
    }
  | undefined

const ISSUE_MESSAGE_KEYS: Record<SimulatorIssueCode, string> = {
  MISSING_SETTINGS: 'simulator-error-missing-settings',
  MISSING_SETTINGS_NAME: 'simulator-error-missing-name',
  UNBALANCED_BRACES: 'simulator-error-unbalanced-braces',
}

const PLAYER_NAME_KEY = 'simulator-player-name'
const PLAYER_IP_KEY = 'simulator-player-ip'

const CONSOLE_FILTERS: Array<{ value: string; 'label-key': string }> = [
  { value: 'all', 'label-key': 'console-filter-all' },
  { value: 'error', 'label-key': 'console-filter-error' },
]

const SCRIPT_FILE_EXTENSION = '.mkot.kts'

const MINEKOT_HELP_LINES = [
  'minekot-help-line-help',
  'minekot-help-line-load',
  'minekot-help-line-unload',
  'minekot-help-line-reload',
  'minekot-help-line-enable',
  'minekot-help-line-disable',
  'minekot-help-line-list',
] as const

const isScriptFile = (file: string): boolean =>
  file.length > SCRIPT_FILE_EXTENSION.length && file.endsWith(SCRIPT_FILE_EXTENSION)

const resolveIssue = (issue: SimulatorIssueCode, messages: Record<string, string>): string =>
  messages[ISSUE_MESSAGE_KEYS[issue]]

const buildScriptContext = (script: SimulatorScript): Record<string, string> => ({
  'settings.name': script.settings.name,
  'settings.version': script.settings.version,
  'settings.author': script.settings.author,
  'script.name': script.settings.name,
})

const buildPlayerContext = (script: SimulatorScript, playerName: string): Record<string, string> => ({
  ...buildScriptContext(script),
  player: playerName,
  'player.name': playerName,
  'event.player.name': playerName,
  'sender.name': playerName,
})

const buildCommandContext = (
  script: SimulatorScript,
  command: SimulatorCommand,
  playerName: string,
): Record<string, string> => ({
  ...buildPlayerContext(script, playerName),
  command: command.name,
  'command.name': command.name,
  'descriptor.name': command.name,
})

/**
 * Landing page with script simulator.
 * @returns The home page element.
 */
export const HomePage: React.FC = () => {
  const messages = useMessages()
  const PLAYER_NAME: string = messages[PLAYER_NAME_KEY]
  const PLAYER_IP: string = messages[PLAYER_IP_KEY]
  const [scriptCode, setScriptCode] = useState<string>(messages['simulator-sample-code'])
  const [loadedScript, setLoadedScript] = useState<LoadedScriptEntry | null>(null)
  const [logs, setLogs] = useState<Array<{ time: string; type: string; message: string }>>([])
  const [logFilter, setLogFilter] = useState<string>('all')
  const [splitRatio, setSplitRatio] = useState<number>(0.5)
  const [consoleInput, setConsoleInput] = useState<string>('')
  const [codeCopied, setCodeCopied] = useState<boolean>(false)

  const highlightRef = useRef<HTMLDivElement>(null)
  const lineNumbersRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const isDraggingRef = useRef<boolean>(false)
  const copyFeedbackTimeoutRef = useRef<number | null>(null)

  const highlightedCode = useMemo<string>(() => {
    if (typeof hljs === 'undefined' || typeof hljs.highlight !== 'function') {
      return colorizeMiniMessageSource(escapeHtml(scriptCode))
    }

    try {
      return colorizeMiniMessageSource(hljs.highlight(scriptCode, { language: 'kotlin' }).value)
    } catch {
      return colorizeMiniMessageSource(escapeHtml(scriptCode))
    }
  }, [scriptCode])

  const lineNumbers = useMemo<number[]>(() => {
    const count = scriptCode.split('\n').length
    return Array.from({ length: count }, (_, index) => index + 1)
  }, [scriptCode])

  const previewScript = useMemo<SimulatorScript | null>(() => parseScript(scriptCode).script, [scriptCode])
  const editorScriptName =
    previewScript?.settings.name ?? loadedScript?.script.settings.name ?? messages['simulator-default-script-name']
  const editorTabTitle = formatTemplate(messages['editor-tab-title'], { name: editorScriptName })

  const getTimestamp = (): string => {
    const now = new Date()
    const pad = (num: number): string => String(num).padStart(2, '0')
    return `${pad(now.getHours())}:${pad(now.getMinutes())}:${pad(now.getSeconds())}`
  }

  useEffect(() => {
    setLogs([{ time: getTimestamp(), type: 'info', message: messages['log-init'] }])
  }, [])

  useEffect(
    () => () => {
      if (copyFeedbackTimeoutRef.current !== null) {
        window.clearTimeout(copyFeedbackTimeoutRef.current)
      }
    },
    [],
  )

  const addLog = (type: string, message: string): void => {
    setLogs((prev) => [...prev, { time: getTimestamp(), type, message }])
  }

  const isLogVisible = (logType: string): boolean => {
    if (logFilter === 'all') {
      return true
    }
    return logType === logFilter
  }

  const copyToClipboard = (text: string): void => {
    navigator.clipboard.writeText(text)
  }

  const plainTextOf = (html: string): string => {
    const temp = document.createElement('div')
    temp.innerHTML = html
    return temp.textContent ?? html
  }

  const queryLoadFile = (file: string): { ok: true; script: SimulatorScript } | { ok: false; message: string } => {
    if (!isScriptFile(file)) {
      return { ok: false, message: formatTemplate(messages['minekot-error-extension'], { file }) }
    }

    const result = parseScript(scriptCode)
    if (result.script === null) {
      const issue: SimulatorIssueCode = result.issues[0] ?? 'MISSING_SETTINGS'
      return {
        ok: false,
        message: formatTemplate(messages['minekot-error-parse'], {
          file,
          reason: resolveIssue(issue, messages),
        }),
      }
    }

    const stem = file.slice(0, -SCRIPT_FILE_EXTENSION.length)
    if (stem !== result.script.settings.name) {
      return {
        ok: false,
        message: formatTemplate(messages['minekot-error-not-found'], {
          file,
          available: `${result.script.settings.name}.mkot.kts`,
        }),
      }
    }

    return { ok: true, script: result.script }
  }

  const executeMinekotUnload = (file: string): void => {
    if (!isScriptFile(file)) {
      addLog('error', formatTemplate(messages['minekot-error-extension'], { file }))
      return
    }

    if (loadedScript === null || loadedScript.file !== file) {
      addLog('error', formatTemplate(messages['minekot-error-not-loaded'], { file }))
      return
    }

    const name = loadedScript.script.settings.name
    addLog('info', formatTemplate(messages['minekot-unload-start'], { name, file }))
    const unloadContext = buildScriptContext(loadedScript.script)
    loadedScript.script.unloadMessages.forEach((message) => {
      addLog('info', parseMiniMessage(applyPlaceholders(message, unloadContext)))
    })
    addLog('success', formatTemplate(messages['minekot-unload-success'], { name, file }))
    setLoadedScript(null)
  }

  const executeMinekotLoad = (kind: 'load' | 'reload', file: string): void => {
    const result = queryLoadFile(file)
    if (!result.ok) {
      addLog('error', result.message)
      return
    }

    const parsedScript = result.script
    const version =
      parsedScript.settings.version.length > 0 ? parsedScript.settings.version : messages['simulator-unknown-value']
    const author =
      parsedScript.settings.author.length > 0 ? parsedScript.settings.author : messages['simulator-unknown-value']
    const name = parsedScript.settings.name

    if (kind === 'load' && loadedScript !== null) {
      if (loadedScript.file === file) {
        addLog('error', formatTemplate(messages['minekot-error-already-loaded'], { file }))
        return
      }
      executeMinekotUnload(loadedScript.file)
    }

    if (kind === 'reload' && loadedScript !== null) {
      const unloadContext = buildScriptContext(loadedScript.script)
      loadedScript.script.unloadMessages.forEach((message) => {
        addLog('info', parseMiniMessage(applyPlaceholders(message, unloadContext)))
      })
    }

    addLog('info', formatTemplate(messages['log-run-settings'], { name, version, author }))
    addLog('info', formatTemplate(messages['log-run-compiling'], { name, file }))

    setTimeout(() => {
      const duration = String(Math.floor(12 + Math.random() * 16))
      addLog(
        'success',
        formatTemplate(kind === 'reload' ? messages['log-run-success'] : messages['minekot-load-success'], {
          name,
          duration,
          file,
        }),
      )

      const loadContext = buildScriptContext(parsedScript)
      parsedScript.loadMessages.forEach((message) => {
        addLog('info', parseMiniMessage(applyPlaceholders(message, loadContext)))
      })

      setLoadedScript({ file, script: parsedScript, enabled: true })
    }, 400)
  }

  const executeMinekotToggle = (action: 'enable' | 'disable', file: string): void => {
    if (!isScriptFile(file)) {
      addLog('error', formatTemplate(messages['minekot-error-extension'], { file }))
      return
    }

    if (loadedScript === null || loadedScript.file !== file) {
      addLog('error', formatTemplate(messages['minekot-error-not-loaded'], { file }))
      return
    }

    if (loadedScript.enabled === (action === 'enable')) {
      addLog(
        'error',
        formatTemplate(
          action === 'enable' ? messages['minekot-error-already-enabled'] : messages['minekot-error-already-disabled'],
          { file },
        ),
      )
      return
    }

    const name = loadedScript.script.settings.name
    setLoadedScript({ ...loadedScript, enabled: action === 'enable' })
    addLog(
      'info',
      formatTemplate(action === 'enable' ? messages['minekot-enable-success'] : messages['minekot-disable-success'], {
        name,
        file,
      }),
    )
  }

  const requireSubFile = (args: string[], sub: string): string | null => {
    if (args.length !== 1 || args[0].length === 0) {
      addLog('error', formatTemplate(messages['minekot-usage-file'], { sub }))
      return null
    }
    return args[0]
  }

  const handleMinekot = (args: string[]): void => {
    const sub = args[0]?.toLowerCase()

    switch (sub) {
      case undefined:
        addLog('error', messages['minekot-usage-general'])
        return
      case 'help':
        if (args.length > 1) {
          addLog('error', messages['minekot-usage-general'])
          return
        }
        addLog('info', messages['minekot-help-header'])
        MINEKOT_HELP_LINES.forEach((key) => {
          addLog('info', messages[key])
        })
        return
      case 'list': {
        if (args.length > 1) {
          addLog('error', messages['minekot-usage-list'])
          return
        }

        const availableFile = `${editorScriptName}.mkot.kts`
        const unloadedFiles = loadedScript !== null && loadedScript.file === availableFile ? [] : [availableFile]
        const loadedCount = loadedScript === null ? 0 : 1

        addLog('info', formatTemplate(messages['minekot-list-header'], { count: String(loadedCount) }))
        if (loadedScript === null) {
          addLog('info', messages['minekot-list-none'])
        } else {
          addLog(
            'info',
            formatTemplate(messages['minekot-list-entry'], {
              file: loadedScript.file,
              status: loadedScript.enabled ? messages['minekot-status-enabled'] : messages['minekot-status-disabled'],
            }),
          )
        }

        addLog(
          'info',
          formatTemplate(messages['minekot-list-unloaded-header'], { count: String(unloadedFiles.length) }),
        )
        if (unloadedFiles.length === 0) {
          addLog('info', messages['minekot-list-none'])
        } else {
          addLog(
            'info',
            formatTemplate(messages['minekot-list-entry'], {
              file: unloadedFiles[0],
              status: messages['minekot-status-unloaded'],
            }),
          )
        }
        return
      }
      case 'load':
      case 'reload': {
        const kind = sub === 'load' ? 'load' : 'reload'
        const file = requireSubFile(args.slice(1), sub)
        if (file !== null) {
          executeMinekotLoad(kind, file)
        }
        return
      }
      case 'unload': {
        const file = requireSubFile(args.slice(1), sub)
        if (file !== null) {
          executeMinekotUnload(file)
        }
        return
      }
      case 'enable':
      case 'disable': {
        const toggle = sub === 'enable' ? 'enable' : 'disable'
        const file = requireSubFile(args.slice(1), sub)
        if (file !== null) {
          executeMinekotToggle(toggle, file)
        }
        return
      }
      default:
        addLog('error', formatTemplate(messages['minekot-error-unknown-sub'], { sub }))
    }
  }

  const handleRun = (): void => {
    const file = `${editorScriptName}.mkot.kts`
    const action = loadedScript !== null && loadedScript.file === file ? 'reload' : 'load'
    executeMinekotLoad(action, file)
  }

  const handleJoin = (): void => {
    if (loadedScript === null) {
      addLog('warning', formatTemplate(messages['log-join-warn'], { player: PLAYER_NAME }))
      return
    }

    addLog('info', formatTemplate(messages['log-join-info'], { player: PLAYER_NAME, ip: PLAYER_IP }))

    if (!loadedScript.enabled) {
      addLog(
        'warning',
        formatTemplate(messages['log-join-disabled'], {
          name: loadedScript.script.settings.name,
          player: PLAYER_NAME,
        }),
      )
      return
    }

    if (!loadedScript.script.hasJoinHandler) {
      addLog(
        'warning',
        formatTemplate(messages['log-join-no-handler'], {
          name: loadedScript.script.settings.name,
        }),
      )
      return
    }

    addLog(
      'info',
      formatTemplate(messages['log-join-trigger'], {
        name: loadedScript.script.settings.name,
        player: PLAYER_NAME,
      }),
    )

    const context = buildPlayerContext(loadedScript.script, PLAYER_NAME)
    loadedScript.script.joinMessages.forEach((message) => {
      addLog('msg', parseMiniMessage(applyPlaceholders(message, context)))
    })
  }

  const handleCmd = (commandName: string): void => {
    if (loadedScript === null) {
      addLog(
        'warning',
        formatTemplate(messages['log-cmd-warn'], {
          player: PLAYER_NAME,
          command: commandName,
        }),
      )
      return
    }

    if (!loadedScript.enabled) {
      addLog(
        'error',
        formatTemplate(messages['log-cmd-disabled'], {
          name: loadedScript.script.settings.name,
          player: PLAYER_NAME,
          command: commandName,
        }),
      )
      return
    }

    const command = loadedScript.script.commands.find(
      (candidate) =>
        candidate.name.toLowerCase() === commandName ||
        candidate.aliases.some((alias) => alias.toLowerCase() === commandName),
    )
    if (command === undefined) {
      addLog(
        'error',
        formatTemplate(messages['log-cmd-unregistered'], {
          player: PLAYER_NAME,
          command: commandName,
        }),
      )
      return
    }

    addLog(
      'info',
      formatTemplate(messages['log-cmd-info'], {
        player: PLAYER_NAME,
        command: command.name,
      }),
    )

    const context = buildCommandContext(loadedScript.script, command, PLAYER_NAME)
    command.messages.forEach((message) => {
      addLog('msg', parseMiniMessage(applyPlaceholders(message, context)))
    })
  }

  const handleClear = (): void => {
    setLogs([])
  }

  const handleDividerPointerDown = (event: React.PointerEvent<HTMLDivElement>): void => {
    isDraggingRef.current = true
    event.currentTarget.setPointerCapture(event.pointerId)
  }

  const handleDividerPointerMove = (event: React.PointerEvent<HTMLDivElement>): void => {
    if (!isDraggingRef.current) {
      return
    }
    const container = containerRef.current
    if (container === null) {
      return
    }
    const bounds = container.getBoundingClientRect()
    if (bounds.width === 0) {
      return
    }
    const ratio = (event.clientX - bounds.left) / bounds.width
    setSplitRatio(Math.min(0.8, Math.max(0.2, ratio)))
  }

  const handleDividerPointerUp = (event: React.PointerEvent<HTMLDivElement>): void => {
    isDraggingRef.current = false
    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId)
    }
  }

  const handleCodeChange = (event: React.ChangeEvent<HTMLTextAreaElement>): void => {
    setScriptCode(event.target.value)
  }

  const handleEditorScroll = (event: React.UIEvent<HTMLTextAreaElement>): void => {
    const scrollTop = event.currentTarget.scrollTop
    const scrollLeft = event.currentTarget.scrollLeft
    if (highlightRef.current !== null) {
      highlightRef.current.scrollTop = scrollTop
      highlightRef.current.scrollLeft = scrollLeft
    }
    if (lineNumbersRef.current !== null) {
      lineNumbersRef.current.scrollTop = scrollTop
    }
  }

  const handleEditorKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>): void => {
    if (event.key === 'Tab') {
      event.preventDefault()
      const textarea = event.currentTarget
      const start = textarea.selectionStart
      const end = textarea.selectionEnd
      const value = textarea.value
      textarea.value = value.slice(0, start) + '  ' + value.slice(end)
      textarea.selectionStart = start + 2
      textarea.selectionEnd = start + 2
      setScriptCode(textarea.value)
    }
  }

  const handleConsoleInputChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setConsoleInput(event.target.value)
  }

  const [consoleHistory, setConsoleHistory] = useState<string[]>([])
  const [historyIndex, setHistoryIndex] = useState<number>(-1)

  const handleConsoleInputKeyDown = (event: React.KeyboardEvent<HTMLInputElement>): void => {
    if (event.key === 'Enter') {
      event.preventDefault()
      const trimmed = consoleInput.trim()
      if (trimmed.length > 0) {
        setConsoleHistory((prev) => {
          const next = [...prev, trimmed]
          if (next.length > 50) {
            next.shift()
          }
          return next
        })
      }
      handleConsoleCommand(consoleInput)
      setConsoleInput('')
      setHistoryIndex(-1)
      return
    }

    if (event.key === 'ArrowUp') {
      event.preventDefault()
      if (consoleHistory.length === 0) {
        return
      }
      const nextIndex = historyIndex === -1 ? consoleHistory.length - 1 : Math.max(0, historyIndex - 1)
      setHistoryIndex(nextIndex)
      setConsoleInput(consoleHistory[nextIndex])
      return
    }

    if (event.key === 'ArrowDown') {
      event.preventDefault()
      if (consoleHistory.length === 0 || historyIndex === -1) {
        setHistoryIndex(-1)
        setConsoleInput('')
        return
      }
      if (historyIndex >= consoleHistory.length - 1) {
        setHistoryIndex(-1)
        setConsoleInput('')
        return
      }
      const nextIndex = historyIndex + 1
      setHistoryIndex(nextIndex)
      setConsoleInput(consoleHistory[nextIndex])
    }
  }

  const handleConsoleCommand = (input: string): void => {
    const trimmed = input.trim()
    if (trimmed.length === 0) {
      return
    }

    const raw = trimmed.startsWith('/') ? trimmed.slice(1) : trimmed
    const parts = raw.split(/\s+/)
    const command = parts[0].toLowerCase()
    const args = parts.slice(1).join(' ')

    switch (command) {
      case 'say':
      case 'echo':
        if (args.length === 0) {
          addLog('error', messages['console-cmd-usage-say'])
          return
        }
        addLog('msg', parseMiniMessage(`<yellow>${PLAYER_NAME}:</yellow> ${escapeHtml(args)}`))
        return
      case 'time':
        addLog('info', formatTemplate(messages['console-cmd-time'], { time: getTimestamp() }))
        return
      case 'who':
      case 'players':
      case 'list':
        addLog('info', formatTemplate(messages['console-cmd-who'], { players: PLAYER_NAME }))
        return
      case 'version':
      case 'about':
        addLog('info', messages['console-cmd-version'])
        return
      case 'ping':
        addLog(
          'info',
          formatTemplate(messages['console-cmd-ping'], {
            latency: String(Math.floor(8 + Math.random() * 30)),
          }),
        )
        return
      case 'clear':
        handleClear()
        return
      case 'help':
        addLog('info', messages['console-cmd-help'])
        return
      case 'minekot':
      case 'mkot':
        handleMinekot(parts.slice(1))
        return
      default:
        if (loadedScript !== null) {
          handleCmd(command)
        } else {
          addLog('error', formatTemplate(messages['console-cmd-unknown'], { command }))
        }
    }
  }

  const copyEditorCode = (): void => {
    copyToClipboard(scriptCode)
    setCodeCopied(true)
    if (copyFeedbackTimeoutRef.current !== null) {
      window.clearTimeout(copyFeedbackTimeoutRef.current)
    }
    copyFeedbackTimeoutRef.current = window.setTimeout(() => {
      setCodeCopied(false)
      copyFeedbackTimeoutRef.current = null
    }, 1500)
  }

  const copyLogText = (text: string): void => {
    copyToClipboard(text)
  }

  return (
    <>
      <section className="hero">
        <div className="hero__content">
          <h1 className="hero__title">
            {messages['hero-title-prefix']}
            <span className="hero__title-highlight">{messages['hero-title-highlight']}</span>
          </h1>
          <p className="hero__subtitle">{messages['hero-subtitle']}</p>
          <div className="hero__actions">
            <a
              className="hero__btn hero__btn--secondary"
              href="https://github.com/MineKotLang/MineKot"
              rel="noreferrer"
              target="_blank"
            >
              {messages['hero-btn-secondary']}
            </a>
            <a
              className="hero__btn hero__btn--primary"
              href="/docs"
              onClick={(e) => {
                e.preventDefault()
                window.dispatchEvent(new CustomEvent('nav', { detail: '/docs' }))
              }}
            >
              {messages['hero-btn-primary']}
            </a>
            <a
              className="hero__btn hero__btn--secondary"
              href="https://github.com/MineKotLang/MineKot/releases"
              rel="noreferrer"
              target="_blank"
            >
              {messages['hero-btn-download']}
            </a>
          </div>
        </div>
        <div className="hero__stage">
          <HeroMascot />
        </div>
      </section>

      <section className="features">
        <h2 className="features__heading">{messages['features-heading']}</h2>
        <div className="features__grid">
          {homepageData.features.map((feature) => (
            <div key={feature.num} className="feature-card">
              <h3 className="feature-card__title">
                <i className={`${feature.icon} feature-card__inline-icon`} />
                {messages[feature['title-key'] as keyof typeof messages]}
              </h3>
              <p className="feature-card__description">{messages[feature['desc-key'] as keyof typeof messages]}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="platforms">
        <h2 className="platforms__heading">{messages['platforms-heading']}</h2>
        <div className="platforms__list">
          {homepageData.platforms.map((platform) => (
            <div key={platform.name} className="platform-row">
              <div className="platform-row__name">
                <img
                  alt={formatTemplate(messages['platform-logo-alt'], { name: platform.name })}
                  className="platform-row__logo"
                  loading="lazy"
                  decoding="async"
                  src={platform.logo}
                />
                <span>{platform.name}</span>
              </div>
              <span className="platform-row__target">{platform.target}</span>
              <p
                className={`platform-row__status ${
                  platform.name === 'Velocity' ? 'platform-row__status--velocity' : ''
                }`}
              >
                {messages[platform['status-key']]}
              </p>
            </div>
          ))}
        </div>
        {messages['platforms-note'] && <p className="platforms__note">{messages['platforms-note']}</p>}
      </section>

      <section className="simulator">
        <h2 className="simulator__heading">{messages['simulator-heading']}</h2>
        <p className="simulator__subtitle">{messages['simulator-subtitle']}</p>
        <p className="simulator__note">{messages['simulator-sim-note']}</p>
        <div
          className="simulator__container"
          ref={containerRef}
          style={{ '--simulator-split': `${splitRatio * 100}%` } as React.CSSProperties}
        >
          <div className="simulator__editor">
            <div className="simulator__header">
              <span className="simulator__header-title">{editorTabTitle}</span>
              <div className="simulator__header-group simulator__header-group--end">
                <button className="simulator__btn simulator__btn--sm simulator__btn--active" onClick={handleRun}>
                  {messages['simulator-btn-run']}
                </button>
                <button
                  className={`simulator__btn simulator__btn--sm ${codeCopied ? 'simulator__btn--copied' : ''}`}
                  onClick={copyEditorCode}
                  title={messages['copy-code']}
                >
                  {codeCopied ? messages['editor-copy-copied'] : messages['editor-copy']}
                </button>
              </div>
            </div>
            <div className="simulator__content simulator__content--editor" id="sim-code">
              <div className="simulator__editor-shell">
                <div className="simulator__line-numbers" ref={lineNumbersRef}>
                  {lineNumbers.map((number) => (
                    <div key={number} className="simulator__line-number">
                      {number}
                    </div>
                  ))}
                </div>
                <div
                  aria-hidden="true"
                  className="simulator__highlight"
                  dangerouslySetInnerHTML={{ __html: highlightedCode }}
                  ref={highlightRef}
                />
                <textarea
                  aria-label={messages['editor-aria-label']}
                  className="simulator__textarea"
                  onChange={handleCodeChange}
                  onKeyDown={handleEditorKeyDown}
                  onScroll={handleEditorScroll}
                  spellCheck={false}
                  value={scriptCode}
                  wrap="off"
                />
              </div>
            </div>
          </div>
          <div
            aria-orientation="vertical"
            className="simulator__divider"
            onPointerCancel={handleDividerPointerUp}
            onPointerDown={handleDividerPointerDown}
            onPointerMove={handleDividerPointerMove}
            onPointerUp={handleDividerPointerUp}
            role="separator"
          />
          <div className="simulator__console">
            <div className="simulator__header">
              <span className="simulator__header-title">{messages['console-title']}</span>
              <div className="simulator__header-group simulator__header-group--end">
                <div className="simulator__filter-chips">
                  {CONSOLE_FILTERS.map((filter) => (
                    <button
                      key={filter.value}
                      className={`simulator__chip ${logFilter === filter.value ? 'simulator__chip--active' : ''}`}
                      onClick={() => setLogFilter(filter.value)}
                    >
                      {messages[filter['label-key'] as keyof typeof messages]}
                    </button>
                  ))}
                </div>
                <button className="simulator__btn simulator__btn--sm" onClick={handleJoin}>
                  {messages['simulator-btn-join']}
                </button>
                <button className="simulator__btn simulator__btn--sm" onClick={handleClear}>
                  {messages['simulator-btn-clear']}
                </button>
              </div>
            </div>
            <div className="simulator__content" id="sim-console">
              {logs
                .filter((log) => isLogVisible(log.type))
                .map((log, index) => (
                  <div key={index} className="log-line">
                    <span className="log-time">[{log.time}]</span>
                    {log.type === 'msg' ? (
                      <>
                        <span className="log-text" dangerouslySetInnerHTML={{ __html: log.message }} />
                        <button
                          className="simulator__btn--copy log__copy"
                          onClick={() => copyLogText(plainTextOf(log.message))}
                          title={messages['copy']}
                        >
                          {messages['copy']}
                        </button>
                      </>
                    ) : (
                      <>
                        <span className={`log-${log.type}`}>{log.type.toUpperCase()}: </span>
                        <span className="log-text">{log.message}</span>
                      </>
                    )}
                  </div>
                ))}
            </div>
            <div className="simulator__console-input">
              <input
                className="simulator__console-input-field"
                value={consoleInput}
                onChange={handleConsoleInputChange}
                onKeyDown={handleConsoleInputKeyDown}
                placeholder={messages['console-input-placeholder']}
                spellCheck={false}
                autoComplete="off"
              />
              <button
                className="simulator__btn simulator__btn--active"
                onClick={() => {
                  handleConsoleCommand(consoleInput)
                  setConsoleInput('')
                }}
              >
                {messages['console-input-run']}
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
