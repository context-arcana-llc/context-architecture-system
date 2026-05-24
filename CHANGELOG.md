# Changelog

All notable changes to the Context Architecture System™ Starter Kit are documented here.

Format follows [Keep a Changelog](https://keepachangelog.com/en/1.1.0/).
Versioning follows [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

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
