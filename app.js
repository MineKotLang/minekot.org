const STORAGE_KEYS = {
  theme: "minekot.theme",
};

function readStoredTheme() {
  try {
    return localStorage.getItem(STORAGE_KEYS.theme);
  } catch (error) {
    return null;
  }
}

function persistTheme(theme) {
  try {
    localStorage.setItem(STORAGE_KEYS.theme, theme);
  } catch (error) {
    // Ignore storage failures (private mode/restricted storage) and keep in-memory theme behavior.
  }
}

function applyTheme(theme) {
  document.documentElement.dataset.theme = theme;
  if (document.body) {
    document.body.dataset.theme = theme;
  }
}

function ensureTheme() {
  const stored = readStoredTheme();
  const theme = stored === "light" || stored === "dark" ? stored : "dark";
  applyTheme(theme);
  if (stored !== theme) {
    persistTheme(theme);
  }
}

function updateThemeToggleLabels(theme) {
  document.querySelectorAll("[data-theme-toggle]").forEach((button) => {
    button.textContent = theme === "dark" ? "Light mode" : "Dark mode";
  });
}

function setTheme(theme) {
  applyTheme(theme);
  persistTheme(theme);
  updateThemeToggleLabels(theme);
}

function toggleTheme() {
  const nextTheme = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
  setTheme(nextTheme);
}

function syncThemeFromStorage() {
  const stored = readStoredTheme();
  const theme = stored === "light" || stored === "dark" ? stored : "dark";
  applyTheme(theme);
  updateThemeToggleLabels(theme);
}

function copyText(text) {
  if (navigator.clipboard?.writeText) {
    return navigator.clipboard.writeText(text);
  }

  const textarea = document.createElement("textarea");
  textarea.value = text;
  textarea.style.position = "fixed";
  textarea.style.opacity = "0";
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  textarea.remove();
  return Promise.resolve();
}

async function copyFromButton(button, selector) {
  const target = document.querySelector(selector);
  if (!target) return;

  const originalText = button.textContent;
  await copyText(target.textContent.trim());
  button.textContent = "Copied";
  window.setTimeout(() => {
    button.textContent = originalText;
  }, 1200);
}

function getDocShareLink(docId) {
  const shareUrl = new URL("/docs/", window.location.origin);
  shareUrl.searchParams.set("id", String(docId));
  return shareUrl.toString();
}

function getInitialDocId() {
  const params = new URLSearchParams(window.location.search);
  const directId = params.get("id");
  if (directId) return directId;

  const query = window.location.search.replace(/^\?/, "");
  if (query.startsWith("id-")) {
    return query.slice(3) || null;
  }

  return null;
}

function revealDocCard(docId) {
  const card = document.querySelector(`[data-doc-id="${CSS.escape(docId)}"]`);
  if (!card) return;

  card.scrollIntoView({ behavior: "smooth", block: "start" });
  card.classList.add("is-target");
  window.setTimeout(() => {
    card.classList.remove("is-target");
  }, 1800);
}

function setActiveTypeChip(type) {
  document.querySelectorAll("[data-type-filter]").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.typeFilter === type);
  });
}

function normalizeSearchText(value) {
  return value.replace(/\s+/g, " ").trim().toLowerCase();
}

function filterDocs(searchValue, typeValue, focusDocId = null) {
  const typeFilter = typeValue || "all";
  const query = normalizeSearchText(searchValue);
  const queryTokens = query.split(" ").filter(Boolean);
  const cards = document.querySelectorAll("[data-doc-card]");
  let visibleCount = 0;

  cards.forEach((card) => {
    const titleText = card.querySelector(".syntaxtitle")?.textContent || card.dataset.searchTitle || "";
    const descriptionText = card.querySelector(".syntaxdescription")?.textContent || card.dataset.searchDescription || "";
    const haystack = normalizeSearchText(`${titleText} ${descriptionText}`);
    const cardType = card.dataset.syntaxType || "";
    const docId = card.dataset.docId || "";
    const matchesQuery = queryTokens.length === 0 || queryTokens.every((token) => haystack.includes(token));
    const matchesType = typeFilter === "all" || cardType === typeFilter;
    const matchesFocus = !focusDocId || docId === focusDocId;
    const matches = matchesQuery && matchesType && matchesFocus;
    card.hidden = !matches;
    if (matches) visibleCount += 1;
  });

  const emptyState = document.querySelector("[data-doc-empty-state]");
  if (emptyState) {
    emptyState.hidden = visibleCount !== 0;
  }
}

function initHome() {
  document.querySelectorAll(".fade-in").forEach((item, index) => {
    item.style.animationDelay = `${index * 70}ms`;
  });
}

function initDocs() {
  const searchInput = document.querySelector("[data-doc-search]");
  const clearSearchButton = document.querySelector("[data-clear-search]");
  let selectedType = "all";
  let focusedDocId = null;

  searchInput?.addEventListener("input", (event) => {
    focusedDocId = null;
    filterDocs(event.target.value, selectedType);
  });

  clearSearchButton?.addEventListener("click", () => {
    if (!searchInput) return;
    focusedDocId = null;
    searchInput.value = "";
    filterDocs("", selectedType);
    searchInput.focus();
  });

  document.querySelectorAll("[data-type-filter]").forEach((button) => {
    button.addEventListener("click", () => {
      focusedDocId = null;
      selectedType = button.dataset.typeFilter || "all";
      setActiveTypeChip(selectedType);
      filterDocs(searchInput?.value || "", selectedType);
    });
  });

  setActiveTypeChip(selectedType);
  filterDocs(searchInput?.value || "", selectedType);

  const initialDocId = getInitialDocId();
  if (initialDocId) {
    focusedDocId = initialDocId;
    filterDocs(searchInput?.value || "", selectedType, focusedDocId);
    window.requestAnimationFrame(() => revealDocCard(initialDocId));
  }

  document.addEventListener("click", (event) => {
    const accordionToggle = event.target.closest("[data-accordion-toggle]");
    if (accordionToggle) {
      const shell = accordionToggle.closest(".accordion-shell");
      const open = shell?.classList.toggle("open") ?? false;
      accordionToggle.setAttribute("aria-expanded", String(open));
      return;
    }

    const copyLinkButton = event.target.closest("[data-copy-link]");
    if (copyLinkButton) {
      const card = copyLinkButton.closest("[data-doc-card]");
      const docId = card?.dataset.docId;
      if (!docId) return;
      const shareLink = getDocShareLink(docId);
      const originalText = copyLinkButton.textContent;
      copyText(shareLink).then(() => {
        copyLinkButton.textContent = "Copied";
        window.setTimeout(() => {
          copyLinkButton.textContent = originalText;
        }, 1200);
      });
      return;
    }

    const copyButton = event.target.closest("[data-copy-source]");
    if (copyButton) {
      copyFromButton(copyButton, copyButton.dataset.copySource);
      return;
    }

    const copyAllButton = event.target.closest("[data-copy-all]");
    if (copyAllButton) {
      const selectors = (copyAllButton.dataset.copyAll || "")
        .split(",")
        .map((entry) => entry.trim())
        .filter(Boolean);
      const text = selectors
        .map((selector) => document.querySelector(selector)?.textContent.trim() || "")
        .filter(Boolean)
        .join("\n\n");

      if (!text) return;
      const originalText = copyAllButton.textContent;
      copyText(text).then(() => {
        copyAllButton.textContent = "Copied";
        window.setTimeout(() => {
          copyAllButton.textContent = originalText;
        }, 1200);
      });
      return;
    }

    const jumpLink = event.target.closest("[data-jump-to]");
    if (jumpLink) {
      const target = document.querySelector(jumpLink.dataset.jumpTo);
      target?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
}

function boot() {
  ensureTheme();
  const activeTheme = document.documentElement.dataset.theme;
  updateThemeToggleLabels(activeTheme);

  window.addEventListener("storage", (event) => {
    if (event.key !== STORAGE_KEYS.theme || !event.newValue) return;
    applyTheme(event.newValue);
    updateThemeToggleLabels(event.newValue);
  });

  window.addEventListener("pageshow", syncThemeFromStorage);
  window.addEventListener("focus", syncThemeFromStorage);
  document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === "visible") {
      syncThemeFromStorage();
    }
  });

  if (document.body.dataset.page === "home") {
    initHome();
  }

  if (document.body.dataset.page === "docs") {
    initDocs();
  }

  document.querySelectorAll("[data-theme-toggle]").forEach((button) => {
    button.addEventListener("click", toggleTheme);
  });
}

window.addEventListener("DOMContentLoaded", boot);
