package org.minekot.site.components

import androidx.compose.runtime.*
import com.varabyte.kobweb.silk.theme.colors.ColorMode
import kotlinx.browser.window
import kotlinx.coroutines.await
import org.jetbrains.compose.web.css.cssRem
import org.jetbrains.compose.web.css.padding
import org.jetbrains.compose.web.dom.Div
import org.jetbrains.compose.web.dom.Text
import org.minekot.site.data.shikiHighlighter
import org.minekot.site.util.MarkdownParser

/**
 * A Composable component that fetches, parses, and displays Markdown content from a remote GitHub repository.
 *
 * This component handles the asynchronous lifecycle of fetching raw Markdown files from the MineKotLang/static
 * repository. It implements a fallback mechanism for directory-style paths (appending index.md) and
 * automatically strips Jekyll-style front matter before rendering the content into HTML using a
 * custom Markdown parser. The rendered content is injected into the DOM with the "markdown-body"
 * class for consistent styling.
 *
 * @param baseDir The root directory within the remote repository where the content is located.
 * @param path The specific file path or directory path to the Markdown resource.
 * @param loadingText The text to display while the network request or parsing is in progress.
 * @param failedText The text to display if the resource cannot be found or the fetch fails.
 * @return Unit This is a Composable function that emits UI elements.
 */
@Composable
fun MarkdownContent(
    baseDir: String,
    path: String,
    loadingText: String = "Loading...",
    failedText: String = "Failed to load.",
) {
    var renderedHtml by remember { mutableStateOf<String?>(null) }
    var isLoading by remember { mutableStateOf(true) }
    val highlighter = shikiHighlighter

    val isLight = ColorMode.current.isLight

    // Key on highlighter so we re-render when it becomes ready
    LaunchedEffect(baseDir, path, highlighter, isLight) {
        isLoading = true
        val fetchPath = when {
            path.endsWith(".md") -> path
            path.endsWith("/") || path.isEmpty() -> "${path}index.md"
            else -> "$path.md"
        }

        var response =
            window.fetch("https://raw.githubusercontent.com/MineKotLang/static/main/$baseDir/$fetchPath").await()

        if (!response.ok && !path.endsWith("/") && !path.endsWith(".md")) {
            val fallbackResponse =
                window.fetch("https://raw.githubusercontent.com/MineKotLang/static/main/$baseDir/$path/index.md")
                    .await()
            if (fallbackResponse.ok) {
                response = fallbackResponse
            }
        }

        if (response.ok) {
            val markdown = response.text().await()
            val cleanedMd = removeFrontMatter(markdown)
            renderedHtml = MarkdownParser.parse(cleanedMd, isLight)
        } else {
            renderedHtml = null
        }
        isLoading = false
    }

    Div(attrs = { style { padding(2.cssRem) } }) {
        if (isLoading) {
            Text(loadingText)
        } else if (renderedHtml != null) {
            Div(
                attrs = {
                    classes("markdown-body")
                    ref {
                        it.innerHTML = renderedHtml!!
                        onDispose {}
                    }
                },
            )
        } else {
            Text(failedText)
        }
    }
}

/**
 * Removes Jekyll-style YAML front matter from the beginning of a Markdown string.
 *
 * This helper uses a regular expression to identify and remove metadata blocks delimited by
 * triple dashes (---) at the very start of the file. This ensures that metadata intended for
 * static site generators does not appear as literal text in the rendered output.
 *
 * @param markdown The raw Markdown string potentially containing front matter.
 * @return The Markdown string with the front matter block removed.
 */
private fun removeFrontMatter(markdown: String): String {
    val regex = Regex("^---\n[\\s\\S]*?\n---\n")
    return markdown.replaceFirst(regex, "")
}
