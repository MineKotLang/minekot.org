package org.minekot.site.pages.scripts

import androidx.compose.runtime.Composable
import com.varabyte.kobweb.core.Page
import com.varabyte.kobweb.core.rememberPageContext
import org.minekot.site.components.ScriptRenderer

@Page("{...path}")
@Composable
fun ScriptsDynamicPage() {
    val ctx = rememberPageContext()
    val path = ctx.route.params["path"] ?: ""
    
    ScriptRenderer(path)
}
