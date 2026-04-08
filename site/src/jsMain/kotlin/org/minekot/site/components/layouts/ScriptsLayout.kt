package org.minekot.site.components.layouts

import androidx.compose.runtime.Composable

@Composable
fun ScriptsLayout(content: @Composable () -> Unit) {
    SidebarLayout(
        title = "Scripts",
        sidebarUrl = "https://raw.githubusercontent.com/MineKotLang/static/main/scripts/sidebar.json",
        activePath = "scripts",
        content = content
    )
}
