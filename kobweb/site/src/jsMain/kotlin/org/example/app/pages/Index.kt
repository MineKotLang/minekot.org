package org.example.app.pages

import androidx.compose.runtime.Composable
import com.varabyte.kobweb.core.Page
import org.example.app.components.layouts.SiteScaffold
import org.jetbrains.compose.web.dom.A
import org.jetbrains.compose.web.dom.Div
import org.jetbrains.compose.web.dom.H2
import org.jetbrains.compose.web.dom.Main
import org.jetbrains.compose.web.dom.P
import org.jetbrains.compose.web.dom.Section
import org.jetbrains.compose.web.dom.Text

@Page("/")
@Composable
fun HomePage() {
    SiteScaffold(activePath = "home") {
        Main {
            Section(attrs = { classes("hero") }) {
                Div(attrs = { classes("container", "placeholder-grid") }) {
                    Div(attrs = { classes("panel", "placeholder-block", "placeholder-block-large", "fade-in") }) { Text("Placeholder") }
                    Div(attrs = { classes("panel", "placeholder-block", "fade-in") }) { Text("Placeholder") }
                    Div(attrs = { classes("panel", "placeholder-block", "fade-in") }) { Text("Placeholder") }
                    Div(attrs = { classes("panel", "placeholder-block", "fade-in") }) { Text("Placeholder") }
                }
            }

            Section(attrs = { classes("page", "addons-home") }) {
                Div(attrs = { classes("container") }) {
                    Div(attrs = { classes("panel", "addon-home-panel", "fade-in") }) {
                        Div(attrs = { classes("kicker") }) { Text("Addons") }
                        H2(attrs = { classes("panel-title") }) { Text("Browse Community Addons") }
                        P(attrs = { classes("helper") }) {
                            Text("Search community addons and open a dedicated page for each addon with versions and dependency info.")
                        }
                        Div(attrs = { classes("addon-home-actions") }) {
                            A("/addons/", attrs = { classes("btn", "primary") }) { Text("Open Addons Search") }
                        }
                    }
                }
            }

            Section(attrs = { classes("page", "addons-home") }) {
                Div(attrs = { classes("container") }) {
                    Div(attrs = { classes("panel", "addon-home-panel", "fade-in") }) {
                        Div(attrs = { classes("kicker") }) { Text("Docs") }
                        H2(attrs = { classes("panel-title") }) { Text("Documentation Browser") }
                        P(attrs = { classes("helper") }) {
                            Text("Browse syntax definitions, examples, and descriptions for events, conditions, effects, and more.")
                        }
                        Div(attrs = { classes("addon-home-actions") }) {
                            A("/docs/", attrs = { classes("btn", "primary") }) { Text("Open Docs") }
                        }
                    }
                }
            }

            Section(attrs = { classes("page", "addons-home") }) {
                Div(attrs = { classes("container") }) {
                    Div(attrs = { classes("panel", "addon-home-panel", "fade-in") }) {
                        Div(attrs = { classes("kicker") }) { Text("Scripts") }
                        H2(attrs = { classes("panel-title") }) { Text("Script Snippets") }
                        P(attrs = { classes("helper") }) { Text("Browse tiny reusable scripts and quick code examples.") }
                        Div(attrs = { classes("addon-home-actions") }) {
                            A("/scripts/", attrs = { classes("btn", "primary") }) { Text("Open Scripts") }
                        }
                    }
                }
            }
        }
    }
}
