package org.example.app.components.layouts

import androidx.compose.runtime.Composable
import org.example.app.components.sections.Footer
import org.example.app.components.sections.NavHeader
import org.jetbrains.compose.web.dom.Div

@Composable
fun SiteScaffold(
    activePath: String,
    footerText: String? = null,
    content: @Composable () -> Unit,
) {
    Div(attrs = { classes("shell") }) {
        NavHeader(activePath = activePath)
        content()
        Footer(text = footerText)
    }
}


