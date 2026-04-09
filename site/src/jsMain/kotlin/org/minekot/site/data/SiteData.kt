package org.minekot.site.data

import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.setValue
import kotlinx.serialization.Serializable

@Serializable
data class SidebarEntry(
    val label: String,
    val path: String? = null,
    val indexPath: String? = null,
    val children: List<SidebarEntry>? = null,
    val section: String? = null
)

@Serializable
data class SidebarSection(
    val id: String,
    val label: String,
    val entries: List<SidebarEntry>
)

// Global highlighter instance
var shikiHighlighter by mutableStateOf<dynamic>(null)

// Global state to track expanded sidebar directories (persisted across page navigations)
val expandedDirectories = mutableStateOf<Set<String>>(emptySet())

suspend fun fetchStaticData() {
    // Left empty for now. We fetch markdown on demand via the Renderers.
}
