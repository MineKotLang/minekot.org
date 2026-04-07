@file:Suppress(
    "RETURN_VALUE_NOT_USED",
    "RETURN_VALUE_NOT_USED_COERCION",
)

import androidx.compose.runtime.Composable
import androidx.compose.runtime.ProvidableCompositionLocal
import androidx.compose.runtime.compositionLocalOf
import com.varabyte.kobweb.core.AppGlobals
import com.varabyte.kobweb.navigation.BasePath
import com.varabyte.kobweb.navigation.Router
import com.varabyte.kobweb.navigation.UpdateHistoryMode
import com.varabyte.kobweb.navigation.remove
import com.varabyte.kobweb.silk.defer.DeferringHost
import kotlin.Any
import kotlin.Suppress
import kotlin.Unit
import kotlinx.browser.document
import kotlinx.browser.window
import org.jetbrains.compose.web.renderComposable
import org.example.app.components.layouts.MarkdownLayout as _org_example_app_components_layouts_MarkdownLayout
import org.example.app.components.layouts.PageLayout as _org_example_app_components_layouts_PageLayout
import org.example.app.pages.AboutPage as _org_example_app_pages_AboutPage
import org.example.app.pages.HomePage as _org_example_app_pages_HomePage
import org.example.app.pages.NotFoundPage as _org_example_app_pages_NotFoundPage
import org.example.app.pages.addons.Addon0001Page as _org_example_app_pages_addons_Addon0001Page
import org.example.app.pages.addons.Addon0002Page as _org_example_app_pages_addons_Addon0002Page
import org.example.app.pages.addons.Addon0003Page as _org_example_app_pages_addons_Addon0003Page
import org.example.app.pages.addons.AddonsPage as _org_example_app_pages_addons_AddonsPage
import org.example.app.pages.docs.DocsPage as _org_example_app_pages_docs_DocsPage
import org.example.app.pages.scripts.ScriptsPage as _org_example_app_pages_scripts_ScriptsPage

private val LayoutScopeLocal: ProvidableCompositionLocal<Any?> = compositionLocalOf<Any?> { null }

@Composable
private fun <T : Any> currentLayoutScope(): T {
    @Suppress("UNCHECKED_CAST")
    return LayoutScopeLocal.current as? T
        ?: error("Unexpected between Page/Layout scope and the parent Layout which it is providing it. Please report this issue to the Kobweb developers.")
}

@Composable
private fun <T : Any> provideLayoutScope(layoutScope: T, content: @Composable () -> Unit) {
    androidx.compose.runtime.CompositionLocalProvider(LayoutScopeLocal provides layoutScope, content = content)
}

public fun main() {
    AppGlobals.initialize(mapOf("title" to "MineKot"))
    BasePath.set("")
    val router = Router()
    com.varabyte.kobweb.core.init.initKobweb(router) { ctx ->
        ctx.router.registerLayout(
            "org.example.app.components.layouts.MarkdownLayout",
            parentLayoutId = "org.example.app.components.layouts.PageLayout",
            initRouteMethod = { ctx ->
                org.example.app.components.layouts.initMarkdownLayout(ctx)
            },
        ) { pageCtx, pageMethod -> 
            _org_example_app_components_layouts_MarkdownLayout {
                pageMethod(pageCtx)
            }
        }
        ctx.router.registerLayout(
            "org.example.app.components.layouts.PageLayout",
        ) { pageCtx, pageMethod -> 
            _org_example_app_components_layouts_PageLayout(pageCtx) {
                provideLayoutScope(this) {
                    pageMethod(pageCtx)
                }
            }
        }
        ctx.router.register(
            "/",
        ) { pageCtx -> 
            _org_example_app_pages_HomePage()
        }
        ctx.router.register(
            "/about",
            layoutId = "org.example.app.components.layouts.MarkdownLayout",
            initRouteMethod = { ctx ->
                org.example.app.pages.initAboutPage(ctx)
            },
        ) { pageCtx -> 
            _org_example_app_pages_AboutPage()
        }
        ctx.router.register(
            "/addons/",
        ) { pageCtx -> 
            _org_example_app_pages_addons_AddonsPage()
        }
        ctx.router.register(
            "/addons/0001",
        ) { pageCtx -> 
            _org_example_app_pages_addons_Addon0001Page()
        }
        ctx.router.register(
            "/addons/0002",
        ) { pageCtx -> 
            _org_example_app_pages_addons_Addon0002Page()
        }
        ctx.router.register(
            "/addons/0003",
        ) { pageCtx -> 
            _org_example_app_pages_addons_Addon0003Page()
        }
        ctx.router.register(
            "/docs/",
        ) { pageCtx -> 
            _org_example_app_pages_docs_DocsPage()
        }
        ctx.router.register(
            "/not-found",
        ) { pageCtx -> 
            _org_example_app_pages_NotFoundPage()
        }
        ctx.router.register(
            "/scripts/",
        ) { pageCtx -> 
            _org_example_app_pages_scripts_ScriptsPage()
        }

    }
    router.addRouteInterceptor {
        path = path.removeSuffix(".html").removeSuffix(".htm")
    }

    com.varabyte.kobweb.silk.init.additionalSilkInitialization = { ctx ->
        com.varabyte.kobweb.silk.init.initSilkWidgets(ctx)
        com.varabyte.kobweb.silk.init.initSilkWidgetsKobweb(ctx)
        ctx.theme.registerStyle("headline-text", org.example.app.HeadlineTextStyle)
        ctx.theme.registerStyle("subheadline-text", org.example.app.SubheadlineTextStyle)
        ctx.theme.registerStyle("markdown", org.example.app.components.layouts.MarkdownStyle)
        ctx.theme.registerStyle("page-content", org.example.app.components.layouts.PageContentStyle)
        ctx.theme.registerVariant("-circle", org.example.app.CircleButtonVariant
        )
        ctx.theme.registerVariant("-uncolored", org.example.app.UncoloredButtonVariant
        )
        org.example.app.initSiteStyles(ctx)
        org.example.app.initTheme(ctx)
    }

    // Dedup any leading slashes after removing the origin, just in case someone typed
    // something like `https://site.com//about` by accident. If we pass `//about` into
    // `tryRoutingTo`, Kobweb will reject it as a protocol-relative URL; instead, we
    // want it to navigate to `/about`
    router.tryRoutingTo(BasePath.remove("/" + window.location.href.removePrefix(window.origin).trimStart('/')), UpdateHistoryMode.REPLACE)

    // For SEO, we may bake the contents of a page in at build time. However, we will
    // overwrite them the first time we render this page with their composable, dynamic
    // versions. Think of this as poor man's hydration :)
    // See also: https://en.wikipedia.org/wiki/Hydration_(web_development)
    val root = document.getElementById("_kobweb-root")!!
    while (root.firstChild != null) { root.removeChild(root.firstChild!!) }

    renderComposable(rootElementId = "_kobweb-root") {
        org.example.app.AppEntry {
            router.renderActivePage { DeferringHost { it() } }
        }
    }
}
