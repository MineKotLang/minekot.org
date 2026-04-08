package org.minekot.site.components.layouts

import androidx.compose.runtime.*
import com.varabyte.kobweb.core.PageContext
import com.varabyte.kobweb.core.rememberPageContext
import kotlinx.browser.window
import kotlinx.coroutines.await
import kotlinx.serialization.decodeFromString
import kotlinx.serialization.json.Json
import org.jetbrains.compose.web.attributes.InputType
import org.jetbrains.compose.web.css.*
import org.jetbrains.compose.web.dom.*
import org.minekot.site.data.SidebarEntry

private val jsonFormat = Json { ignoreUnknownKeys = true }

@Composable
fun SidebarLayout(
    title: String,
    sidebarUrl: String,
    activePath: String,
    content: @Composable () -> Unit
) {
    val ctx = rememberPageContext()
    var searchQuery by remember { mutableStateOf("") }
    var sidebarEntries by remember { mutableStateOf<List<SidebarEntry>>(emptyList()) }

    LaunchedEffect(sidebarUrl) {
        try {
            val response = window.fetch(sidebarUrl).await()
            if (response.ok) {
                sidebarEntries = jsonFormat.decodeFromString(response.text().await())
            }
        } catch (e: Exception) {
            console.error("Failed to load sidebar from $sidebarUrl", e)
        }
    }

    SiteScaffold(activePath = activePath) {
        Main {
            Section(attrs = { classes("page") }) {
                Div(attrs = { classes("container") }) {
                    Div(attrs = { classes("docs-layout") }) {
                        // Left Navigation
                        Aside(attrs = { classes("side-panel", "panel") }) {
                            Div(attrs = { classes("panel-header", "compact") }) {
                                H2(attrs = { classes("panel-title") }) { Text(title) }
                            }

                            // Search Bar
                            Div(attrs = { classes("search-row") }) {
                                Input(
                                    type = InputType.Search,
                                    attrs = {
                                        classes("search-input")
                                        attr("placeholder", "Search...")
                                        value(searchQuery)
                                        onInput { searchQuery = it.value }
                                    },
                                )
                            }

                            Br()

                            Div(attrs = { classes("docs-browser") }) {
                                Nav {
                                    Ul(attrs = { style { listStyle("none"); padding(0.px); margin(0.px) } }) {
                                        if (sidebarEntries.isEmpty()) {
                                            Li { Text("Loading navigation...") }
                                        } else {
                                            sidebarEntries.forEach { entry ->
                                                RenderSidebarEntry(ctx, entry)
                                            }
                                        }
                                    }
                                }
                            }
                        }

                        // Main Content
                        Div(attrs = { classes("main-panel", "panel", "fade-in") }) {
                            Div(
                                attrs = {
                                    style {
                                        padding(2.cssRem)
                                    }
                                },
                            ) {
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
private fun RenderSidebarEntry(ctx: PageContext, entry: SidebarEntry) {
    if (!entry.children.isNullOrEmpty()) {
        Li(attrs = { style { fontWeight("bold"); marginTop(0.5.cssRem); marginBottom(0.25.cssRem) } }) { 
            if (entry.path != null) {
                SidebarNavLink(ctx, entry.path, entry.label)
            } else {
                Text(entry.label) 
            }
        }
        Ul(attrs = { style { listStyle("none"); paddingLeft(1.cssRem); margin(0.px) } }) {
            entry.children.forEach { child ->
                RenderSidebarEntry(ctx, child)
            }
        }
    } else if (entry.path != null) {
        Li { SidebarNavLink(ctx, entry.path, entry.label) }
    }
}

@Composable
private fun SidebarNavLink(ctx: PageContext, path: String, label: String) {
    A(
        href = path,
        attrs = {
            classes("doc-item", "doc-item-link")
            style {
                property("display", "block")
                marginBottom(0.5.cssRem)
                textDecoration("none")
            }
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
