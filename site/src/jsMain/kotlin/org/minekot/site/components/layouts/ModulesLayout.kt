package org.minekot.site.components.layouts

import androidx.compose.runtime.Composable

@Composable
fun ModulesLayout(content: @Composable () -> Unit) {
    SidebarLayout(
        title = "Modules",
        sidebarUrl = "https://raw.githubusercontent.com/MineKotLang/static/main/modules/sidebar.json",
        activePath = "modules",
        content = content
    )
}
