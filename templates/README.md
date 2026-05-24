# Templates

Blank templates for new context entries. Copy a template into the appropriate `context/` subfolder, rename it descriptively, and fill it in.

---

## Available templates

| Template | Use for | Belongs in |
|---|---|---|
| `decision-record.md` | Documenting a significant choice and the reasoning behind it | `context/07_decisions/` |
| `account-inventory.md` | Tracking which accounts exist and who owns them (no credentials) | `context/02_operations/` |
| `prompt-card.md` | Capturing a working prompt with usage notes and example output | `context/08_prompts/` |
| `context-change-log.md` | Running log of significant changes to the context system | Repo root or `context/00_index/` |

---

## How to use a template

1. Copy the template file into the right `context/` subfolder
2. Rename it descriptively (e.g., `decision-record.md` → `2026-05_pricing-tier-change.md`)
3. Replace the placeholders in `[brackets]` with your content
4. Commit when the file is in a useful first state

---

## Adapting templates

Templates are starting points, not constraints. Edit any template to fit how you actually work. If your version improves on the original, consider proposing the change back upstream.
