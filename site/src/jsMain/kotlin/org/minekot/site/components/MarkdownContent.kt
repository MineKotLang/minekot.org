package org.minekot.site.components

import androidx.compose.runtime.*
import kotlinx.browser.window
import kotlinx.coroutines.await
import org.jetbrains.compose.web.css.cssRem
import org.jetbrains.compose.web.css.padding
import org.jetbrains.compose.web.dom.Div
import org.jetbrains.compose.web.dom.Text
import org.minekot.site.data.shikiHighlighter
import org.minekot.site.util.MarkdownParser

@Composable
fun MarkdownContent(
    baseDir: String, 
    path: String, 
    loadingText: String = "Loading...", 
    failedText: String = "Failed to load."
) {
    var renderedHtml by remember { mutableStateOf<String?>(null) }
    var isLoading by remember { mutableStateOf(true) }
    val highlighter = shikiHighlighter

    // Key on highlighter so we re-render when it becomes ready
    LaunchedEffect(baseDir, path, highlighter) {
        isLoading = true
        try {
            val fetchPath = when {
                path.endsWith(".md") -> path
                path.endsWith("/") || path.isEmpty() -> "${path}index.md"
                else -> "$path.md"
            }
            
            var response = window.fetch("https://raw.githubusercontent.com/MineKotLang/static/main/$baseDir/$fetchPath").await()
            
            if (!response.ok && !path.endsWith("/") && !path.endsWith(".md")) {
                val fallbackResponse = window.fetch("https://raw.githubusercontent.com/MineKotLang/static/main/$baseDir/$path/index.md").await()
                if (fallbackResponse.ok) {
                    response = fallbackResponse
                }
            }
            
            if (response.ok) {
                val markdown = response.text().await()
                val cleanedMd = removeFrontMatter(markdown)
                renderedHtml = MarkdownParser.parse(cleanedMd)
            } else {
                renderedHtml = null
            }
        } catch (e: Exception) {
            console.error("MarkdownContent error", e)
            renderedHtml = null
        } finally {
            isLoading = false
        }
    }

    Div(attrs = { style { padding(2.cssRem) } }) {
        if (isLoading) {
            Text(loadingText)
        } else if (renderedHtml != null) {
            Div(attrs = {
                classes("markdown-body")
                ref {
                    it.innerHTML = renderedHtml!!
                    onDispose {}
                }
            })
        } else {
            Text(failedText)
        }
    }
}

// Simple helper to remove Jekyll-style front matter
private fun removeFrontMatter(markdown: String): String {
    val regex = Regex("^---\n[\\s\\S]*?\n---\n")
    return markdown.replaceFirst(regex, "")
}
