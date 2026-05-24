# Changelog

All notable changes to the Context Architecture System™ Starter Kit are documented here.

Format follows [Keep a Changelog](https://keepachangelog.com/en/1.1.0/).
Versioning follows [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

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
