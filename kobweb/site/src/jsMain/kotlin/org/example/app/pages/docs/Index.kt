package org.example.app.pages.docs

import androidx.compose.runtime.Composable
import androidx.compose.runtime.LaunchedEffect
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateMapOf
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import com.varabyte.kobweb.core.Page
import com.varabyte.kobweb.core.rememberPageContext
import kotlinx.browser.window
import org.example.app.components.layouts.SiteScaffold
import org.example.app.data.docsData
import org.jetbrains.compose.web.attributes.InputType
import org.jetbrains.compose.web.dom.Button
import org.jetbrains.compose.web.dom.Code
import org.jetbrains.compose.web.dom.Div
import org.jetbrains.compose.web.dom.H3
import org.jetbrains.compose.web.dom.Input
import org.jetbrains.compose.web.dom.Main
import org.jetbrains.compose.web.dom.P
import org.jetbrains.compose.web.dom.Pre
import org.jetbrains.compose.web.dom.Section
import org.jetbrains.compose.web.dom.Span
import org.jetbrains.compose.web.dom.Text
import org.w3c.dom.url.URLSearchParams

@Page("docs")
@Composable
fun DocsPage() {
    val ctx = rememberPageContext()
    var query by remember { mutableStateOf("") }
    var selectedType by remember { mutableStateOf("all") }

    // Use a nullable derived focusedId that defaults to null during static snapshotting
    // to avoid potential crashes caused by immediately accessing route parameters.
    var focusedId by remember { mutableStateOf<String?>(null) }
    
    // Safety check: only attempt to read params if route is valid.
    // This is wrapped in a check that is normally true in browser but might be false/partial in export.
    val initialId = ctx.route.path.takeIf { it.isNotEmpty() }?.let { ctx.route.params["id"] }
    
    LaunchedEffect(initialId) {
        if (focusedId == null) {
            focusedId = initialId?.takeIf { it.isNotBlank() }
        }
    }

    var copiedLinkId by remember { mutableStateOf<String?>(null) }
    val expandedState = remember { mutableStateMapOf<String, Boolean>() }

    val tokens = query.lowercase().trim().split(" ").filter { it.isNotBlank() }

    val filteredDocs = docsData.filter { entry ->
        val haystack = "${entry.title} ${entry.description}".lowercase()
        val queryMatches = tokens.isEmpty() || tokens.all { token -> haystack.contains(token) }
        val typeMatches = selectedType == "all" || selectedType == entry.type
        val focusMatches = focusedId == null || focusedId == entry.id
        queryMatches && typeMatches && focusMatches
    }

    fun copyText(text: String) {
        window.navigator.clipboard.writeText(text)
    }

    SiteScaffold(activePath = "docs", footerText = "Documentation written with love") {
        Main(attrs = { classes("page") }) {
            Div(attrs = { classes("container", "docs-browser-shell") }) {
                Section(attrs = { classes("panel", "docs-header", "fade-in") }) {
                    Div(attrs = { classes("kicker") }) { Text("Docs") }
                    Div(attrs = { classes("search-row") }) {
                        Input(type = InputType.Search, attrs = {
                            classes("search-input")
                            attr("placeholder", "Search syntax, example, or descriptions")
                            attr("aria-label", "Search docs")
                            value(query)
                            onInput { event ->
                                query = event.value
                                focusedId = null
                            }
                        })
                        Button(attrs = {
                            classes("btn")
                            onClick {
                                query = ""
                                focusedId = null
                            }
                        }) { Text("Clear") }
                    }

                    Div(attrs = {
                        classes("type-filter-row")
                        attr("role", "tablist")
                        attr("aria-label", "Syntax types")
                    }) {
                        val types = listOf("all", "Events", "Conditions", "Effects", "Expressions", "Functions")
                        for (type in types) {
                            val activeClass = if (selectedType == type) "is-active" else ""
                            Button(attrs = {
                                classes("type-chip", activeClass)
                                onClick {
                                    selectedType = type
                                    focusedId = null
                                }
                            }) {
                                Text(if (type == "all") "All" else type)
                            }
                        }
                    }
                }

                Section(attrs = { classes("docs-list") }) {
                    filteredDocs.forEach { entry ->
                        val isOpen = expandedState[entry.id] == true
                        Div(attrs = {
                            classes("SyntaxItemCard", "panel", "fade-in")
                            attr("id", "doc-${entry.id}")
                        }) {
                            Div(attrs = { classes("syntax-card-head") }) {
                                Div {
                                    H3(attrs = { classes("syntaxtitle") }) {
                                        Text("${entry.title} ")
                                        Span(attrs = { classes("syntaxtitletype") }) { Text(entry.typeLabel) }
                                    }
                                }
                                Button(attrs = {
                                    classes("btn")
                                    onClick {
                                        val shareLink = "${window.location.origin}/docs/?id=${entry.id}"
                                        copyText(shareLink)
                                        copiedLinkId = entry.id
                                        window.setTimeout({ copiedLinkId = null }, 1200)
                                    }
                                }) {
                                    Text(if (copiedLinkId == entry.id) "Copied" else "Copy link")
                                }
                            }

                            Pre(attrs = { classes("code-block") }) { Code { Text(entry.syntaxCode) } }

                            Div(attrs = { classes("syntaxdescription") }) {
                                P { Text(entry.description) }
                            }

                            Div(attrs = { classes("accordion-shell", if (isOpen) "open" else "") }) {
                                Button(attrs = {
                                    classes("accordion-toggle")
                                    attr("aria-expanded", isOpen.toString())
                                    onClick { expandedState[entry.id] = !isOpen }
                                }) { Text("View example") }

                                if (isOpen) {
                                    Div(attrs = { classes("accordion-content") }) {
                                        Pre(attrs = { classes("code-block") }) { Code { Text(entry.exampleCode) } }
                                    }
                                }
                            }
                        }
                    }

                    if (filteredDocs.isEmpty()) {
                        Div(attrs = { classes("panel", "docs-empty-state") }) {
                            P { Text("No matching docs.") }
                            P { Text("Try another search term.") }
                        }
                    }
                }
            }
        }
    }
}
