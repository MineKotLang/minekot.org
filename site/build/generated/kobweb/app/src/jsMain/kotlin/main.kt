@file:Suppress(
    "RETURN_VALUE_NOT_USED",
    "RETURN_VALUE_NOT_USED_COERCION",
)

import androidx.compose.runtime.Composable
import androidx.compose.runtime.ProvidableCompositionLocal
import androidx.compose.runtime.compositionLocalOf
import com.varabyte.kobweb.browser.api
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
import kotlinx.dom.hasClass
import kotlinx.dom.removeClass
import org.jetbrains.compose.web.renderComposable
import org.w3c.dom.EventSource
import org.w3c.dom.EventSourceInit
import org.w3c.dom.MessageEvent
import org.w3c.dom.`get`
import org.minekot.site.components.layouts.MarkdownLayout as _org_minekot_site_components_layouts_MarkdownLayout
import org.minekot.site.components.layouts.PageLayout as _org_minekot_site_components_layouts_PageLayout
import org.minekot.site.pages.AboutPage as _org_minekot_site_pages_AboutPage
import org.minekot.site.pages.HomePage as _org_minekot_site_pages_HomePage
import org.minekot.site.pages.`404` as _org_minekot_site_pages_404
import org.minekot.site.pages.docs.DocsDynamicPage as _org_minekot_site_pages_docs_DocsDynamicPage
import org.minekot.site.pages.docs.DocsIndexPage as _org_minekot_site_pages_docs_DocsIndexPage
import org.minekot.site.pages.modules.ModulesDynamicPage as _org_minekot_site_pages_modules_ModulesDynamicPage
import org.minekot.site.pages.modules.ModulesIndexPage as _org_minekot_site_pages_modules_ModulesIndexPage
import org.minekot.site.pages.scripts.ScriptsDynamicPage as _org_minekot_site_pages_scripts_ScriptsDynamicPage
import org.minekot.site.pages.scripts.ScriptsIndexPage as _org_minekot_site_pages_scripts_ScriptsIndexPage

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

private fun forceReloadNow() {
    window.stop()
    window.location.reload()
}

private fun handleServerStatusEvents() {
    val status = document.getElementById("status")!!
    var lastVersion: Int? = null
    var shouldReload = false

    val warningIcon = status.children[0]!!
    val spinnerIcon = status.children[1]!!
    val statusText = status.children[2]!!

    status.addEventListener("transitionend", {
        if (status.hasClass("fade-out")) {
            status.removeClass("fade-out")
            if (shouldReload) {
                forceReloadNow()
            }
        }
    })

    val eventSource = EventSource("/api/kobweb-status", EventSourceInit(true))
    eventSource.addEventListener("version", { evt ->
        val version = (evt as MessageEvent).data.toString().toInt()
        if (lastVersion == null) {
            lastVersion = version
        }
        if (lastVersion != version) {
            lastVersion = version
            if (document.asDynamic().hidden) {
                // Reload immediately when the page is not visible as the animation will not run
                forceReloadNow()
            } else if (status.className.isNotEmpty()) {
                shouldReload = true
            } else {
                // Not sure if we can get here but if we can't rely on the status transition
                // to reload we should do it ourselves.
                forceReloadNow()
            }
        }
    })

    eventSource.addEventListener("status", { evt ->
        val values: dynamic = JSON.parse<Any>((evt as MessageEvent).data.toString())
        val text = values.text as String
        val isError = (values.isError as String).toBoolean()
        if (text.isNotBlank()) {
            warningIcon.className = if (isError) "visible" else "hidden"
            spinnerIcon.className = if (isError) "hidden" else "visible"
            statusText.innerHTML = "<i>$text</i>"
            status.className = "fade-in"
        } else {
            if (status.className == "fade-in") {
                status.className = "fade-out"
            }
        }
    })

    eventSource.onerror = { eventSource.close() }
}

public fun main() {
    handleServerStatusEvents()

    window.api.logOnError = true

    AppGlobals.initialize(mapOf("title" to "MineKot"))
    BasePath.set("")
    val router = Router()
    com.varabyte.kobweb.core.init.initKobweb(router) { ctx ->
        ctx.router.registerLayout(
            "org.minekot.site.components.layouts.MarkdownLayout",
            parentLayoutId = "org.minekot.site.components.layouts.PageLayout",
            initRouteMethod = { ctx ->
                org.minekot.site.components.layouts.initMarkdownLayout(ctx)
            },
        ) { pageCtx, pageMethod -> 
            _org_minekot_site_components_layouts_MarkdownLayout {
                pageMethod(pageCtx)
            }
        }
        ctx.router.registerLayout(
            "org.minekot.site.components.layouts.PageLayout",
        ) { pageCtx, pageMethod -> 
            _org_minekot_site_components_layouts_PageLayout(pageCtx) {
                provideLayoutScope(this) {
                    pageMethod(pageCtx)
                }
            }
        }
        ctx.router.register(
            "/",
        ) { pageCtx -> 
            _org_minekot_site_pages_HomePage()
        }
        ctx.router.register(
            "/404",
        ) { pageCtx -> 
            _org_minekot_site_pages_404()
        }
        ctx.router.register(
            "/about",
            layoutId = "org.minekot.site.components.layouts.MarkdownLayout",
            initRouteMethod = { ctx ->
                org.minekot.site.pages.initAboutPage(ctx)
            },
        ) { pageCtx -> 
            _org_minekot_site_pages_AboutPage()
        }
        ctx.router.register(
            "/docs/",
        ) { pageCtx -> 
            _org_minekot_site_pages_docs_DocsIndexPage()
        }
        ctx.router.register(
            "/docs/{...path}",
        ) { pageCtx -> 
            _org_minekot_site_pages_docs_DocsDynamicPage()
        }
        ctx.router.register(
            "/modules/",
        ) { pageCtx -> 
            _org_minekot_site_pages_modules_ModulesIndexPage()
        }
        ctx.router.register(
            "/modules/{...path}",
        ) { pageCtx -> 
            _org_minekot_site_pages_modules_ModulesDynamicPage()
        }
        ctx.router.register(
            "/scripts/",
        ) { pageCtx -> 
            _org_minekot_site_pages_scripts_ScriptsIndexPage()
        }
        ctx.router.register(
            "/scripts/{...path}",
        ) { pageCtx -> 
            _org_minekot_site_pages_scripts_ScriptsDynamicPage()
        }

    }
    router.addRouteInterceptor {
        path = path.removeSuffix(".html").removeSuffix(".htm")
    }

    com.varabyte.kobweb.silk.init.additionalSilkInitialization = { ctx ->
        com.varabyte.kobweb.silk.init.initSilkWidgets(ctx)
        com.varabyte.kobweb.silk.init.initSilkWidgetsKobweb(ctx)
        ctx.theme.registerStyle("headline-text", org.minekot.site.HeadlineTextStyle)
        ctx.theme.registerStyle("subheadline-text", org.minekot.site.SubheadlineTextStyle)
        ctx.theme.registerStyle("markdown", org.minekot.site.components.layouts.MarkdownStyle)
        ctx.theme.registerStyle("page-content", org.minekot.site.components.layouts.PageContentStyle)
        ctx.theme.registerVariant("-circle", org.minekot.site.CircleButtonVariant
        )
        ctx.theme.registerVariant("-uncolored", org.minekot.site.UncoloredButtonVariant
        )
        org.minekot.site.initSiteStyles(ctx)
        org.minekot.site.initTheme(ctx)
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
        org.minekot.site.AppEntry {
            router.renderActivePage { DeferringHost { it() } }
        }
    }
}
