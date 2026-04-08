package org.minekot.site.components.layouts

import androidx.compose.runtime.Composable
import org.jetbrains.compose.web.dom.Div
import org.minekot.site.components.sections.Footer
import org.minekot.site.components.sections.NavHeader

@Composable
fun SiteScaffold(
    activePath: String,
    footerText: String? = null,
    content: @Composable () -> Unit,
) {
    Div(attrs = { classes("shell") }) {
        NavHeader(activePath = activePath)
        content()
        Footer()
    }
}
