# Manifest Schema

**CAS Version:** 0.1
**Status:** Stable

---

## Overview

Every CAS Shell declares its identity through a YAML frontmatter block at the top of `CONTEXT.md`. This block is the machine-readable manifest — the first thing a validator, agent, or tool reads to understand what kind of Shell it is dealing with.

The rest of `CONTEXT.md` is human-readable prose and tables. The frontmatter is the structured contract.

---

## Format

The manifest is a YAML frontmatter block delimited by `---` at the very top of `CONTEXT.md`, before any markdown content.

```yaml
---
cas_version: "0.1.0"
type: personal
owner: "Jane Smith"
domain: "Freelance copywriting"
created: "2026-01-01"
updated: "2026-06-01"
---
```

---

## Fields

### Required — all shell types

| Field | Type | Description |
|---|---|---|
| `cas_version` | string | CAS version this shell conforms to. Semantic version. Example: `"0.1.0"` |
| `type` | enum | Shell type. Must be one of: `personal`, `business`, `commercial` |
| `owner` | string | Name or organization of the shell operator |
| `domain` | string | Field, industry, or purpose this shell covers |
| `created` | date | Date the shell was created. ISO 8601 format: `YYYY-MM-DD` |
| `updated` | date | Date the shell was last meaningfully updated. ISO 8601 format: `YYYY-MM-DD` |

### Required — commercial shells only

| Field | Type | Description |
|---|---|---|
| `shell_name` | string | Name of the commercial shell product |
| `shell_version` | string | Semantic version of the shell. Example: `"1.0.0"` |
| `shell_author` | string | Name or organization of the shell author |

### Optional — all shell types

| Field | Type | Description |
|---|---|---|
| `language` | string | Primary language of the shell content. BCP 47 tag. Defaults to `en` |
| `description` | string | One or two sentence summary of what this shell is for |

---

## Examples

### Personal shell

```yaml
---
cas_version: "0.1.0"
type: personal
owner: "Jane Smith"
domain: "Freelance copywriting — B2B SaaS"
created: "2026-03-01"
updated: "2026-06-01"
---
```

### Business shell

```yaml
---
cas_version: "0.1.0"
type: business
owner: "Riverstone Coffee Roasters LLC"
domain: "Small-batch specialty coffee roastery — wholesale and retail"
created: "2026-05-10"
updated: "2026-05-10"
---
```

### Commercial shell

```yaml
---
cas_version: "0.1.0"
type: commercial
owner: "Acme Marketing Co."
domain: "B2B content marketing"
created: "2026-06-01"
updated: "2026-06-01"
shell_name: "AI Marketing Engine"
shell_version: "1.0.0"
shell_author: "Context Arcana LLC"
---
```

---

## Validation rules

A manifest is **valid** when:

- The frontmatter block is present and correctly delimited (`---`)
- All required fields for the shell type are present and non-empty
- `type` is one of the three permitted values
- `cas_version`, `shell_version` follow semantic versioning (`MAJOR.MINOR.PATCH`)
- `created` and `updated` are valid ISO 8601 dates (`YYYY-MM-DD`)
- `shell_name`, `shell_version`, and `shell_author` are all present when `type` is `commercial`

A manifest produces a **warning** when:

- `updated` is more than 180 days before the current date (shell may be stale)
- `language` is absent (defaults to `en` but explicit is preferred)

A manifest is **invalid** when:

- The frontmatter block is missing entirely
- Any required field is absent or empty
- `type` is not a recognized value
- A date field is not a valid ISO 8601 date
- `type` is `commercial` but any of the three commercial fields are missing

---

## Relationship to CONTEXT.md

The frontmatter manifests the shell's identity. The markdown body of `CONTEXT.md` provides the human-readable detail: model access policy, context map, interaction preferences, and secrets policy. Both are part of the same file; neither replaces the other.

Agents and validators read the frontmatter first. Humans read the body first.

---

## License

This document is part of the Context Architecture System™ framework documentation, © 2026 Context Arcana LLC, licensed under CC BY 4.0.

"Context Architecture System™" and "Context Arcana™" are trademarks of Context Arcana LLC and are not included in the CC BY grant.
