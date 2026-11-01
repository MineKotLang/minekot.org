# MineKot website

Visit the site at [minekot.org](https://minekot.org).


## Contributing translations

We welcome translation fixes and new languages. To contribute:

1. Fork the [minekot.org repository](https://github.com/MineKotLang/minekot.org) on GitHub.
2. Clone your fork and create a branch for your change:

   ```bash
   git clone https://github.com/<your-username>/minekot.org.git
   cd minekot.org
   git checkout -b translations/<language-code>
   ```

3. Install dependencies with `pnpm install`.
4. Edit the locale file in `src/config/` and keep all message keys from `src/config/ui-messages.json`.
5. Start the development server with `pnpm dev` and check your changes in the language selector.
6. Run the tests with `pnpm test`.
7. Commit your changes, push the branch to your fork, and open a pull request against `master`.

### Adding a new language

Adding a locale requires a small code change in addition to the new JSON file:

1. Copy `src/config/ui-messages.json` to `src/config/ui-messages.<language-code>.json` and translate the values.
2. Import the new file and add it to `MESSAGES` in `src/hooks/useLanguage.tsx`.
3. Add the language code to the `Language` type in `src/hooks/useLanguage.tsx`.
4. Add the language label and code to `LANGUAGE_LABELS` and `LANGUAGE_CODES` in `src/components/LanguageSelector.tsx`.
5. Run `pnpm test` and `pnpm build`, then open a pull request.

If you find an incorrect translation, open an issue or a pull request with the corrected text and the reason for the change.
