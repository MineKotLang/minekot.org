package org.minekot.site.components

import androidx.compose.runtime.Composable
import org.minekot.site.components.layouts.ModulesLayout

@Composable
fun ModuleRenderer(docPath: String) {
    ModulesLayout {
        MarkdownContent(
            baseDir = "modules",
            path = docPath,
            loadingText = "Loading module documentation...",
            failedText = "Failed to load module documentation for '$docPath'."
        )
    }
}
