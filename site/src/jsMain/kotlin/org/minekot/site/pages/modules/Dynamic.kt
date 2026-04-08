package org.minekot.site.pages.modules

import androidx.compose.runtime.Composable
import com.varabyte.kobweb.core.Page
import com.varabyte.kobweb.core.rememberPageContext
import org.minekot.site.components.ModuleRenderer

@Page("{...path}")
@Composable
fun ModulesDynamicPage() {
    val ctx = rememberPageContext()
    val path = ctx.route.params["path"] ?: ""
    
    ModuleRenderer(path)
}
