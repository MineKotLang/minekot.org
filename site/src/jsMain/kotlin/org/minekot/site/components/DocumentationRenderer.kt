package org.minekot.site.components

import androidx.compose.runtime.Composable
import com.varabyte.kobweb.core.rememberPageContext
import org.minekot.site.components.layouts.DocumentationLayout

@Composable
fun DocumentationRenderer() {
    val ctx = rememberPageContext()
    val fullPath = ctx.route.path

    // Determine the content type and path from the route
    // Routes can be: /documentation/docs/*, /documentation/modules/*, /documentation/scripts/*
    val (baseDir, docPath) = when {
        fullPath.startsWith("/docs/") -> {
            val path = fullPath.removePrefix("/docs/").trim('/')
            "docs" to (path.ifEmpty { "index" })
        }

        fullPath.startsWith("/modules/") -> {
            val path = fullPath.removePrefix("/modules/").trim('/')
            "modules" to (path.ifEmpty { "index" })
        }

        fullPath.startsWith("/scripts/") -> {
            val path = fullPath.removePrefix("/scripts/").trim('/')
            "scripts" to (path.ifEmpty { "index" })
        }

        fullPath == "/docs" -> "docs" to "index"
        fullPath == "/modules" -> "modules" to "index"
        fullPath == "/scripts" -> "scripts" to "index"
        else -> "docs" to "index"
    }

    DocumentationLayout {
        MarkdownContent(
            baseDir = baseDir,
            path = docPath,
            loadingText = "Loading documentation...",
            failedText = "Failed to load documentation for '$docPath'.",
        )
    }
}
