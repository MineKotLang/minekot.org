package org.minekot.site.pages.modules

import androidx.compose.runtime.Composable
import com.varabyte.kobweb.core.Page
import org.minekot.site.components.ModuleRenderer

@Page
@Composable
fun ModulesIndexPage() {
    ModuleRenderer("index")
}
