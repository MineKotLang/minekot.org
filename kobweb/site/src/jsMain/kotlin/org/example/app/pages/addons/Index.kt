package org.example.app.pages.addons

import androidx.compose.runtime.Composable
import com.varabyte.kobweb.core.Page
import org.example.app.components.layouts.SiteScaffold
import org.example.app.data.addonSummaries
import org.jetbrains.compose.web.dom.A
import org.jetbrains.compose.web.dom.Article
import org.jetbrains.compose.web.dom.Div
import org.jetbrains.compose.web.dom.H1
import org.jetbrains.compose.web.dom.H2
import org.jetbrains.compose.web.dom.Main
import org.jetbrains.compose.web.dom.P
import org.jetbrains.compose.web.dom.Section
import org.jetbrains.compose.web.dom.Text

@Page("/addons/")
@Composable
fun AddonsPage() {
    SiteScaffold(activePath = "addons", footerText = "Community Addons") {
        Main(attrs = { classes("page") }) {
            Section(attrs = { classes("container", "addons-shell") }) {
                Article(attrs = { classes("panel", "addons-header") }) {
                    Div(attrs = { classes("kicker") }) { Text("Addons") }
                    H1(attrs = { classes("workspace-title") }) { Text("Addons") }
                }

                Section(attrs = { classes("addons-results") }) {
                    addonSummaries.forEach { addon ->
                        Article(attrs = { classes("panel", "addon-result-card", "fade-in") }) {
                            H2(attrs = { classes("card-title") }) { Text(addon.title) }
                            P(attrs = { classes("helper") }) { Text(addon.description) }
                            Div(attrs = { classes("search-row") }) {
                                A("/addons/${addon.id}", attrs = { classes("btn") }) { Text("Open addon page") }
                                A(
                                    addon.downloadUrl,
                                    attrs = {
                                        classes("btn", "primary")
                                        attr("target", "_blank")
                                        attr("rel", "noopener noreferrer")
                                    }
                                ) { Text("Download") }
                            }
                        }
                    }
                }
            }
        }
    }
}

