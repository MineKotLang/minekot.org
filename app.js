const STORAGE_KEYS = {
  theme: "minekot.theme",
  users: "minekot.users",
  currentUserId: "minekot.currentUserId",
  addonSubmissions: "minekot.addonSubmissions",
};

const ROLE_ADMIN = "admin";
const ROLE_USER = "user";

function getThemeFromQuery() {
  const params = new URLSearchParams(window.location.search);
  const theme = params.get("theme");
  return theme === "light" || theme === "dark" ? theme : null;
}

function applyTheme(theme) {
  document.documentElement.dataset.theme = theme;
  if (document.body) {
    document.body.dataset.theme = theme;
  }
}

function ensureTheme() {
  const queryTheme = getThemeFromQuery();
  if (queryTheme) {
    applyTheme(queryTheme);
    localStorage.setItem(STORAGE_KEYS.theme, queryTheme);
    return;
  }

  const stored = localStorage.getItem(STORAGE_KEYS.theme);
  const theme = stored === "light" || stored === "dark" ? stored : "dark";
  applyTheme(theme);
  if (stored !== theme) {
    localStorage.setItem(STORAGE_KEYS.theme, theme);
  }
}

function updateThemeToggleLabels(theme) {
  document.querySelectorAll("[data-theme-toggle]").forEach((button) => {
    button.textContent = theme === "dark" ? "Light mode" : "Dark mode";
  });
}

function syncThemeNavigationLinks(theme) {
  document.querySelectorAll("[data-theme-nav]").forEach((link) => {
    const href = link.getAttribute("href") || "";
    const [path, queryString = ""] = href.split("?");
    const params = new URLSearchParams(queryString);
    params.set("theme", theme);
    link.setAttribute("href", `${path}?${params.toString()}`);
  });
}

function setTheme(theme) {
  applyTheme(theme);
  localStorage.setItem(STORAGE_KEYS.theme, theme);
  updateThemeToggleLabels(theme);
  syncThemeNavigationLinks(theme);
}

function toggleTheme() {
  const nextTheme = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
  setTheme(nextTheme);
}

function syncThemeFromStorage() {
  const queryTheme = getThemeFromQuery();
  if (queryTheme) {
    applyTheme(queryTheme);
    localStorage.setItem(STORAGE_KEYS.theme, queryTheme);
    updateThemeToggleLabels(queryTheme);
    syncThemeNavigationLinks(queryTheme);
    return;
  }

  const stored = localStorage.getItem(STORAGE_KEYS.theme);
  const theme = stored === "light" || stored === "dark" ? stored : "dark";
  applyTheme(theme);
  updateThemeToggleLabels(theme);
  syncThemeNavigationLinks(theme);
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
  const params = new URLSearchParams({ id: docId });
  const theme = document.documentElement.dataset.theme;
  if (theme === "light" || theme === "dark") {
    params.set("theme", theme);
  }
  return `docs.html?${params.toString()}`;
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

function getThemeValue() {
  const theme = document.documentElement.dataset.theme;
  return theme === "light" || theme === "dark" ? theme : "dark";
}

function buildCommunityAddonDetailLink(submissionId) {
  const params = new URLSearchParams();
  params.set("source", "community");
  params.set("id", submissionId);
  params.set("theme", getThemeValue());
  return `addon.html?${params.toString()}`;
}

function createLocalId(prefix) {
  if (typeof crypto !== "undefined" && typeof crypto.randomUUID === "function") {
    return `${prefix}_${crypto.randomUUID()}`;
  }
  return `${prefix}_${Date.now()}_${Math.random().toString(36).slice(2, 10)}`;
}

function readJsonStorage(key, fallbackValue) {
  try {
    const raw = localStorage.getItem(key);
    if (!raw) return fallbackValue;
    return JSON.parse(raw);
  } catch (error) {
    return fallbackValue;
  }
}

function writeJsonStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function getUsers() {
  return readJsonStorage(STORAGE_KEYS.users, []);
}

function setUsers(users) {
  writeJsonStorage(STORAGE_KEYS.users, users);
}

function getAddonSubmissions() {
  return readJsonStorage(STORAGE_KEYS.addonSubmissions, []);
}

function setAddonSubmissions(submissions) {
  writeJsonStorage(STORAGE_KEYS.addonSubmissions, submissions);
}

function getCurrentUser() {
  const currentUserId = localStorage.getItem(STORAGE_KEYS.currentUserId);
  if (!currentUserId) return null;
  return getUsers().find((user) => user.id === currentUserId) || null;
}

function setCurrentUser(userId) {
  if (!userId) {
    localStorage.removeItem(STORAGE_KEYS.currentUserId);
    return;
  }
  localStorage.setItem(STORAGE_KEYS.currentUserId, userId);
}

function normalizeCsv(value) {
  return (value || "")
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);
}

function ensureAccountSeedData() {
  const users = getUsers();
  if (users.length === 0) {
    const adminUser = {
      id: createLocalId("usr"),
      username: "admin",
      password: "admin123",
      role: ROLE_ADMIN,
      createdAt: Date.now(),
    };
    setUsers([adminUser]);
  }

  const submissions = getAddonSubmissions();
  if (submissions.length === 0) {
    setAddonSubmissions([
      {
        id: createLocalId("addon"),
        name: "PLACEHOLDER",
        description: "PLACEHOLDER DESCRIPTION",
        versions: ["1.0.0", "1.1.0"],
        dependencies: ["Vault", "PlaceholderAPI"],
        downloadUrl: "",
        repositoryUrl: "",
        uploaderId: null,
        uploaderName: "system",
        status: "approved",
        reviewNote: "Seed addon",
        reviewedBy: "system",
        reviewedAt: Date.now(),
        createdAt: Date.now(),
      },
    ]);
    return;
  }

  let changed = false;
  submissions.forEach((submission) => {
    const name = (submission.name || "").trim().toLowerCase();
    if (name.includes("starter") && name.includes("economy")) {
      submission.name = "PLACEHOLDER";
      submission.description = "PLACEHOLDER DESCRIPTION";
      changed = true;
    }
  });

  if (changed) {
    setAddonSubmissions(submissions);
  }
}

function createUser(username, password) {
  // TODO(backend): Move account creation to a server endpoint with proper password hashing.
  const trimmedUsername = (username || "").trim();
  const trimmedPassword = (password || "").trim();
  if (trimmedUsername.length < 3) {
    return { ok: false, message: "Username must be at least 3 characters." };
  }
  if (trimmedPassword.length < 4) {
    return { ok: false, message: "Password must be at least 4 characters." };
  }

  const users = getUsers();
  const exists = users.some((user) => user.username.toLowerCase() === trimmedUsername.toLowerCase());
  if (exists) {
    return { ok: false, message: "That username already exists." };
  }

  const user = {
    id: createLocalId("usr"),
    username: trimmedUsername,
    password: trimmedPassword,
    role: ROLE_USER,
    createdAt: Date.now(),
  };

  users.push(user);
  setUsers(users);
  return { ok: true, user };
}

function loginUser(username, password) {
  // TODO(backend): Replace local credential checks with server-issued sessions/tokens.
  const trimmedUsername = (username || "").trim().toLowerCase();
  const trimmedPassword = (password || "").trim();
  const user = getUsers().find(
    (candidate) => candidate.username.toLowerCase() === trimmedUsername && candidate.password === trimmedPassword,
  );

  if (!user) {
    return { ok: false, message: "Invalid username or password." };
  }

  return { ok: true, user };
}

function createAddonSubmission(user, payload) {
  // TODO(backend): Store uploads in a database/object storage and return canonical addon IDs.
  const submission = {
    id: createLocalId("addon"),
    name: (payload.name || "").trim(),
    description: (payload.description || "").trim(),
    versions: normalizeCsv(payload.versions),
    dependencies: normalizeCsv(payload.dependencies),
    downloadUrl: (payload.downloadUrl || "").trim(),
    repositoryUrl: (payload.repositoryUrl || "").trim(),
    uploaderId: user.id,
    uploaderName: user.username,
    status: "pending",
    reviewNote: "Pending review",
    reviewedBy: null,
    reviewedAt: null,
    createdAt: Date.now(),
  };

  if (!submission.name || !submission.description || !submission.downloadUrl) {
    return { ok: false, message: "Name, description, and download URL are required." };
  }

  if (submission.versions.length === 0) {
    submission.versions = ["Version placeholder 1"];
  }

  if (submission.dependencies.length === 0) {
    submission.dependencies = ["Dependency placeholder A", "Dependency placeholder B"];
  }

  const submissions = getAddonSubmissions();
  submissions.unshift(submission);
  setAddonSubmissions(submissions);
  return { ok: true, submission };
}

function reviewAddonSubmission(submissionId, action, adminUser) {
  const submissions = getAddonSubmissions();
  const nextStatus = action === "approve" ? "approved" : "rejected";
  const target = submissions.find((submission) => submission.id === submissionId);
  if (!target) return;
  target.status = nextStatus;
  target.reviewedBy = adminUser.username;
  target.reviewNote = nextStatus === "approved" ? "Approved by admin" : "Rejected by admin";
  target.reviewedAt = Date.now();
  setAddonSubmissions(submissions);
}

function matchesAddonQuery(submission, queryText) {
  if (!queryText) return true;
  const haystack = normalizeSearchText(
    `${submission.name} ${submission.description} ${(submission.dependencies || []).join(" ")} ${(submission.versions || []).join(" ")}`,
  );
  const tokens = normalizeSearchText(queryText).split(" ").filter(Boolean);
  return tokens.every((token) => haystack.includes(token));
}

function getVisibleSubmissions(currentUser) {
  return getAddonSubmissions().filter((submission) => {
    if (submission.status === "approved") return true;
    if (!currentUser) return false;
    return submission.uploaderId === currentUser.id || currentUser.role === ROLE_ADMIN;
  });
}

function renderAdminQueue(queueElement) {
  if (!queueElement) return;
  queueElement.innerHTML = "";

  const pending = getAddonSubmissions().filter((submission) => submission.status === "pending");
  if (pending.length === 0) {
    const empty = document.createElement("p");
    empty.className = "helper";
    empty.textContent = "No pending uploads.";
    queueElement.appendChild(empty);
    return;
  }

  pending.forEach((submission) => {
    const card = document.createElement("article");
    card.className = "moderation-item";

    const title = document.createElement("h3");
    title.className = "card-title";
    title.textContent = submission.name;

    const meta = document.createElement("p");
    meta.className = "small-muted";
    meta.textContent = `Uploaded by ${submission.uploaderName} on ${new Date(submission.createdAt).toLocaleDateString()}`;

    const description = document.createElement("p");
    description.className = "helper";
    description.textContent = submission.description;

    const actions = document.createElement("div");
    actions.className = "search-row";

    const approveButton = document.createElement("button");
    approveButton.type = "button";
    approveButton.className = "btn primary";
    approveButton.dataset.adminAction = "approve";
    approveButton.dataset.submissionId = submission.id;
    approveButton.textContent = "Approve";

    const rejectButton = document.createElement("button");
    rejectButton.type = "button";
    rejectButton.className = "btn";
    rejectButton.dataset.adminAction = "reject";
    rejectButton.dataset.submissionId = submission.id;
    rejectButton.textContent = "Reject";

    actions.appendChild(approveButton);
    actions.appendChild(rejectButton);

    card.appendChild(title);
    card.appendChild(meta);
    card.appendChild(description);
    card.appendChild(actions);
    queueElement.appendChild(card);
  });
}

function renderCommunityAddons(listElement, currentUser) {
  if (!listElement) return;
  listElement.innerHTML = "";

  const visible = getVisibleSubmissions(currentUser);
  if (visible.length === 0) {
    const empty = document.createElement("p");
    empty.className = "helper";
    empty.textContent = "No community addons available yet.";
    listElement.appendChild(empty);
    return;
  }

  visible.forEach((submission) => {
    const card = document.createElement("article");
    card.className = "community-addon-item";

    const title = document.createElement("h3");
    title.className = "card-title";
    title.textContent = submission.name;

    const description = document.createElement("p");
    description.className = "helper";
    description.textContent = submission.description;

    const meta = document.createElement("p");
    meta.className = "small-muted";
    meta.textContent = `Uploader: ${submission.uploaderName}`;

    const actions = document.createElement("div");
    actions.className = "search-row";

    const detailsLink = document.createElement("a");
    detailsLink.className = "btn";
    detailsLink.href = buildCommunityAddonDetailLink(submission.id);
    detailsLink.textContent = "Open details";
    actions.appendChild(detailsLink);

    if (submission.status === "approved") {
      const download = document.createElement("a");
      download.className = "btn primary";
      download.href = submission.downloadUrl;
      download.target = "_blank";
      download.rel = "noopener noreferrer";
      download.textContent = "Download";
      actions.appendChild(download);
    }

    card.appendChild(title);
    card.appendChild(description);
    card.appendChild(meta);
    card.appendChild(actions);
    listElement.appendChild(card);
  });
}

function setAddonResultState(container, message) {
  if (!container) return;
  container.innerHTML = "";
  const card = document.createElement("article");
  card.className = "panel addon-result-card";
  const text = document.createElement("p");
  text.className = "helper";
  text.textContent = message;
  card.appendChild(text);
  container.appendChild(card);
}

function renderAddonSearchResults(container, submissions) {
  if (!container) return;
  container.innerHTML = "";

  submissions.forEach((submission, index) => {
    const card = document.createElement("article");
    card.className = "panel addon-result-card fade-in";
    card.style.animationDelay = `${Math.min(index * 45, 320)}ms`;

    const title = document.createElement("h2");
    title.className = "card-title";
    title.textContent = submission.name;

    const desc = document.createElement("p");
    desc.className = "helper";
    desc.textContent = submission.description;

    const meta = document.createElement("p");
    meta.className = "small-muted";
    meta.textContent = `Uploaded by: ${submission.uploaderName}`;

    const actions = document.createElement("div");
    actions.className = "search-row";

    const detailLink = document.createElement("a");
    detailLink.className = "btn";
    detailLink.href = buildCommunityAddonDetailLink(submission.id);
    detailLink.textContent = "Open addon page";
    actions.appendChild(detailLink);

    if (submission.status === "approved") {
      const downloadLink = document.createElement("a");
      downloadLink.className = "btn primary";
      downloadLink.href = submission.downloadUrl;
      downloadLink.target = "_blank";
      downloadLink.rel = "noopener noreferrer";
      downloadLink.textContent = "Download";
      actions.appendChild(downloadLink);
    }

    card.appendChild(title);
    card.appendChild(desc);
    card.appendChild(meta);
    card.appendChild(actions);
    container.appendChild(card);
  });
}

function initLoginPage() {
  ensureAccountSeedData();

  const message = document.querySelector("[data-login-message]");
  const loginForm = document.querySelector("[data-login-form]");
  const registerForm = document.querySelector("[data-register-form]");
  const logoutButton = document.querySelector("[data-logout-button]");
  const adminSubdomainButton = document.querySelector("[data-admin-subdomain]");

  const loginUsername = document.querySelector("[data-login-username]");
  const loginPassword = document.querySelector("[data-login-password]");
  const registerUsername = document.querySelector("[data-register-username]");
  const registerPassword = document.querySelector("[data-register-password]");

  if (!message) return;

  function updateUi(statusMessage = "") {
    const currentUser = getCurrentUser();
    const isAdmin = currentUser?.role === ROLE_ADMIN;

    if (currentUser) {
      message.textContent = statusMessage || `Logged in as ${currentUser.username} (${currentUser.role}).`;
      logoutButton.hidden = false;
      adminSubdomainButton.hidden = !isAdmin;
    } else {
      message.textContent = statusMessage || "Sign in to upload and manage addons.";
      logoutButton.hidden = true;
      adminSubdomainButton.hidden = true;
    }
  }

  loginForm?.addEventListener("submit", (event) => {
    event.preventDefault();
    const result = loginUser(loginUsername?.value, loginPassword?.value);
    if (!result.ok) {
      updateUi(result.message);
      return;
    }
    setCurrentUser(result.user.id);
    loginForm.reset();
    updateUi("Login successful.");
  });

  registerForm?.addEventListener("submit", (event) => {
    event.preventDefault();
    const result = createUser(registerUsername?.value, registerPassword?.value);
    if (!result.ok) {
      updateUi(result.message);
      return;
    }
    setCurrentUser(result.user.id);
    registerForm.reset();
    updateUi("Account created and logged in.");
  });

  logoutButton?.addEventListener("click", () => {
    setCurrentUser(null);
    updateUi("Logged out.");
  });

  adminSubdomainButton?.addEventListener("click", (event) => {
    const currentUser = getCurrentUser();
    if (!currentUser || currentUser.role !== ROLE_ADMIN) {
      event.preventDefault();
      updateUi("Admin permission required.");
      return;
    }

    // TODO(backend): Mint a secure admin session token and validate role access on the admin subdomain.
  });

  updateUi();
}

function initAddonsSearch() {
  ensureAccountSeedData();

  const form = document.querySelector("[data-addon-search-form]");
  const input = document.querySelector("[data-addon-search-input]");
  const results = document.querySelector("[data-addon-results]");
  const empty = document.querySelector("[data-addon-empty]");
  const authMessage = document.querySelector("[data-auth-message]");
  const logoutButton = document.querySelector("[data-logout-button]");
  const loginLink = document.querySelector("[data-login-link]");
  const uploadShell = document.querySelector("[data-upload-shell]");
  const uploadForm = document.querySelector("[data-upload-form]");
  const adminShell = document.querySelector("[data-admin-shell]");
  const adminQueue = document.querySelector("[data-admin-queue]");
  const communityAddons = document.querySelector("[data-community-addons]");

  const uploadName = document.querySelector("[data-upload-name]");
  const uploadDescription = document.querySelector("[data-upload-description]");
  const uploadVersions = document.querySelector("[data-upload-versions]");
  const uploadDependencies = document.querySelector("[data-upload-dependencies]");
  const uploadDownloadUrl = document.querySelector("[data-upload-download-url]");
  const uploadRepoUrl = document.querySelector("[data-upload-repo-url]");

  const params = new URLSearchParams(window.location.search);
  const initialQuery = params.get("q") || "";

  function runSearch(rawQuery) {
    const query = (rawQuery || "").trim();
    const currentUser = getCurrentUser();
    const visible = getVisibleSubmissions(currentUser);
    const filtered = visible.filter((submission) => matchesAddonQuery(submission, query));

    if (filtered.length === 0) {
      if (query) {
        setAddonResultState(results, "No addons match this search.");
      } else if (results) {
        results.innerHTML = "";
      }
      if (empty) empty.hidden = !!query;
      return;
    }

    if (empty) empty.hidden = true;
    renderAddonSearchResults(results, filtered);
  }

  function updateUi(message = "") {
    const currentUser = getCurrentUser();
    const isAdmin = currentUser?.role === ROLE_ADMIN;

    if (authMessage) {
      authMessage.textContent = currentUser
        ? message || `Logged in as ${currentUser.username} (${currentUser.role}).`
        : message || "Sign in from the login page to upload plugins for review.";
    }

    if (logoutButton) logoutButton.hidden = !currentUser;
    if (loginLink) loginLink.hidden = !!currentUser;
    if (uploadShell) uploadShell.hidden = !currentUser;
    if (adminShell) adminShell.hidden = !isAdmin;

    renderAdminQueue(adminQueue);
    renderCommunityAddons(communityAddons, currentUser);
    runSearch(input?.value || "");
  }

  form?.addEventListener("submit", (event) => {
    event.preventDefault();
    const query = input?.value || "";
    const nextParams = new URLSearchParams(window.location.search);
    if (query.trim()) {
      nextParams.set("q", query.trim());
    } else {
      nextParams.delete("q");
    }
    const nextQuery = nextParams.toString();
    window.history.replaceState({}, "", nextQuery ? `${window.location.pathname}?${nextQuery}` : window.location.pathname);
    runSearch(query);
  });

  logoutButton?.addEventListener("click", () => {
    setCurrentUser(null);
    updateUi("Logged out.");
  });

  uploadForm?.addEventListener("submit", (event) => {
    event.preventDefault();
    const currentUser = getCurrentUser();
    if (!currentUser) {
      updateUi("Please login before uploading.");
      return;
    }

    const result = createAddonSubmission(currentUser, {
      name: uploadName?.value,
      description: uploadDescription?.value,
      versions: uploadVersions?.value,
      dependencies: uploadDependencies?.value,
      downloadUrl: uploadDownloadUrl?.value,
      repositoryUrl: uploadRepoUrl?.value,
    });

    if (!result.ok) {
      updateUi(result.message);
      return;
    }

    uploadForm.reset();
    updateUi("Addon submitted and waiting for review.");
  });

  adminQueue?.addEventListener("click", (event) => {
    const button = event.target.closest("[data-admin-action]");
    if (!button) return;
    const currentUser = getCurrentUser();
    if (!currentUser || currentUser.role !== ROLE_ADMIN) {
      updateUi("Admin permission required.");
      return;
    }

    const action = button.dataset.adminAction;
    const submissionId = button.dataset.submissionId;
    if (!action || !submissionId) return;

    // TODO(backend): Persist moderation decisions server-side and enforce role checks outside the browser.
    reviewAddonSubmission(submissionId, action, currentUser);
    updateUi(`Submission ${action === "approve" ? "approved" : "rejected"}.`);
  });

  window.addEventListener("storage", (event) => {
    if (
      event.key === STORAGE_KEYS.users ||
      event.key === STORAGE_KEYS.currentUserId ||
      event.key === STORAGE_KEYS.addonSubmissions
    ) {
      updateUi();
    }
  });

  if (input && initialQuery) {
    input.value = initialQuery;
  }

  updateUi();
}

function fillAddonList(listElement, values, emptyMessage) {
  if (!listElement) return;
  listElement.innerHTML = "";

  const entries = Array.isArray(values) && values.length > 0 ? values : [emptyMessage];
  entries.forEach((entry) => {
    const item = document.createElement("li");
    item.textContent = entry;
    listElement.appendChild(item);
  });
}

function initAddonDetail() {
  const params = new URLSearchParams(window.location.search);
  const source = (params.get("source") || "").trim();
  const submissionId = (params.get("id") || "").trim();
  const title = document.querySelector("[data-addon-title]");
  const description = document.querySelector("[data-addon-description]");
  const repoLink = document.querySelector("[data-addon-repo-link]");
  const downloadLink = document.querySelector("[data-addon-download-link]");
  const versionsList = document.querySelector("[data-addon-versions]");
  const dependenciesList = document.querySelector("[data-addon-dependencies]");

  if (source === "community" && submissionId) {
    ensureAccountSeedData();
    const currentUser = getCurrentUser();
    const submission = getAddonSubmissions().find((item) => item.id === submissionId);

    if (!submission) {
      if (title) title.textContent = "Community addon not found";
      if (description) description.textContent = "This addon may have been removed.";
      fillAddonList(versionsList, ["Version placeholder 1"], "No versions available.");
      fillAddonList(dependenciesList, ["Dependency placeholder A"], "No dependencies found.");
      if (repoLink) {
        repoLink.href = "addons.html";
        repoLink.textContent = "Back to addons";
      }
      if (downloadLink) {
        downloadLink.hidden = true;
      }
      return;
    }

    const canView =
      submission.status === "approved" ||
      (currentUser && (currentUser.id === submission.uploaderId || currentUser.role === ROLE_ADMIN));

    if (!canView) {
      if (title) title.textContent = submission.name;
      if (description) description.textContent = "This addon is pending review and not publicly visible yet.";
      fillAddonList(versionsList, [], "Versions are hidden until approval.");
      fillAddonList(dependenciesList, [], "Dependencies are hidden until approval.");
      if (repoLink) {
        repoLink.href = "addons.html";
        repoLink.textContent = "Back to addons";
      }
      if (downloadLink) {
        downloadLink.hidden = true;
      }
      return;
    }

    if (title) title.textContent = submission.name;
    if (description) description.textContent = submission.description;

    fillAddonList(versionsList, submission.versions || [], "No versions available.");
    fillAddonList(dependenciesList, submission.dependencies || [], "No dependencies found.");

    if (repoLink) {
      repoLink.href = submission.repositoryUrl || submission.downloadUrl || "addons.html";
      repoLink.textContent = submission.repositoryUrl ? "Open source page" : "Open source";
    }

    if (downloadLink) {
      if (submission.status === "approved") {
        downloadLink.href = submission.downloadUrl;
        downloadLink.hidden = false;
      } else {
        downloadLink.hidden = true;
      }
    }
    return;
  }

  if (title) title.textContent = "Addon not selected";
  if (description) description.textContent = "Open this page from an addon card on the addons page.";
  fillAddonList(versionsList, [], "No versions available.");
  fillAddonList(dependenciesList, ["Dependency placeholder A", "Dependency placeholder B"], "No dependencies found.");
  if (repoLink) {
    repoLink.href = "addons.html";
    repoLink.textContent = "Back to addons";
  }
  if (downloadLink) {
    downloadLink.hidden = true;
  }
}

function boot() {
  ensureTheme();
  const activeTheme = document.documentElement.dataset.theme;
  updateThemeToggleLabels(activeTheme);
  syncThemeNavigationLinks(activeTheme);

  window.addEventListener("storage", (event) => {
    if (event.key !== STORAGE_KEYS.theme || !event.newValue) return;
    applyTheme(event.newValue);
    updateThemeToggleLabels(event.newValue);
    syncThemeNavigationLinks(event.newValue);
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

  if (document.body.dataset.page === "addons-search") {
    initAddonsSearch();
  }

  if (document.body.dataset.page === "login") {
    initLoginPage();
  }

  if (document.body.dataset.page === "addon-detail") {
    initAddonDetail();
  }

  document.querySelectorAll("[data-theme-toggle]").forEach((button) => {
    button.addEventListener("click", toggleTheme);
  });
}

window.addEventListener("DOMContentLoaded", boot);
