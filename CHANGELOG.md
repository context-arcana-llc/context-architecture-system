# Changelog

All notable changes to the Context Architecture System™ Starter Kit are documented here.

Format follows [Keep a Changelog](https://keepachangelog.com/en/1.1.0/).
Versioning follows [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

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
