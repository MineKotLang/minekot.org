package org.example.app.pages.addons

import androidx.compose.runtime.Composable
import com.varabyte.kobweb.core.Page
import org.example.app.data.addonDetailsById

@Page("/addons/0002/")
@Composable
fun Addon0002Page() {
    AddonDetailPage(addonDetailsById.getValue("0002"))
}

