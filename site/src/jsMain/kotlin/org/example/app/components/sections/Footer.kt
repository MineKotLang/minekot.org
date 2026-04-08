package org.example.app.components.sections

import androidx.compose.runtime.Composable
import org.jetbrains.compose.web.dom.A
import org.jetbrains.compose.web.dom.Footer
import org.jetbrains.compose.web.dom.Span
import org.jetbrains.compose.web.dom.Text

@Composable
fun Footer() {
    Footer(attrs = { classes("footer", "container") }) {
        A(
            href = "https://github.com/MineKotLang/",
            attrs = {
                attr("target", "_blank")
                attr("rel", "noopener noreferrer")
            }
        ) { Text("Github") }
        Span { Text(" | ") }
        A(
            href = "https://discord.gg/ADD_IT_HERE_ON_RELEASE",
            attrs = {
                attr("target", "_blank")
                attr("rel", "noopener noreferrer")
            }
        ) { Text("Discord") }
    }
}
