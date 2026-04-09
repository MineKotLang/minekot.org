package org.minekot.site.pages.scripts

import androidx.compose.runtime.Composable
import com.varabyte.kobweb.core.Page
import org.minekot.site.components.DocumentationRenderer

@Page("{...path}")
@Composable
fun ScriptsDynamicPage() {
    DocumentationRenderer()
}
