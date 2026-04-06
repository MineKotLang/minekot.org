package org.example.app.pages.addons

import androidx.compose.runtime.Composable
import com.varabyte.kobweb.core.Page
import org.example.app.data.addonDetailsById

@Page("/addons/0003/")
@Composable
fun Addon0003Page() {
    AddonDetailPage(addonDetailsById.getValue("0003"))
}

