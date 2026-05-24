# CONTEXT.md

> This file is the machine-readable context summary for this repository.
> Read by: AI models, coding agents, workflow tools, retrieval systems.
> Updated by: the repository owner.
> Last updated: 2026-05-10

---

## About this context

**Owner:** Riverstone Coffee Roasters LLC
**Type:** Business
**Domain:** Small-batch specialty coffee roastery — wholesale (cafes, restaurants) and retail (subscription, farmer's market)
**CAS version:** 0.1.1

Riverstone Coffee Roasters is a small-batch specialty coffee roastery founded in 2023, operating out of a renovated mill in Hollingford. We source single-origin green coffee through direct-trade relationships and roast in 5kg batches (upgrading to 12kg in June 2026). Approximately 70% of revenue is wholesale to regional cafes and restaurants; 30% is retail through a subscription program and a Saturday farmer's market booth. Two full-time employees plus the founder.

---

## Model access policy

| Action | Permitted |
|---|---|
| Read any file | Yes |
| Summarize or reference context | Yes |
| Propose file changes for review | Yes |
| Create new files under `context/` | Ask first |
| Edit existing context files | Ask first |
| Delete any file | No |
| Run `git commit` | Ask first |
| Run `git push` | No — human only |
| Share content externally | No — treat as confidential unless marked otherwise |

---

## Context map

| Folder | What's here | Status |
|---|---|---|
| `context/00_index/` | Master index | Populated |
| `context/01_identity/` | Brand voice, founding story | Populated |
| `context/02_operations/` | Account inventory, vendor list | In progress — accounts inventoried, vendor cards 50% done |
| `context/03_offers/` | Retail subscription, wholesale program | Populated |
| `context/04_clients/` | Wholesale account records | In progress — top 8 accounts documented, 4 to go |
| `context/05_assets/` | Bios, taglines, market script, roast profiles | Populated |
| `context/06_workflows/` | Roast cycle, packing, market setup | Roast cycle done; others pending |
| `context/07_decisions/` | Equipment upgrade, direct-trade shift | Populated (2 records) |
| `context/08_prompts/` | Wholesale quote generator, IG caption helper | Populated |
| `context/09_outputs/` | Approved IG captions, recent quote drafts | Curated, ~20 entries |
| `context/99_archive/` | Old subscription tiers, 2024 vendor list | Lightly populated |

---

## Interaction preferences

When working with files in this repository:

- Cite the source file when referencing context (e.g., "from `context/01_identity/brand-voice.md`")
- Ask before creating new files
- Prefer updating existing files over creating duplicates
- Commit with meaningful messages that explain why, not just what
- Flag anything that looks like a secret before writing it to a file
- When drafting customer-facing copy, match the voice rules in `context/01_identity/brand-voice.md`
- Wholesale-related drafts should reference `context/03_offers/wholesale-program.md` for pricing and terms

---

## Secrets policy

No secrets in context files. API keys, tokens, passwords, and PII belong in 1Password — not here. The git hooks in `.githooks/` enforce this at commit and push time.

---

## Framework

This repository follows the [Context Architecture System™ v0.1](https://contextarchitecturesystem.com).
