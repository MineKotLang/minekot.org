package org.minekot.site.components.sections

import androidx.compose.runtime.Composable
import com.varabyte.kobweb.silk.components.icons.fa.FaDiscord
import com.varabyte.kobweb.silk.components.icons.fa.FaGithub
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
            },
        ) { FaGithub() }
        Span { Text(" | ") }
        A(
            href = "https://discord.minekot.org",
            attrs = {
                attr("target", "_blank")
                attr("rel", "noopener noreferrer")
            },
        ) { FaDiscord() }
    }
}
