# Workflow Guide

**CAS Version:** 0.1
**Status:** Stable

---

## Overview

A CAS shell is only useful if you actually work in it. This guide defines the daily working session — how to start, how to work, how to end, and how to pick up on any machine. The workflow is three steps: **load, work, save.**

Without the save step, your context drifts. Without the load step, the AI starts cold every time. The session log is what makes the system compound over time.

---

## The session workflow

```
START                    WORK                     END
─────                    ────                     ───
1. Pull latest context   3. Work normally         5. Update context files
2. Load into AI          4. Make commits           6. Write session log
                                                  7. Commit and push
```

---

## 1. Starting a session

**On your primary machine:**

```bash
git pull
```

**On a new machine:**

```bash
git clone https://github.com/[your-org]/[your-shell-repo]
cd [your-shell-repo]
bash setup.sh    # macOS / Linux
# or
.\setup.ps1      # Windows PowerShell
```

Then paste `SETUP_PROMPT.md` into a new AI conversation. The AI will:
- Read `CONTEXT.md` to understand the shell and its permissions
- Read `context/00_index/` to orient itself to what context exists
- Confirm it is ready and ask what you want to work on

You are now in a loaded session.

---

## 2. Working during a session

Work normally. The AI reads from your context files as needed. When something meaningful happens — a decision, a new piece of knowledge, a completed workflow — note it for the end-of-session save step. You do not need to stop and save mid-session.

**What belongs in context files:**
- Decisions and their rationale
- How things work (processes, systems, account structures)
- Offer and pricing information
- Client records
- Reusable prompts
- Identity and voice rules

**What stays in chat:**
- Drafts being iterated on
- Exploratory thinking
- Temporary working notes
- Anything you would not need to reference again

The rule: **if you would need to look it up later, it belongs in a context file.**

---

## 3. Ending a session — the save step

This is the most important step. Do not skip it.

**a. Update any context files that changed**

If you made decisions, add them to `context/07_decisions/`. If processes changed, update `context/06_workflows/`. If new offers exist, update `context/03_offers/`. Keep updates brief — a few lines is enough.

**b. Write a session log**

Copy `templates/session-log.md` into `context/sessions/` with today's date and topic as the filename:

```
context/sessions/2026-06-02_marketing-shell-build.md
```

Fill in:
- Duration and project
- What was worked on
- Decisions made
- What shipped
- Open threads for next session

The session log is your institutional memory. It also makes billing straightforward — duration and project are already recorded.

**c. Commit and push**

```bash
git add -A
git commit -m "Session: [date] — [one line summary]"
git push
```

Example:
```bash
git commit -m "Session: 2026-06-02 — built marketing shell framework, made template split decision"
```

Your context is now saved and available from any machine.

---

## 4. Resuming on a new machine

```bash
git clone https://github.com/[your-org]/[your-shell-repo]
cd [your-shell-repo]
bash setup.sh
```

Paste `SETUP_PROMPT.md` into a new conversation. Tell the AI:

> "Read the most recent session log in `context/sessions/` first — that's where we left off."

The AI will read the last session log, understand the open threads, and pick up where you left off. You do not need to re-explain your context.

---

## 5. Keeping context current over time

Context drifts when things change and the files don't. A few habits prevent this:

**After a significant decision:** write a decision record the same day, not later.

**After a project closes:** move relevant files to `context/99_archive/` and update the index.

**Monthly:** ask the AI to audit your context — "Read my context files and tell me what looks stale, incomplete, or missing." Update what it flags.

**When something is wrong:** if the AI gives you an answer based on outdated context, fix the file immediately. The file is the source of truth, not the conversation.

---

## 6. The session log as a business tool

Over time your `context/sessions/` directory becomes a complete log of your working time. You can ask the AI at any point:

> "Summarize what I worked on for [client] this month."
> "How many hours did I spend on [project] last week?"
> "What decisions did I make in June?"
> "Draft an invoice for [client] based on my session logs."

This works today with any AI model that can read your exported context. The `cas export` command compiles it into a single document you can paste into any conversation.

---

## Quick reference

| Step | Command / Action |
|---|---|
| Start session (existing machine) | `git pull` → paste SETUP_PROMPT.md |
| Start session (new machine) | `git clone` → `bash setup.sh` → paste SETUP_PROMPT.md |
| End session — save context | Update files → write session log |
| End session — commit | `git add -A && git commit -m "Session: [date]" && git push` |
| Resume on new machine | `git clone` → paste SETUP_PROMPT.md → "read last session log" |

---

## License

This document is part of the Context Architecture System™ framework documentation, © 2026 Context Arcana LLC, licensed under CC BY 4.0.
