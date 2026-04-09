package org.minekot.site.components.sections

import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.runtime.setValue
import com.varabyte.kobweb.core.rememberPageContext
import com.varabyte.kobweb.silk.components.icons.mdi.MdiDarkMode
import com.varabyte.kobweb.silk.components.icons.mdi.MdiLightMode
import com.varabyte.kobweb.silk.theme.colors.ColorMode
import org.jetbrains.compose.web.dom.*

@Composable
private fun MainNavLink(path: String, label: String, isActive: Boolean) {
    val ctx = rememberPageContext()
    A(
        path,
        attrs = {
            if (isActive) attr("aria-current", "page")
            attr("data-theme-nav", "")
            onClick { e ->
                if (e.button == 0.toShort() && !e.ctrlKey && !e.metaKey && !e.shiftKey && !e.altKey) {
                    e.preventDefault()
                    ctx.router.navigateTo(path)
                }
            }
        },
    ) {
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
                    Img(src = "/favicon.ico", alt = "MineKot icon")
                }
                Span { Text("MineKot") }
            }

            Nav(
                attrs = {
                    classes("nav")
                    attr("aria-label", "Main")
                    style {
                        property("margin-left", "auto")
                    }
                },
            ) {
                MainNavLink("/", "Home", activePath == "home")
                MainNavLink(
                    "/docs/",
                    "Documentation",
                    activePath == "docs" || activePath == "documentation",
                )
            }
            Div(
                attrs = {
                    style {
                        property("width", "1px")
                        property("height", "24px")
                        property("background-color", "var(--color-border)")
                        property("margin", "0 16px")
                    }
                },
            )

            Button(
                attrs = {
                    classes("btn")
                    attr("data-theme-toggle", "")
                    onClick {
                        colorMode = colorMode.opposite
                    }
                },
            ) {
                if (colorMode.isDark) MdiLightMode() else MdiDarkMode()
            }
        }
    }
}
