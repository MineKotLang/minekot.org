package org.minekot.site.util

import kotlinx.browser.window
import kotlinx.coroutines.await
import org.minekot.site.data.shikiHighlighter

object MarkdownParser {
    suspend fun parse(markdown: String, isLightMode: Boolean = false): String {
        val highlighter = shikiHighlighter
        val marked = window.asDynamic().marked
        val theme = if (isLightMode) "catppuccin-latte" else "catppuccin-mocha"

        if (highlighter != null) {
            val options = js("{}")
            val renderer = js("new window.marked.Renderer()")

            renderer.code = { arg1: dynamic, arg2: dynamic, _: dynamic ->
                val isObject = js("typeof arg1 === 'object'") as Boolean && arg1 != null
                val codeText = if (isObject) arg1.text as String else arg1 as String
                val language = if (isObject) (arg1.lang as? String) else (arg2 as? String)
                val finalLang = language ?: "text"

                try {
                    // Shiki v1 codeToHtml returns the full <pre> block
                    val shikiOptions = js("{}")
                    shikiOptions.lang = finalLang
                    shikiOptions.theme = theme
                    val html = highlighter.codeToHtml(codeText, shikiOptions) as String
                    html.replace("<pre ", "<pre style=\"font-family: 'JetBrains Mono', monospace;\" ")
                } catch (e: Exception) {
                    console.error("Shiki highlighting failed for lang: $finalLang", e)
                    "<pre><code>$codeText</code></pre>"
                }
            }

            options.renderer = renderer
            options.async = true

            // We use a specific instance of marked with the renderer for this call
            return (marked.parse(markdown, options) as kotlin.js.Promise<*>).await() as String
        } else {
            console.warn("MarkdownParser: Shiki highlighter not ready, falling back to plain marked")
            return marked.parse(markdown) as String
        }
    }
}
