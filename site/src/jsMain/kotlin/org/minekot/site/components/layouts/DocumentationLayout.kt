package org.minekot.site.components.layouts

import androidx.compose.runtime.Composable

@Composable
fun DocumentationLayout(content: @Composable () -> Unit) {
    DocumentationSidebarLayout(content = content)
}
