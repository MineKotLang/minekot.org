package org.minekot.site

import androidx.compose.runtime.Composable
import androidx.compose.runtime.LaunchedEffect
import com.varabyte.kobweb.compose.ui.modifiers.minHeight
import com.varabyte.kobweb.core.App
import com.varabyte.kobweb.silk.SilkApp
import com.varabyte.kobweb.silk.components.layout.Surface
import com.varabyte.kobweb.silk.style.common.SmoothColorStyle
import com.varabyte.kobweb.silk.style.toModifier
import com.varabyte.kobweb.silk.theme.colors.ColorMode
import kotlinx.browser.document
import kotlinx.browser.window
import kotlinx.coroutines.await
import kotlinx.coroutines.launch
import org.jetbrains.compose.web.css.vh
import org.w3c.dom.HTMLLinkElement
import org.w3c.dom.HTMLScriptElement

private const val THEME_KEY = "minekot.theme"

private fun readStoredTheme(): String {
    return try {
        val stored = window.localStorage.getItem(THEME_KEY)
        if (stored == "light" || stored == "dark") stored else "dark"
    } catch (_: Throwable) {
        "dark"
    }
}

private fun ensureStylesheetLoaded() {
    val alreadyLoaded = document.head?.querySelector("link[data-minekot-styles]") != null
    if (alreadyLoaded) return

    val link = document.createElement("link") as HTMLLinkElement
    link.rel = "stylesheet"
    link.href = "/styles.css"
    link.setAttribute("data-minekot-styles", "true")
    document.head?.appendChild(link)
}

private fun ensureMarkedLoaded() {
    val alreadyLoaded = document.head?.querySelector("script[src*='marked.min.js']") != null
    if (alreadyLoaded) return

    val script = document.createElement("script") as HTMLScriptElement
    script.src = "https://cdn.jsdelivr.net/npm/marked/marked.min.js"
    document.head?.appendChild(script)
}

private fun ensureShikiLoaded() {
    val alreadyLoaded = document.head?.querySelector("script[data-shiki]") != null
    if (alreadyLoaded) return

    val script = document.createElement("script") as HTMLScriptElement
    script.type = "module"
    script.setAttribute("data-shiki", "true")
    script.textContent = """
        import { createHighlighter } from 'https://esm.sh/shiki@1.22.2'
        window.initShiki = async () => {
            return await createHighlighter({
                themes: ['catppuccin-mocha'],
                langs: ['kotlin', 'yaml', 'json', 'bash', 'java', 'markdown']
            })
        }
        window.dispatchEvent(new CustomEvent('shiki-ready'));
    """.trimIndent()
    document.head?.appendChild(script)
}

private fun applyThemeAttribute(theme: String) {
    document.documentElement?.setAttribute("data-theme", theme)
    document.body?.setAttribute("data-theme", theme)
}

private fun syncThemeFromStorage() {
    val theme = readStoredTheme()
    applyThemeAttribute(theme)
}

private fun registerThemeSyncListeners() {
    window.addEventListener(
        "storage",
        { event ->
            val changedKey = event.asDynamic().key as? String
            if (changedKey == THEME_KEY) syncThemeFromStorage()
        },
    )
    window.addEventListener("focus", { syncThemeFromStorage() })
    window.addEventListener("pageshow", { syncThemeFromStorage() })
    document.addEventListener(
        "visibilitychange",
        {
            val state = document.asDynamic().visibilityState as? String
            if (state == "visible") syncThemeFromStorage()
        },
    )
}

private var listenersRegistered = false

private fun ensureThemeBootstrapped() {
    syncThemeFromStorage()
    if (!listenersRegistered) {
        registerThemeSyncListeners()
        listenersRegistered = true
    }
}

@App
@Composable
fun AppEntry(content: @Composable () -> Unit) {
    SilkApp {
        val colorMode = ColorMode.current
        LaunchedEffect(colorMode) {
            val theme = colorMode.name.lowercase()
            document.documentElement?.setAttribute("data-theme", theme)
            document.body?.setAttribute("data-theme", theme)
            window.localStorage.setItem("minekot.theme", theme)
        }

        LaunchedEffect(Unit) {
            ensureStylesheetLoaded()
            ensureMarkedLoaded()
            ensureShikiLoaded()
            org.minekot.site.data.fetchStaticData()

            val setupShiki = suspend {
                try {
                    val initFn = window.asDynamic().initShiki
                    if (initFn != null) {
                        val highlighter = (initFn() as kotlin.js.Promise<*>).await()
                        org.minekot.site.data.shikiHighlighter = highlighter
                        console.log("Shiki initialized successfully")
                    }
                } catch (e: Exception) {
                    console.error("Failed to initialize Shiki", e)
                }
            }

            // If it's already ready, run immediately, otherwise wait for event
            if (window.asDynamic().initShiki != null) {
                setupShiki()
            } else {
                window.addEventListener(
                    "shiki-ready",
                    {
                        kotlinx.coroutines.MainScope().launch {
                            setupShiki()
                        }
                    },
                )
            }
        }

        Surface(SmoothColorStyle.toModifier().minHeight(100.vh)) {
            content()
        }
    }
}
