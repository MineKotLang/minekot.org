package org.minekot.site.components.layouts

import androidx.compose.runtime.Composable

@Composable
fun DocsLayout(content: @Composable () -> Unit) {
    SidebarLayout(
        title = "Documentation",
        sidebarUrl = "https://raw.githubusercontent.com/MineKotLang/static/main/docs/sidebar.json",
        activePath = "docs",
        content = content
    )
}
