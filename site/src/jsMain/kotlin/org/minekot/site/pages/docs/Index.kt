package org.minekot.site.pages.docs

import androidx.compose.runtime.Composable
import com.varabyte.kobweb.core.Page
import org.minekot.site.components.DocRenderer

@Page
@Composable
fun DocsIndexPage() {
    DocRenderer("index")
}
