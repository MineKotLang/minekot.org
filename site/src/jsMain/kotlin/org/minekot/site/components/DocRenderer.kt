package org.minekot.site.components

import androidx.compose.runtime.Composable
import org.minekot.site.components.layouts.DocsLayout

@Composable
fun DocRenderer(docPath: String) {
    DocsLayout {
        MarkdownContent(
            baseDir = "docs",
            path = docPath,
            loadingText = "Loading documentation...",
            failedText = "Failed to load documentation for '$docPath'."
        )
    }
}
