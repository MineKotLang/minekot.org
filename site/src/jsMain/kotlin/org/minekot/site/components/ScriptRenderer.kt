package org.minekot.site.components

import androidx.compose.runtime.Composable
import org.minekot.site.components.layouts.ScriptsLayout

@Composable
fun ScriptRenderer(docPath: String) {
    ScriptsLayout {
        MarkdownContent(
            baseDir = "scripts",
            path = docPath,
            loadingText = "Loading script documentation...",
            failedText = "Failed to load script documentation for '$docPath'."
        )
    }
}
