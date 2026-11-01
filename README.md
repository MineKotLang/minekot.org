<p align="center">
  <img alt="header" src="https://shieldcn.dev/header/transparent.svg?title=minekot.org&subtitle=Documentation+and+info+site+for+MineKot&logo=false&mode=dark&font=jetbrains-mono" />
</p>

<p align="center">
  <a href="https://www.typescriptlang.org/"><img alt="TypeScript" src="https://shieldcn.dev/badge/TYPESCRIPT-v7-3178C6.svg?font=jetbrains-mono&split=true&logo=typescript&logoColor=ffffff&color=3178C6&valueColor=ffffff&labelTextColor=ffffff" /></a>
  <a href="https://react.dev/"><img alt="React" src="https://shieldcn.dev/badge/REACT-v19-222222.svg?font=jetbrains-mono&split=true&logo=react&logoColor=61DAFB&color=222222&valueColor=61DAFB&labelTextColor=ffffff" /></a>
  <a href="https://pnpm.io/"><img alt="pnpm" src="https://shieldcn.dev/badge/PNPM-v10-F69220.svg?font=jetbrains-mono&split=true&logo=pnpm&logoColor=ffffff&color=F69220&valueColor=ffffff&labelTextColor=ffffff" /></a>
  <a href="https://vitest.dev/"><img alt="Vitest" src="https://shieldcn.dev/badge/VITEST-v4-6E9F18.svg?font=jetbrains-mono&split=true&logo=vitest&logoColor=ffffff&color=6E9F18&valueColor=ffffff&labelTextColor=ffffff" /></a>
</p>

<p align="center">
  <a href="https://www.apache.org/licenses/LICENSE-2.0"><img alt="License" src="https://shieldcn.dev/badge/LICENSE-Apache--2.0.svg?size=xs&font=jetbrains-mono&split=true&logo=ri%3AFaBalanceScale&color=007EC6&valueColor=ffffff&labelTextColor=ffffff" /></a>
</p>

### Overview

[minekot.org](https://minekot.org) is the official website for MineKot, a Minecraft plugin. It serves as the documentation hub, changelog, community page viewer.

---

### Architecture

```
src/
├─ pages/        route-level views (Docs, Home, Changelog, ...)
├─ components/   shared UI (Header, Footer, MarkdownPage, ...)
├─ hooks/        useLanguage locale resolution and switching
├─ config/       JSON data files (navigation, docs, i18n messages)
└─ styles/       global CSS and per-component stylesheets
```

---

### Contributing Translations

We welcome translation fixes and new languages. To contribute:

1. Fork this repository on GitHub.
2. Clone your fork and create a branch for your change:

   ```
   git clone https://github.com/<your-username>/minekot.org.git
   cd minekot.org
   git checkout -b translations/<language-code>
   ```

3. Install dependencies with `pnpm install`.
4. Edit the locale file in `src/config/` and keep all message keys from `src/config/ui-messages.json`.
5. Start the development server with `pnpm dev` and check your changes in the language selector.
6. Run the tests with `pnpm test`.
7. Commit your changes, push the branch to your fork, and open a pull request against `master`.

#### Adding a New Language

Adding a locale requires a small code change in addition to the new JSON file:

1. Copy `src/config/ui-messages.json` to `src/config/ui-messages.<language-code>.json` and translate the values.
2. Import the new file and add it to `MESSAGES` in `src/hooks/useLanguage.tsx`.
3. Add the language code to the `Language` type in `src/hooks/useLanguage.tsx`.
4. Add the language label and code to `LANGUAGE_LABELS` and `LANGUAGE_CODES` in `src/components/LanguageSelector.tsx`.
5. Run `pnpm test` and `pnpm build`, then open a pull request.

If you find an incorrect translation, open an issue or a pull request with the corrected text and the reason for the change.

*Language code means nl, de, en, ...*

---

### License

Distributed under the [Apache-2.0](LICENSE) license.

---

<p align="center">
  <a href="https://github.com/MineKotLang/minekot.org/graphs/contributors"><img alt="contributors" src="https://shieldcn.dev/contributors/MineKotLang/minekot.org.svg?preset=transparent&size=40&names=true&mode=dark&font=jetbrains-mono" /></a>
</p>