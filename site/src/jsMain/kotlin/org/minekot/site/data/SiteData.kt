package org.minekot.site.data

import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.setValue
import kotlinx.serialization.Serializable

@Serializable
data class SidebarEntry(
    val label: String,
    val path: String? = null,
    val children: List<SidebarEntry>? = null
)

// Global highlighter instance
var shikiHighlighter by mutableStateOf<dynamic>(null)

suspend fun fetchStaticData() {
    // Left empty for now. We fetch markdown on demand via the Renderers.
}
