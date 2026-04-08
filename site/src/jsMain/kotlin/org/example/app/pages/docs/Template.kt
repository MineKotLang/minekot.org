package org.example.app.pages.docs

import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import org.example.app.components.layouts.SiteScaffold
import org.jetbrains.compose.web.dom.*
import org.jetbrains.compose.web.css.*
import org.jetbrains.compose.web.attributes.InputType

@Composable
fun DocsPageTemplate(
    title: String,
    activePath: String = "",
    content: @Composable () -> Unit
) {
    var searchQuery by remember { mutableStateOf("") }

    SiteScaffold(activePath = "docs") {
        Main {
            Section(attrs = { classes("page") }) {
                Div(attrs = { classes("container") }) {
                    Div(attrs = { classes("docs-layout") }) {
                        // Left Navigation
                        Aside(attrs = { classes("side-panel", "panel") }) {
                            Div(attrs = { classes("panel-header", "compact") }) {
                                H2(attrs = { classes("panel-title") }) { Text("Documentation") }
                            }

                            // Search Bar
                            Div(attrs = { classes("search-row") }) {
                                Input(
                                    type = InputType.Search,
                                    attrs = {
                                        classes("search-input")
                                        attr("placeholder", "Search docs...")
                                        value(searchQuery)
                                        onInput { searchQuery = it.value }
                                    }
                                )
                            }

                            Br()

                            Div(attrs = { classes("docs-browser") }) {
                                Nav {
                                    Ul(attrs = { style { listStyle("none"); padding(0.px); margin(0.px) } }) {
                                        Li { DocNavLink("/docs/placeholder-1", "Placeholder 1", activePath == "placeholder-1") }
                                        Li { DocNavLink("/docs/placeholder-2", "Placeholder 2", activePath == "placeholder-2") }
                                        Li { DocNavLink("/docs/placeholder-3", "Placeholder 3", activePath == "placeholder-3") }
                                        Li { DocNavLink("/docs/placeholder-4", "Placeholder 4", activePath == "placeholder-4") }
                                        Li { DocNavLink("/docs/placeholder-5", "Placeholder 5", activePath == "placeholder-5") }
                                        Li { DocNavLink("/docs/placeholder-6", "Placeholder 6", activePath == "placeholder-6") }
                                        Li { DocNavLink("/docs/placeholder-7", "Placeholder 7", activePath == "placeholder-7") }
                                    }
                                }
                            }
                        }

                        // Main Content
                        Div(attrs = { classes("main-panel", "panel", "fade-in") }) {
                            Div(attrs = {
                                style {
                                    padding(2.cssRem)
                                }
                            }) {
                                H1 { Text(title) }
                                content()
                            }
                        }
                    }
                }
            }
        }
    }
}

@Composable
private fun DocNavLink(path: String, label: String, isActive: Boolean) {
    A(href = path, attrs = {
        classes("doc-item", "doc-item-link")
        if (isActive) classes("active")
        style {
            property("display", "block")
            marginBottom(0.5.cssRem)
            textDecoration("none")
        }
    }) {
        Text(label)
    }
}
