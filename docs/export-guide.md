# Export Guide

**CAS Version:** 0.1
**CLI Version:** 0.5.0+

---

## Overview

`cas export` compiles your CAS shell into a single formatted document ready to paste into any AI tool. One command produces a context-loaded prompt without manually copying files.

```bash
cas export <adapter> [path]
```

The output is written to `exports/<adapter>.md` inside your shell. If the `exports/` directory does not exist, it is created. The file is regenerated every time you run the command — it is a build artifact, not a source file. Add `exports/` to your `.gitignore`.

---

## Adapters

### `claude`

Produces a system prompt formatted for Claude. Paste it into a Claude Project's **Custom Instructions** field, or use it as the `system` parameter in the API.

**Token budget:** 150,000
**Output:** `exports/claude.md`

**How to use:**
1. Run `cas export claude`
2. Open Claude and go to your Project settings
3. Paste the contents of `exports/claude.md` into the Project Instructions field
4. Start a new conversation — Claude now has your full context loaded

### `gpt`

Produces a compact context document for GPT-4. Suitable for the system prompt in the API or the Instructions field in a Custom GPT.

**Token budget:** 50,000
**Output:** `exports/gpt.md`

**How to use:**
1. Run `cas export gpt`
2. In ChatGPT, open **Customize ChatGPT** or your Custom GPT editor
3. Paste into the Instructions field
4. For API use, pass the content as the `system` message

### `gemini`

Produces a system prompt for Gemini. Compatible with Gemini Advanced system instructions and the Gemini API.

**Token budget:** 200,000
**Output:** `exports/gemini.md`

**How to use:**
1. Run `cas export gemini`
2. In Google AI Studio, paste into the System Instructions field
3. For the Gemini API, pass the content as the `system_instruction`

### `cursor`

Produces a compact rules file for Cursor. The output is designed to be saved as `.cursorrules` at the root of your shell repository so Cursor loads it automatically.

**Token budget:** 10,000
**Output:** `exports/cursor.md`

**How to use:**
1. Run `cas export cursor`
2. Copy `exports/cursor.md` to `.cursorrules` at your shell root
3. Cursor reads `.cursorrules` automatically on project open

> **Note:** Keep `.cursorrules` concise. Cursor works best with focused rules, not full context dumps. The cursor adapter is intentionally conservative with the token budget.

### `generic`

Produces a complete context document with no tool-specific formatting. Use this for any tool not covered by the named adapters, or as the base for a custom format.

**Token budget:** 100,000
**Output:** `exports/generic.md`

---

## Token budgets

Each adapter has a budget that controls how much context is included. When the compiled content would exceed the budget, lower-priority sections are dropped.

| Adapter | Budget | Reason |
|---|---|---|
| `claude` | 150,000 tokens | Claude Projects support large instruction sets |
| `gpt` | 50,000 tokens | Conservative — Custom GPT instructions have practical limits |
| `gemini` | 200,000 tokens | Gemini 1.5+ has a large context window |
| `cursor` | 10,000 tokens | Cursor rules should be concise and focused |
| `generic` | 100,000 tokens | Reasonable default for unknown targets |

Token count is estimated as `characters ÷ 4`. This is approximate — actual token counts vary by model and content.

### Section priority

When content is dropped to meet a budget, sections are dropped in reverse priority order:

| Priority | Section |
|---|---|
| Highest | `shell/` framework (commercial shells) |
| 1 | `01_identity` |
| 2 | `02_operations` |
| 3 | `03_offers` |
| 4 | `06_workflows` |
| 5 | `07_decisions` |
| 6 | `08_prompts` |
| 7 | `04_clients` |
| 8 | `05_assets` |
| 9 | `00_index` |
| 10 | `09_outputs` |
| Lowest | `99_archive` |

Identity is always the first context loaded. Archive is the first to be dropped.

---

## Commercial shells

For commercial shells, the `shell/` layer is always exported first and marked as authoritative. The adapter preamble instructs the model that shell framework constraints cannot be overridden by the operator's context.

---

## Keeping exports current

Exports are point-in-time snapshots. When you update context files, regenerate the export:

```bash
cas export claude
```

Consider adding a regeneration step to your workflow when significant context changes are committed. The CI workflow in `.github/workflows/validate.yml` demonstrates running all adapters on push.

---

## License

This document is part of the Context Architecture System™ framework documentation, © 2026 Context Arcana LLC, licensed under CC BY 4.0.
