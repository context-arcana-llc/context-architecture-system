# Context Architecture System™ — v0.1 Starter Kit

The owned context layer beneath your AI tools.

**CAS is an open framework** — a file/folder standard for structured, portable, versioned knowledge that any AI model, agent, or tool can read. You own it. It lives in files. It outlives any vendor, model, or workflow engine.

> The WordPress:Automattic analogy: CAS is the open standard. [Context Arcana™](https://contextarcana.com) is the implementation partnership.

---

## Read first

**[`PRINCIPLES.md`](PRINCIPLES.md)** — the ten principles that govern the Context Architecture System. The rest of this repository is in service of them.

---

## What this is

A minimal, Git-tracked folder structure for keeping your business context in files you own. No app. No database. No vendor lock-in.

- Works with Claude, GPT-4, Gemini, local models, or anything that can read a file
- Paste `SETUP_PROMPT.md` into any AI assistant to activate it immediately
- Version everything with Git

---

## IP architecture

| Layer | License |
|---|---|
| Repo templates and starter kit | Apache 2.0 |
| Framework documentation | CC BY 4.0 |
| "Context Architecture System™" and "Context Arcana™" | Trademark — Context Arcana LLC |

---

## Quick start

> **New to Git?** See [`INSTALL.md`](INSTALL.md) for a step-by-step walkthrough — including a no-Git path that gets you started in about 3 minutes.
>
> **Want to see what populated context looks like first?** Browse [`examples/riverstone-coffee/`](examples/riverstone-coffee/) — a fictional small business with every major folder filled in.

1. **Use this template** — click "Use this template" on GitHub, or clone and re-initialize
2. **Install the git hooks** (one-time, per clone) — run `bash setup.sh` (macOS / Linux) or `.\setup.ps1` (Windows PowerShell). Or do it manually:
   ```bash
   git config core.hooksPath .githooks
   chmod +x .githooks/pre-commit .githooks/pre-push  # macOS / Linux only
   ```
3. **Fill in `CONTEXT.md`** — the machine-readable summary of your context
4. **Activate with your AI** — paste the contents of `SETUP_PROMPT.md` into a new conversation
5. **Start adding context** — drop files into the appropriate `context/` subfolder

---

## Folder layout

| Folder | What lives here |
|---|---|
| `context/00_index/` | Master index of what's in your context system |
| `context/01_identity/` | Brand, voice, mission, founding story |
| `context/02_operations/` | How the business runs — processes, tools, accounts |
| `context/03_offers/` | Products, services, pricing, positioning |
| `context/04_clients/` | Client records, relationships, history |
| `context/05_assets/` | Reusable copy, templates, media references |
| `context/06_workflows/` | Step-by-step processes and SOPs |
| `context/07_decisions/` | Decision records and rationale |
| `context/08_prompts/` | Working prompts, calibrated instructions |
| `context/09_outputs/` | Notable AI outputs worth keeping |
| `context/99_archive/` | Retired content — kept for reference |
| `templates/` | Blank templates for new context entries |

---

## Secret hygiene

The included git hooks scan staged content and refuse anything that looks like a secret or PII before it can be committed or pushed.

**What's blocked:** API keys, tokens, private key blocks, JWTs, SSNs, credit card numbers, IBANs, driver's license labels, labeled account/routing numbers.

Install once with `git config core.hooksPath .githooks`. Binary files (images, PDFs) are skipped by the scanner.

---

## Framework documentation

[contextarchitecturesystem.com](https://contextarchitecturesystem.com)

## Implementation partnership

[contextarcana.com](https://contextarcana.com)
