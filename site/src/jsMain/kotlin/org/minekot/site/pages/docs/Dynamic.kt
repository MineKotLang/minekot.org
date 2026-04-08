package org.minekot.site.pages.docs

import androidx.compose.runtime.Composable
import com.varabyte.kobweb.core.Page
import com.varabyte.kobweb.core.rememberPageContext
import org.minekot.site.components.DocRenderer

@Page("{...path}")
@Composable
fun DocsDynamicPage() {
    val ctx = rememberPageContext()
    val path = ctx.route.params["path"] ?: ""
    
    DocRenderer(path)
}
