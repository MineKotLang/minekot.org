package org.minekot.site.pages

import androidx.compose.runtime.Composable
import com.varabyte.kobweb.core.Page
import org.jetbrains.compose.web.css.cssRem
import org.jetbrains.compose.web.css.padding
import org.jetbrains.compose.web.css.textAlign
import org.jetbrains.compose.web.dom.*
import org.minekot.site.components.layouts.SiteScaffold

@Page
@Composable
fun `404`() {
    SiteScaffold(activePath = "") {
        Main {
            Section(attrs = { classes("page") }) {
                Div(attrs = { classes("container") }) {
                    Div(
                        attrs = {
                            classes("panel", "fade-in")
                            style {
                                padding(3.cssRem)
                                textAlign("center")
                            }
                        },
                    ) {
                        H1 { Text("404 - Page Not Found") }
                        P { Text("The page you are looking for does not exist.") }
                    }
                }
            }
        }
    }
}
