package org.example.app

import androidx.compose.runtime.Composable
import androidx.compose.runtime.LaunchedEffect
import com.varabyte.kobweb.compose.ui.Modifier
import com.varabyte.kobweb.compose.ui.modifiers.minHeight
import com.varabyte.kobweb.core.App
import com.varabyte.kobweb.silk.SilkApp
import com.varabyte.kobweb.silk.components.layout.Surface
import com.varabyte.kobweb.silk.style.common.SmoothColorStyle
import com.varabyte.kobweb.silk.style.toModifier
import com.varabyte.kobweb.silk.theme.colors.ColorMode
import kotlinx.browser.document
import kotlinx.browser.window
import org.w3c.dom.HTMLLinkElement
import org.jetbrains.compose.web.css.vh

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

private fun applyThemeAttribute(theme: String) {
    document.documentElement?.setAttribute("data-theme", theme)
    document.body?.setAttribute("data-theme", theme)
}

private fun syncThemeFromStorage() {
    val theme = readStoredTheme()
    applyThemeAttribute(theme)
}

private fun registerThemeSyncListeners() {
    window.addEventListener("storage", { event ->
        val changedKey = event.asDynamic().key as? String
        if (changedKey == THEME_KEY) syncThemeFromStorage()
    })
    window.addEventListener("focus", { syncThemeFromStorage() })
    window.addEventListener("pageshow", { syncThemeFromStorage() })
    document.addEventListener("visibilitychange", {
        val state = document.asDynamic().visibilityState as? String
        if (state == "visible") syncThemeFromStorage()
    })
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
        LaunchedEffect(Unit) {
            ensureStylesheetLoaded()
            ensureThemeBootstrapped()
        }
        Surface(SmoothColorStyle.toModifier().minHeight(100.vh)) {
            content()
        }
    }
}
