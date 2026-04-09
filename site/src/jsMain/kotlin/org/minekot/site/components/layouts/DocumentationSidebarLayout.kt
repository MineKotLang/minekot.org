package org.minekot.site.components.layouts

import androidx.compose.runtime.*
import com.varabyte.kobweb.core.PageContext
import com.varabyte.kobweb.core.rememberPageContext
import com.varabyte.kobweb.silk.components.icons.fa.*
import kotlinx.browser.window
import kotlinx.coroutines.await
import kotlinx.serialization.json.Json
import org.jetbrains.compose.web.attributes.InputType
import org.jetbrains.compose.web.css.cssRem
import org.jetbrains.compose.web.css.padding
import org.jetbrains.compose.web.dom.*
import org.minekot.site.data.SidebarEntry
import org.minekot.site.data.SidebarSection
import org.minekot.site.data.expandedDirectories

private val jsonFormat = Json { ignoreUnknownKeys = true }

@Composable
fun DocumentationSidebarLayout(content: @Composable () -> Unit) {
    val ctx = rememberPageContext()
    var searchQuery by remember { mutableStateOf("") }
    var sections by remember { mutableStateOf<List<SidebarSection>>(emptyList()) }
    val currentRoute = ctx.route.path

    LaunchedEffect(Unit) {
        val response = window.fetch("https://raw.githubusercontent.com/MineKotLang/static/main/sidebar.json").await()
        //val response = window.fetch("http://127.0.0.1:5500/sidebar.json").await()
        if (response.ok) {
            sections = jsonFormat.decodeFromString(response.text().await())
        }
    }

    val filteredSections by remember(sections, searchQuery) {
        derivedStateOf {
            if (searchQuery.isBlank()) sections
            else sections.map { section ->
                SidebarSection(
                    id = section.id,
                    label = section.label,
                    entries = section.entries.filter { entry ->
                        entry.matches(searchQuery)
                    },
                )
            }.filter { it.entries.isNotEmpty() }
        }
    }

    val activeSection = remember(currentRoute, sections) {
        sections.find { section ->
            section.entries.any { entry ->
                entry.belongsToRoute(currentRoute) || entry.hasChildInRoute(currentRoute)
            }
        }?.id ?: "docs"
    }

    SiteScaffold(activePath = "documentation") {
        Main {
            Section(attrs = { classes("page", "documentation-page") }) {
                Div(attrs = { classes("container") }) {
                    Div(attrs = { classes("docs-layout", "documentation-layout") }) {
                        // Left Navigation - documentation Style
                        Aside(attrs = { classes("documentation-sidebar", "panel") }) {
                            // Search Bar
                            Div(attrs = { classes("documentation-search") }) {
                                Span(attrs = { classes("documentation-search-icon") }) { FaMagnifyingGlass() }
                                Input(
                                    type = InputType.Search,
                                    attrs = {
                                        classes("documentation-search-input")
                                        attr("placeholder", "Search documentation...")
                                        attr("aria-label", "Search documentation")
                                        value(searchQuery)
                                        onInput { searchQuery = it.value }
                                    },
                                )
                                if (searchQuery.isNotEmpty()) {
                                    Button(
                                        attrs = {
                                            classes("documentation-search-clear")
                                            attr("aria-label", "Clear search")
                                            onClick { searchQuery = "" }
                                        },
                                    ) { FaXmark() }
                                }
                            }

                            // Navigation
                            Nav(attrs = { classes("documentation-nav") }) {
                                if (sections.isEmpty()) {
                                    Div(attrs = { classes("documentation-loading") }) {
                                        Div(attrs = { classes("documentation-spinner") })
                                        Span { Text("Loading...") }
                                    }
                                } else if (filteredSections.isEmpty()) {
                                    Div(attrs = { classes("documentation-empty") }) {
                                        Text("No results found")
                                    }
                                } else {
                                    filteredSections.forEach { section ->
                                        key(section.id) {
                                            RenderSidebarSection(
                                                ctx = ctx,
                                                section = section,
                                                currentRoute = currentRoute,
                                                isSearching = searchQuery.isNotEmpty(),
                                                isActiveSection = section.id == activeSection,
                                            )
                                        }
                                    }
                                }
                            }
                        }

                        // Main Content Area with Breadcrumbs support
                        Div(attrs = { classes("documentation-main", "panel", "fade-in") }) {
                            Div(attrs = { style { padding(2.cssRem) } }) {
                                content()
                            }
                        }
                    }
                }
            }
        }
    }
}

@Composable
private fun RenderSidebarSection(
    ctx: PageContext,
    section: SidebarSection,
    currentRoute: String,
    isSearching: Boolean,
    isActiveSection: Boolean,
) {
    val expandedDirs = expandedDirectories.value
    val isExpanded = expandedDirs.contains(section.id)
    // Auto-expand active section on first load if never toggled
    LaunchedEffect(section.id, isActiveSection) {
        if (isActiveSection && !expandedDirectories.value.contains(section.id)) {
            expandedDirectories.value += section.id
        }
    }
    // Expand all when searching
    LaunchedEffect(isSearching) {
        if (isSearching && !expandedDirectories.value.contains(section.id)) {
            expandedDirectories.value += section.id
        }
    }

    Div(attrs = { classes("documentation-section") }) {
        // Section Header
        Button(
            attrs = {
                classes("documentation-section-toggle")
                if (isActiveSection) classes("active-section")
                onClick {
                    expandedDirectories.value = if (isExpanded) {
                        expandedDirectories.value - section.id
                    } else {
                        expandedDirectories.value + section.id
                    }
                }
            },
        ) {
            Span(
                attrs = {
                    classes("documentation-section-chevron")
                    if (isExpanded) classes("expanded")
                },
            ) {
                if (isExpanded) FaChevronDown() else FaChevronRight()
            }
            Span(attrs = { classes("documentation-section-label") }) { Text(section.label) }
        }

        if (isExpanded) {
            Div(attrs = { classes("documentation-section-entries") }) {
                section.entries.forEach { entry ->
                    key(entry.path ?: entry.label) {
                        RenderSidebarEntry(ctx, entry, currentRoute, isSearching, 0)
                    }
                }
            }
        }
    }
}

@Composable
private fun RenderSidebarEntry(
    ctx: PageContext,
    entry: SidebarEntry,
    currentRoute: String,
    isSearching: Boolean,
    depth: Int,
) {
    val isActive = entry.isActive(currentRoute)
    val hasActiveChild = entry.hasActiveChild(currentRoute)
    val entryKey = entry.path ?: entry.label
    val expandedDirs = expandedDirectories.value
    val isExpanded = expandedDirs.contains(entryKey)
    // Auto-expand if this entry or its child is active (on first encounter)
    LaunchedEffect(entryKey, isActive, hasActiveChild) {
        if ((isActive || hasActiveChild) && !expandedDirectories.value.contains(entryKey)) {
            expandedDirectories.value += entryKey
        }
    }
    // Expand all when searching
    LaunchedEffect(isSearching) {
        if (isSearching && !expandedDirectories.value.contains(entryKey)) {
            expandedDirectories.value += entryKey
        }
    }

    val hasChildren = !entry.children.isNullOrEmpty()
    val hasIndex = entry.indexPath != null
    val isClickable = hasChildren || entry.path != null || hasIndex

    Div(
        attrs = {
            classes("documentation-entry")
            if (depth > 0) classes("documentation-entry-nested")
        },
    ) {
        if (hasChildren) {
            // Directory with children - expandable and potentially clickable
            Div(attrs = { classes("documentation-directory") }) {
                // Toggle button for expanding/collapsing
                Button(
                    attrs = {
                        classes("documentation-directory-toggle")
                        onClick {
                            expandedDirectories.value = if (isExpanded) {
                                expandedDirectories.value - entryKey
                            } else {
                                expandedDirectories.value + entryKey
                            }
                        }
                    },
                ) {
                    Span(
                        attrs = {
                            classes("documentation-chevron")
                            if (isExpanded) classes("expanded")
                        },
                    ) {
                        if (isExpanded) FaChevronDown() else FaChevronRight()
                    }
                }

                // Clickable label (directory itself)
                val targetPath = entry.path ?: entry.indexPath
                if (targetPath != null) {
                    val isItemActive = currentRoute.endsWith(targetPath) || currentRoute.contains(targetPath)
                    A(
                        href = targetPath,
                        attrs = {
                            classes("documentation-directory-link")
                            if (isItemActive) classes("active")
                            onClick { e ->
                                if (e.button == 0.toShort() && !e.ctrlKey && !e.metaKey && !e.shiftKey && !e.altKey) {
                                    e.preventDefault()
                                    ctx.router.navigateTo(targetPath)
                                }
                            }
                        },
                    ) {
                        Span(attrs = { classes("documentation-directory-icon") }) { entry.icon }
                        Span(attrs = { classes("documentation-directory-label") }) { Text(entry.label) }
                    }
                } else {
                    // Non-clickable directory (no index)
                    Span(attrs = { classes("documentation-directory-static") }) {
                        Span(attrs = { classes("documentation-directory-icon") }) { entry.icon }
                        Span(attrs = { classes("documentation-directory-label") }) { Text(entry.label) }
                    }
                }
            }

            if (isExpanded) {
                Div(attrs = { classes("documentation-children") }) {
                    entry.children.forEach { child ->
                        key(child.path ?: child.label) {
                            RenderSidebarEntry(ctx, child, currentRoute, isSearching, depth + 1)
                        }
                    }
                }
            }
        } else if (entry.path != null) {
            // Leaf node - just a link
            val isItemActive = currentRoute.endsWith(entry.path) || currentRoute.contains(entry.path)
            A(
                href = entry.path,
                attrs = {
                    classes("documentation-link")
                    if (isItemActive) classes("active")
                    if (depth > 0) classes("documentation-link-nested")
                    onClick { e ->
                        if (e.button == 0.toShort() && !e.ctrlKey && !e.metaKey && !e.shiftKey && !e.altKey) {
                            e.preventDefault()
                            ctx.router.navigateTo(entry.path)
                        }
                    }
                },
            ) {
                Span(attrs = { classes("documentation-link-icon") }) { entry.icon }
                Span { Text(entry.label) }
            }
        }
    }
}

// Helper functions
private fun SidebarEntry.matches(query: String): Boolean {
    val q = query.lowercase()
    return label.lowercase().contains(q) ||
            children?.any { it.matches(query) } ?: false
}

private fun SidebarEntry.belongsToRoute(route: String): Boolean {
    val entryPath = path ?: indexPath
    return entryPath?.let { route.contains(it) } ?: false
}

private fun SidebarEntry.hasChildInRoute(route: String): Boolean {
    return children?.any { child ->
        child.belongsToRoute(route) || child.hasChildInRoute(route)
    } ?: false
}

private fun SidebarEntry.isActive(currentRoute: String): Boolean {
    val entryPath = path ?: indexPath
    return entryPath?.let { currentRoute.endsWith(it) || currentRoute.contains(it) } ?: false
}

private fun SidebarEntry.hasActiveChild(currentRoute: String): Boolean {
    return children?.any { child ->
        child.isActive(currentRoute) || child.hasActiveChild(currentRoute)
    } ?: false
}

private val SidebarEntry.icon
    @Composable
    get() = when {
        children != null -> FaFolderOpen()
        label.contains("getting started", ignoreCase = true) -> FaRocket()
        label.contains("guide", ignoreCase = true) -> FaBookBookmark()
        label.contains("reference", ignoreCase = true) -> FaBookAtlas()
        label.contains("api", ignoreCase = true) -> FaPlug()
        label.contains("example", ignoreCase = true) -> FaLightbulb()
        label.contains("tutorial", ignoreCase = true) -> FaGraduationCap()
        label.contains("install", ignoreCase = true) -> FaDownload()
        label.contains("config", ignoreCase = true) -> FaGear()
        label.contains("faq", ignoreCase = true) -> FaCircleQuestion()
        label.contains("troubleshoot", ignoreCase = true) -> FaWrench()
        label.contains("changelog", ignoreCase = true) -> FaFilePen()
        label.contains("license", ignoreCase = true) -> FaScroll()
        label.contains("contribut", ignoreCase = true) -> FaHandshake()
        label.contains("security", ignoreCase = true) -> FaLock()
        label.contains("module", ignoreCase = true) -> FaCube()
        label.contains("script", ignoreCase = true) -> FaTerminal()
        else -> FaFile()
    }
