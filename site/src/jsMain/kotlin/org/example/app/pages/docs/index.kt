package org.example.app.pages.docs

import androidx.compose.runtime.Composable
import com.varabyte.kobweb.core.Page
import org.jetbrains.compose.web.dom.*

@Page
@Composable
fun DocsPage() {
    DocsPageTemplate(
        title = "PLACEHOLDER TITLE",
        activePath = "getting-started"
    ) {
        P { Text("PLACEHOLDER DESCRIPTION OR WHATEVER") }

        Div(attrs = { classes("doc-copy-stack") }) {
            Section(attrs = { classes("doc-section") }) {
                H2 { Text("PLACEHOLDER SUB-TITLE") }
                P { Text("PLACEHOLDER DESCRIPTION OF SUB-TITLE") }
            }
        }
    }
}
