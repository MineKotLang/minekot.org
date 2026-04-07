package org.example.app.pages

import androidx.compose.runtime.Composable
import com.varabyte.kobweb.core.Page
import org.example.app.components.layouts.SiteScaffold
import org.jetbrains.compose.web.css.cssRem
import org.jetbrains.compose.web.css.padding
import org.jetbrains.compose.web.css.textAlign
import org.jetbrains.compose.web.dom.Div
import org.jetbrains.compose.web.dom.H1
import org.jetbrains.compose.web.dom.Main
import org.jetbrains.compose.web.dom.P
import org.jetbrains.compose.web.dom.Section
import org.jetbrains.compose.web.dom.Text

@Page
@Composable
fun NotFoundPage() {
    SiteScaffold(activePath = "") {
        Main {
            Section(attrs = { classes("page") }) {
                Div(attrs = { classes("container") }) {
                    Div(attrs = {
                        classes("panel", "fade-in")
                        style {
                            padding(3.cssRem)
                            textAlign("center")
                        }
                    }) {
                        H1 { Text("404 - Page Not Found") }
                        P { Text("The page you are looking for does not exist.") }
                    }
                }
            }
        }
    }
}

