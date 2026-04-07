package org.example.app

import com.varabyte.kobweb.compose.ui.graphics.Color
import com.varabyte.kobweb.compose.ui.graphics.Colors
import com.varabyte.kobweb.silk.init.InitSilk
import com.varabyte.kobweb.silk.init.InitSilkContext
import com.varabyte.kobweb.silk.theme.colors.ColorMode
import com.varabyte.kobweb.silk.theme.colors.palette.background
import com.varabyte.kobweb.silk.theme.colors.palette.color
import com.varabyte.kobweb.silk.theme.colors.palette.border
import com.varabyte.kobweb.silk.theme.colors.palette.link
import kotlinx.browser.window

class SitePalette(
    val nearBackground: Color,
    val cobweb: Color,
    val brand: Brand,
) {
    class Brand(
        val primary: Color = Color.rgb(0x3C83EF),
        val accent: Color = Color.rgb(0xF3DB5B),
    )
}

object SitePalettes {
    val light = SitePalette(
        nearBackground = Color.rgb(0xF4F6FA),
        cobweb = Colors.LightGray,
        brand = SitePalette.Brand(
            primary = Color.rgb(0x3C83EF),
            accent = Color.rgb(0xFCBA03),
        )
    )
    val dark = SitePalette(
        nearBackground = Color.rgb(0x232433),
        cobweb = Colors.LightGray.inverted(),
        brand = SitePalette.Brand(
            primary = Color.rgb(0xCBA6F7),
            accent = Color.rgb(0xCBA6F7),
        )
    )
}

fun ColorMode.toSitePalette(): SitePalette {
    return when (this) {
        ColorMode.LIGHT -> SitePalettes.light
        ColorMode.DARK -> SitePalettes.dark
    }
}

@InitSilk
fun initTheme(ctx: InitSilkContext) {
    val storedTheme = try {
        window.localStorage.getItem("minekot.theme") ?: "dark"
    } catch (_: Throwable) {
        "dark"
    }

    ctx.config.initialColorMode = if (storedTheme == "light") ColorMode.LIGHT else ColorMode.DARK

    ctx.theme.palettes.light.background = Color.rgb(0xF0F4FF)
    ctx.theme.palettes.light.color = Colors.Black

    ctx.theme.palettes.dark.background = Color.rgb(0x141421)
    ctx.theme.palettes.dark.color = Color.rgb(0xCDD6F4)
    ctx.theme.palettes.dark.border = Color.rgba(133, 139, 166, 0.18f)
    ctx.theme.palettes.dark.link.default = Color.rgb(0x89B4FA)
    ctx.theme.palettes.dark.link.visited = Color.rgb(0x89B4FA)
}
