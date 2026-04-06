package org.example.app.data

data class DocEntry(
    val id: String,
    val type: String,
    val title: String,
    val typeLabel: String,
    val description: String,
    val syntaxCode: String,
    val exampleCode: String,
)

data class AddonSummary(
    val id: String,
    val title: String,
    val description: String,
    val downloadUrl: String,
)

data class AddonDetail(
    val id: String,
    val title: String,
    val description: String,
    val repositoryUrl: String,
    val downloadUrl: String,
    val versions: List<String>,
    val dependencies: List<String>,
)

data class ScriptSnippet(
    val id: String,
    val title: String,
    val description: String,
    val code: String,
)

val docsData = listOf(
    DocEntry("1", "Expressions", "Placeholder Title 1", "Expression", "Placeholder description 1.", "placeholder code 1", "placeholder example 1"),
    DocEntry("2", "Effects", "Placeholder Title 2", "Effects", "Placeholder description 2.", "placeholder code 2", "placeholder example 2"),
    DocEntry("3", "Conditions", "Placeholder Title 3", "Condition", "Placeholder description 3.", "placeholder code 3", "placeholder example 3"),
    DocEntry("4", "Effects", "Placeholder Title 4", "Effects", "Placeholder description 4.", "placeholder code 4", "placeholder example 4"),
    DocEntry("5", "Events", "Placeholder Title 5", "Event", "Placeholder description 5.", "placeholder code 5", "placeholder example 5"),
    DocEntry("6", "Functions", "Placeholder Title 6", "Function", "Placeholder description 6.", "placeholder code 6", "placeholder example 6"),
)

val addonSummaries = listOf(
    AddonSummary("0001", "PLACEHOLDER", "PLACEHOLDER", "https://example.com/download"),
    AddonSummary("0002", "PLACEHOLDER", "PLACEHOLDER", "https://example.com/download"),
    AddonSummary("0003", "PLACEHOLDER", "PLACEHOLDER", "https://example.com/download"),
)

val addonDetailsById = listOf(
    AddonDetail(
        id = "0001",
        title = "PLACEHOLDER",
        description = "PLACEHOLDER",
        repositoryUrl = "https://example.com/repository",
        downloadUrl = "https://example.com/download",
        versions = listOf("1.69", "1.68", "1.67"),
        dependencies = listOf("PLACEHOLDER", "PLACEHOLDER"),
    ),
    AddonDetail(
        id = "0002",
        title = "PLACEHOLDER",
        description = "PLACEHOLDER",
        repositoryUrl = "https://example.com/repository",
        downloadUrl = "https://example.com/download",
        versions = listOf("1.69", "1.68", "1.67"),
        dependencies = listOf("PLACEHOLDER", "PLACEHOLDER"),
    ),
    AddonDetail(
        id = "0003",
        title = "PLACEHOLDER",
        description = "PLACEHOLDER",
        repositoryUrl = "https://example.com/repository",
        downloadUrl = "https://example.com/download",
        versions = listOf("1.69", "1.68", "1.67"),
        dependencies = listOf("PLACEHOLDER", "PLACEHOLDER"),
    ),
).associateBy { it.id }

val scriptSnippets = listOf(
    ScriptSnippet("snippet-1", "PLACEHOLDER", "PLACEHOLDER", "placeholder script snippet"),
    ScriptSnippet("snippet-2", "PLACEHOLDER", "PLACEHOLDER", "placeholder script snippet"),
    ScriptSnippet("snippet-3", "PLACEHOLDER", "PLACEHOLDER", "placeholder script snippet"),
    ScriptSnippet("snippet-4", "PLACEHOLDER", "PLACEHOLDER", "placeholder script snippet"),
)

