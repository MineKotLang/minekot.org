package org.minekot.site.pages

import androidx.compose.runtime.Composable
import com.varabyte.kobweb.core.Page
import org.jetbrains.compose.web.dom.*
import org.minekot.site.components.layouts.SiteScaffold

@Page("/")
@Composable
fun HomePage() {
    SiteScaffold(activePath = "home") {
        Main {
            Section(attrs = { classes("hero") }) {
                Div(attrs = { classes("container", "placeholder-grid") }) {
                    Div(attrs = { classes("panel", "placeholder-block", "placeholder-block-large", "fade-in") }) {
                        Text(
                            "Placeholder",
                        )
                    }
                    Div(attrs = { classes("panel", "placeholder-block", "fade-in") }) { Text("Placeholder") }
                    Div(attrs = { classes("panel", "placeholder-block", "fade-in") }) { Text("Placeholder") }
                    Div(attrs = { classes("panel", "placeholder-block", "fade-in") }) { Text("Placeholder") }
                }
            }

            Section(attrs = { classes("page", "modules-home") }) {
                Div(attrs = { classes("container") }) {
                    Div(attrs = { classes("panel", "module-home-panel", "fade-in") }) {
                        Div(attrs = { classes("kicker") }) { Text("Modules") }
                        H2(attrs = { classes("panel-title") }) { Text("Browse Community Modules") }
                        P(attrs = { classes("helper") }) {
                            Text("Search community modules and open a dedicated page for each module with versions and dependency info.")
                        }
                        Div(attrs = { classes("module-home-actions") }) {
                            A("/modules/", attrs = { classes("btn", "primary") }) { Text("Open Modules Search") }
                        }
                    }
                }
            }

            Section(attrs = { classes("page", "modules-home") }) {
                Div(attrs = { classes("container") }) {
                    Div(attrs = { classes("panel", "module-home-panel", "fade-in") }) {
                        Div(attrs = { classes("kicker") }) { Text("Docs") }
                        H2(attrs = { classes("panel-title") }) { Text("Documentation Browser") }
                        P(attrs = { classes("helper") }) {
                            Text("Browse syntax definitions, examples, and descriptions for events, conditions, effects, and more.")
                        }
                        Div(attrs = { classes("module-home-actions") }) {
                            A("/docs/", attrs = { classes("btn", "primary") }) { Text("Open Docs") }
                        }
                    }
                }
            }

            Section(attrs = { classes("page", "modules-home") }) {
                Div(attrs = { classes("container") }) {
                    Div(attrs = { classes("panel", "module-home-panel", "fade-in") }) {
                        Div(attrs = { classes("kicker") }) { Text("Scripts") }
                        H2(attrs = { classes("panel-title") }) { Text("Script Snippets") }
                        P(attrs = { classes("helper") }) { Text("Browse tiny reusable scripts and quick code examples.") }
                        Div(attrs = { classes("module-home-actions") }) {
                            A("/scripts/", attrs = { classes("btn", "primary") }) { Text("Open Scripts") }
                        }
                    }
                }
            }
        }
    }
}
