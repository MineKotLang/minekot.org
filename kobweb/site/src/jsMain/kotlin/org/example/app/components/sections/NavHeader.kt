package org.example.app.components.sections

import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import com.varabyte.kobweb.core.rememberPageContext
import com.varabyte.kobweb.silk.theme.colors.ColorMode
import kotlinx.browser.document
import kotlinx.browser.window
import org.jetbrains.compose.web.dom.A
import org.jetbrains.compose.web.dom.Button
import org.jetbrains.compose.web.dom.Div
import org.jetbrains.compose.web.dom.Img
import org.jetbrains.compose.web.dom.Nav
import org.jetbrains.compose.web.dom.Span
import org.jetbrains.compose.web.dom.Text

@Composable
private fun MainNavLink(path: String, label: String, isActive: Boolean) {
    A(path, attrs = {
        if (isActive) attr("aria-current", "page")
        attr("data-theme-nav", "")
    }) {
        Text(label)
    }
}

@Composable
fun NavHeader(activePath: String) {
    val ctx = rememberPageContext()
    var colorMode by ColorMode.currentState

    Div(attrs = { classes("topbar") }) {
        Div(attrs = { classes("container", "topbar-inner") }) {
            A("/", attrs = { classes("brand") }) {
                Span(attrs = { classes("brand-mark") }) {
                    Img(src = "/images/icon.png", alt = "MineKot icon")
                }
                Span { Text("MineKot") }
            }

            Nav(attrs = {
                classes("nav")
                attr("aria-label", "Main")
            }) {
                MainNavLink("/", "Home", activePath == "home")
                MainNavLink("/docs/", "Docs", activePath == "docs")
                MainNavLink("/addons/", "Addons", activePath == "addons")
                MainNavLink("/scripts/", "Scripts", activePath == "scripts")
                Button(attrs = {
                    classes("btn")
                    attr("data-theme-toggle", "")
                    onClick {
                        colorMode = colorMode.opposite
                    }
                }) {
                    Text(if (colorMode.isDark) "Light mode" else "Dark mode")
                }
            }
        }
    }
}
