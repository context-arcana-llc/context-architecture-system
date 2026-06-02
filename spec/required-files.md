# Required File Specification

**CAS Version:** 0.1
**Status:** Stable

---

## Overview

This document defines which files and directories must be present in a valid CAS Shell, which are recommended, and which are optional. These rules are the basis for folder and file checks performed by `cas validate`.

Three result levels apply:

- **FAIL** — the shell is invalid; the condition must be resolved
- **WARN** — the shell is valid but incomplete or non-standard; the condition should be addressed
- **PASS** — the condition is satisfied

---

## All shell types

### Required (FAIL if absent)

| Path | Description |
|---|---|
| `CONTEXT.md` | Shell manifest and context summary. Must contain valid YAML frontmatter. See [Manifest Schema](manifest-schema.md). |
| `context/` | The operator's work area. Must be a directory. |

### Recommended (WARN if absent)

| Path | Description |
|---|---|
| `README.md` | Human-readable overview of the shell and how to use it |
| `SETUP_PROMPT.md` | Activation prompt for pasting into an AI assistant |
| `AGENTS.md` | Permissions and instructions specific to coding and automation agents |
| `.githooks/pre-commit` | Secret scanner — blocks credentials from being committed |
| `.githooks/pre-push` | Secret scanner — blocks credentials from being pushed |

### Optional

| Path | Description |
|---|---|
| `PRINCIPLES.md` | CAS framework principles (included in the starter kit) |
| `CHANGELOG.md` | Human-readable log of meaningful context changes |
| `INSTALL.md` | Installation guide, especially for non-technical users |
| `NOTICE` | Attribution and third-party notices |
| `LICENSE` | Code license (Apache 2.0 recommended) |
| `LICENSE-CONTENT` | Content license (CC BY 4.0 recommended) |
| `LICENSING` | Human-readable summary of the dual-license structure |
| `VERSION` | Plain-text file containing the shell's current version |
| `templates/` | Blank templates for common context file types |
| `setup.sh` | Shell script to install git hooks (macOS / Linux) |
| `setup.ps1` | PowerShell script to install git hooks (Windows) |

---

## context/ directory

The `context/` directory is the operator's work area. Its contents are not validated beyond presence — operators organize their work however fits their needs. The following numbered subdirectory structure is the CAS standard layout and is used by the starter kit.

### Standard subdirectories (WARN if absent)

| Path | Purpose |
|---|---|
| `context/00_index/` | Master index of what is in the context system |
| `context/01_identity/` | Brand, voice, mission, founding story |
| `context/02_operations/` | How the entity operates — processes, tools, accounts |
| `context/03_offers/` | Products, services, pricing, positioning |
| `context/04_clients/` | Client records, relationships, history |
| `context/05_assets/` | Reusable copy, templates, media references |
| `context/06_workflows/` | Step-by-step processes and SOPs |
| `context/07_decisions/` | Decision records and rationale |
| `context/08_prompts/` | Working prompts and calibrated instructions |
| `context/09_outputs/` | Notable AI outputs worth keeping |
| `context/99_archive/` | Retired content kept for reference |

A shell with none of these subdirectories passes validation but produces a warning: the context is empty.

---

## Commercial shells — additional requirements

Commercial shells require a `shell/` directory alongside `context/`. The following rules apply in addition to all rules above.

### Required (FAIL if absent)

| Path | Description |
|---|---|
| `shell/` | Author's framework layer. Must be a directory. |
| `shell/README.md` | Describes what the shell does and how to install and use it |
| `shell/instructions.md` | How the model or agent should behave when operating this shell |
| `shell/constraints.md` | What the model or agent must not do |

### Recommended (WARN if absent)

| Path | Description |
|---|---|
| `shell/knowledge/` | Domain knowledge provided by the shell author |
| `shell/prompts/` | Pre-built prompts and templates provided by the shell author |

The full structure and content requirements for `shell/` are defined in the [Commercial Shell Specification](commercial-shell.md).

---

## File content rules

These rules apply to any file present in the shell, regardless of type.

| Rule | Level |
|---|---|
| No file may contain a secret, credential, token, or identity-grade PII | FAIL |
| `CONTEXT.md` frontmatter must be valid YAML | FAIL |
| All required frontmatter fields must be present and non-empty | FAIL |

Content validation rules for `CONTEXT.md` frontmatter are defined in full in the [Manifest Schema](manifest-schema.md).

---

## Summary — validation checklist

### Personal and business shells

```
FAIL if missing:   CONTEXT.md, context/
WARN if missing:   README.md, SETUP_PROMPT.md, AGENTS.md,
                   .githooks/pre-commit, .githooks/pre-push,
                   any standard context/ subdirectory
```

### Commercial shells

```
FAIL if missing:   CONTEXT.md, context/, shell/,
                   shell/README.md, shell/instructions.md, shell/constraints.md
WARN if missing:   README.md, SETUP_PROMPT.md, AGENTS.md,
                   .githooks/pre-commit, .githooks/pre-push,
                   shell/knowledge/, shell/prompts/,
                   any standard context/ subdirectory
```

---

## License

This document is part of the Context Architecture System™ framework documentation, © 2026 Context Arcana LLC, licensed under CC BY 4.0.

"Context Architecture System™" and "Context Arcana™" are trademarks of Context Arcana LLC and are not included in the CC BY grant.
