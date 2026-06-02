# Changelog

All notable changes to the Context Architecture System™ Starter Kit are documented here.

Format follows [Keep a Changelog](https://keepachangelog.com/en/1.1.0/).
Versioning follows [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [0.6.2] — 2026-06-02

### Added

- `templates/shell-license.md` — ready-to-use commercial shell license template. Single-user, non-transferable grant. Client owns `context/` unconditionally. Restricts redistribution of `shell/` contents. 30-day cure period on termination. Warranty disclaimed. Replace [BRACKETED] placeholders and save as `SHELL-LICENSE.md` in each commercial shell repo.
- `spec/commercial-license.md` — defines the two-layer licensing model (CAS open standard + commercial shell license), client rights and restrictions, attribution rules, team licensing guidance, and update policy notes.

### Changed

- `spec/commercial-shell.md` — added Licensing section referencing the new template and spec.

---

## [0.6.1] — 2026-06-02

### Changed

- All five export adapters now open with self-guiding content in two parts: human setup instructions specific to each tool (which field to use, which button to click, copy commands for Cursor), followed by model activation instructions that tell the AI to confirm context is loaded, list available sections, and ask the user what they want to work on. Exports are now usable without reading any external documentation.

---

## [0.6.0] — 2026-06-02

### Added

- `cas export <adapter> [path]` — compiles a CAS shell into a single formatted document for a specific AI tool. Output is written to `exports/<adapter>.md` inside the shell.
- `cli/src/adapters/claude.js` — Claude adapter, 150,000 token budget. Formatted for Claude Project Instructions or API system prompt.
- `cli/src/adapters/gpt.js` — GPT adapter, 50,000 token budget. Formatted for Custom GPT instructions or API system message.
- `cli/src/adapters/gemini.js` — Gemini adapter, 200,000 token budget. Formatted for Google AI Studio system instructions or Gemini API.
- `cli/src/adapters/cursor.js` — Cursor adapter, 10,000 token budget. Produces `.cursorrules`-compatible output.
- `cli/src/adapters/generic.js` — Generic adapter, 100,000 token budget. Works with any tool.
- `cli/src/adapters/base.js` — Shared context loader. Reads all `context/` sections in priority order and loads `shell/` layer for commercial shells.
- Context condensation — sections are loaded in priority order (`01_identity` first, `99_archive` last) and dropped when the adapter's token budget is exceeded.
- `docs/export-guide.md` — full reference for `cas export`, all adapters, token budgets, and section priority.
- `docs/portability-guide.md` — explains the portability promise, how to switch between AI tools, and what falls outside CAS portability guarantees.

### Changed

- `cli/bin/cas.js` — updated entry point to route `cas export` command.
- `.github/workflows/validate.yml` — CI now runs all five export adapters against the Riverstone Coffee example on every push.
- `.gitignore` — added `exports/` (generated files) and `node_modules/`.

---

## [0.5.0] — 2026-06-01

### Added

- `cli/` — Node.js CLI package (`@context-arcana/cas`). Implements `cas validate [path]` with colored PASS/WARN/FAIL output and a non-zero exit code on failure, making it suitable for CI use.
- `cli/src/checks/manifest.js` — validates YAML frontmatter presence, required fields, type enum, semver format, ISO 8601 dates, staleness, and commercial shell fields.
- `cli/src/checks/files.js` — validates required and recommended files and directories per shell type, including all eleven standard `context/` subdirectories and commercial `shell/` requirements.
- `cli/src/reporter.js` — colored terminal reporter with summary line.
- `cli/test/` — five fixture shells covering valid personal, valid commercial, missing `context/` directory, invalid manifest type, and missing frontmatter. All fixtures pass their expected outcomes.
- `.github/workflows/validate.yml` — CI workflow that runs fixture tests and validates the Riverstone Coffee example on every push and PR.

### Changed

- `examples/riverstone-coffee/` — updated to pass `cas validate` with zero warnings. Added `README.md`, `SETUP_PROMPT.md`, `AGENTS.md`, `.githooks/` stubs, four missing `context/` subdirectories, and the missing `2025-09_direct-trade-shift.md` decision record. Added `language: en` to frontmatter.

---

## [0.4.0] — 2026-06-01

### Added

- `spec/shell-body.md` — formal Shell/Body Specification. Defines the three shell types (personal, business, commercial), their directory structures, the `shell/` author layer introduced for commercial shells, shell declaration fields in `CONTEXT.md`, and the loose Body definition (any tool that reads plain text files).
- `spec/manifest-schema.md` — Manifest Schema. Defines YAML frontmatter as the machine-readable manifest in `CONTEXT.md`, with required fields for all shell types and additional required fields for commercial shells. Includes validation rules (FAIL / WARN) ready for the Week 2 validator.
- `spec/required-files.md` — Required File Specification. Defines which files and directories must be present in a valid CAS Shell, which produce warnings if absent, and which are optional. Includes explicit validation checklists for personal, business, and commercial shells.
- `spec/commercial-shell.md` — Commercial Shell Format. Defines the full `shell/` directory structure, required content and sections for `shell/README.md`, `shell/instructions.md`, and `shell/constraints.md`, conventions for `shell/knowledge/` and `shell/prompts/`, installation steps for clients, and semantic versioning rules for shell releases.

### Changed

- `CONTEXT.md` — updated template to include YAML frontmatter conforming to the Manifest Schema.
- `examples/riverstone-coffee/CONTEXT.md` — updated to conform to the Manifest Schema.
- `README.md` — corrected content license from CC BY-SA 4.0 to CC BY 4.0.
- `LICENSING` — corrected `LICENSE-CODE` reference to `LICENSE`.
- `PRINCIPLES.md` — corrected license reference from CC BY-SA 4.0 to CC BY 4.0 and updated `LICENSE-DOCS.md` link to `LICENSE-CONTENT`.
- `AGENTS.md` — updated writing style note to reflect that YAML frontmatter is now standard in `CONTEXT.md`.

---

## [0.3.0] — 2026-05-24

### Added

- `PRINCIPLES.md` — the ten principles that govern the Context Architecture System. This is the first canonical, citable publication of the framework's principles. References by number ("CAS Principle 5") are stable within v0.x across patch and minor releases. The website's three high-level commitments (data ownership, replaceability, LLM-agnostic) map to subsets of these ten.

### Changed

- `README.md` now points to `PRINCIPLES.md` prominently near the top as the recommended first read.

---

## [0.2.0] — 2026-05-24

### Added

- `examples/riverstone-coffee/` — a fully populated worked example of CAS in use, modeled on a fictional small-batch coffee roastery. Demonstrates `CONTEXT.md`, master index, brand voice, founding story, account inventory, retail and wholesale offers, multi-step workflow, decision record, and prompt card. Cross-references between files show how a populated context hangs together.
- `examples/README.md` — explains what the example is, how to read it, and how to delete the folder when starting fresh.

### Changed

- `README.md` Quick Start now points to the examples folder as the recommended first stop for new users.
- `INSTALL.md` Path 1 includes browsing the example as an optional second step and notes when to delete it.

---

## [0.1.1] — 2026-05-24

### Fixed

- **Critical:** Secret-scanning hooks silently skipped every text file. The `is_binary()` check in `.githooks/pre-commit` used `$'\x00'` to detect NUL bytes, but bash strings cannot contain NUL bytes — the expression expanded to an empty string, so `grep -q ''` matched every non-empty file and the loop treated every text file as binary. The scanner printed its green success message but never actually scanned anything. Replaced with `grep -I`'s built-in binary detection. **Anyone using v0.1.0 should upgrade immediately.**
- Both hooks now strip trailing carriage returns from filenames returned by `git diff` on Windows (`tr -d '\r'`). Defensive fix; the critical bug above had masked this.

---

## [0.1.0] — 2026-05-24

### Added

- `CONTEXT.md` — the canonical machine-readable context file for any AI model or agent
- `AGENTS.md` — agent-specific permissions extending `CONTEXT.md`
- `SETUP_PROMPT.md` — one-paste activation prompt for any AI assistant
- `INSTALL.md` — two-path install guide (no-Git path and full Git path)
- `setup.sh` and `setup.ps1` — one-command hook installation for macOS/Linux and Windows
- `context/` folder structure (`00_index` through `99_archive`) with folder READMEs and `.gitkeep` files
- `templates/` — decision record, account inventory, prompt card, context change log, plus a `templates/README.md` overview
- `.githooks/pre-commit` and `.githooks/pre-push` — secret/PII scanners
- `.gitignore` and `.gitattributes`
- `LICENSE` (Apache 2.0) and `LICENSE-DOCS.md` (CC BY-SA 4.0)
