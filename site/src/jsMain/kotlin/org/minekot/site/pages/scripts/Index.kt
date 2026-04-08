package org.minekot.site.pages.scripts

import androidx.compose.runtime.Composable
import com.varabyte.kobweb.core.Page
import org.minekot.site.components.ScriptRenderer

@Page
@Composable
fun ScriptsIndexPage() {
    ScriptRenderer("index")
}
