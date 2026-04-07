package org.example.app.pages.scripts

import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import com.varabyte.kobweb.core.Page
import kotlinx.browser.window
import org.example.app.components.layouts.SiteScaffold
import org.example.app.data.scriptSnippets
import org.jetbrains.compose.web.dom.Article
import org.jetbrains.compose.web.dom.Button
import org.jetbrains.compose.web.dom.Div
import org.jetbrains.compose.web.dom.H1
import org.jetbrains.compose.web.dom.H2
import org.jetbrains.compose.web.dom.Main
import org.jetbrains.compose.web.dom.P
import org.jetbrains.compose.web.dom.Pre
import org.jetbrains.compose.web.dom.Section
import org.jetbrains.compose.web.dom.Text

@Page("/scripts/")
@Composable
fun ScriptsPage() {
    var copiedId by remember { mutableStateOf<String?>(null) }

    SiteScaffold(activePath = "scripts", footerText = "Community Scripts") {
        Main(attrs = { classes("page") }) {
            Section(attrs = { classes("container", "addons-shell") }) {
                Article(attrs = { classes("panel", "addons-header") }) {
                    Div(attrs = { classes("kicker") }) { Text("Scripts") }
                    H1(attrs = { classes("workspace-title") }) { Text("Scripts") }
                }

                Section(attrs = { classes("addons-results") }) {
                    scriptSnippets.forEach { snippet ->
                        Article(attrs = { classes("panel", "addon-result-card", "fade-in") }) {
                            H2(attrs = { classes("card-title") }) { Text(snippet.title) }
                            P(attrs = { classes("helper") }) { Text(snippet.description) }
                            Pre(attrs = { classes("code-block") }) { Text(snippet.code) }
                            Div(attrs = { classes("search-row") }) {
                                Button(attrs = {
                                    classes("btn", "primary")
                                    onClick {
                                        window.navigator.clipboard.writeText(snippet.code)
                                        copiedId = snippet.id
                                        window.setTimeout({ copiedId = null }, 1100)
                                    }
                                }) {
                                    Text(if (copiedId == snippet.id) "Copied" else "Copy")
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}

