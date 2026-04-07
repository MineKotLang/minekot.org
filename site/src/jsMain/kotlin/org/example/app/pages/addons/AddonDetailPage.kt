package org.example.app.pages.addons

import androidx.compose.runtime.Composable
import org.example.app.components.layouts.SiteScaffold
import org.example.app.data.AddonDetail
import org.jetbrains.compose.web.dom.A
import org.jetbrains.compose.web.dom.Div
import org.jetbrains.compose.web.dom.H1
import org.jetbrains.compose.web.dom.H2
import org.jetbrains.compose.web.dom.Li
import org.jetbrains.compose.web.dom.Main
import org.jetbrains.compose.web.dom.P
import org.jetbrains.compose.web.dom.Section
import org.jetbrains.compose.web.dom.Text
import org.jetbrains.compose.web.dom.Ul

@Composable
fun AddonDetailPage(addon: AddonDetail) {
    SiteScaffold(activePath = "addons", footerText = "Addon Details") {
        Main(attrs = { classes("page") }) {
            Section(attrs = { classes("container", "addon-detail-shell") }) {
                Div(attrs = { classes("panel", "addon-detail-header", "fade-in") }) {
                    Div(attrs = { classes("kicker") }) { Text("Addon") }
                    H1(attrs = { classes("workspace-title") }) { Text(addon.title) }
                    P(attrs = { classes("helper") }) { Text(addon.description) }
                    Div(attrs = { classes("search-row") }) {
                        A("/addons/", attrs = { classes("btn") }) { Text("Back to addons") }
                        A(
                            addon.repositoryUrl,
                            attrs = {
                                classes("btn", "primary")
                                attr("target", "_blank")
                                attr("rel", "noopener noreferrer")
                            }
                        ) { Text("Open source page") }
                        A(
                            addon.downloadUrl,
                            attrs = {
                                classes("btn")
                                attr("target", "_blank")
                                attr("rel", "noopener noreferrer")
                            }
                        ) { Text("Download addon") }
                    }
                }

                Section(attrs = { classes("addon-meta-grid") }) {
                    Div(attrs = { classes("panel", "addon-meta-card", "fade-in") }) {
                        H2(attrs = { classes("panel-title") }) { Text("Latest Versions") }
                        Ul(attrs = { classes("addon-list") }) {
                            addon.versions.forEach { version -> Li { Text(version) } }
                        }
                    }

                    Div(attrs = { classes("panel", "addon-meta-card", "fade-in") }) {
                        H2(attrs = { classes("panel-title") }) { Text("Dependencies") }
                        P(attrs = { classes("helper") }) { Text("Dependencies required by this addon.") }
                        Ul(attrs = { classes("addon-list") }) {
                            addon.dependencies.forEach { dependency -> Li { Text(dependency) } }
                        }
                    }
                }
            }
        }
    }
}

