# Commercial Shell Licensing

**CAS Version:** 0.1
**Status:** Stable

---

## Overview

Commercial shells are built on the CAS open standard but are not themselves open source. The shell author retains ownership of the `shell/` directory — the methodology, knowledge, and prompt frameworks that make the shell valuable. The client owns their `context/` directory entirely.

This document defines the licensing structure for commercial shells and the boundary between open and proprietary content.

---

## The two-layer model

| Layer | Owner | License |
|---|---|---|
| CAS framework (specs, CLI, folder structure) | Context Arcana LLC | Apache 2.0 / CC BY 4.0 |
| `shell/` directory | Shell author | Commercial (see below) |
| `context/` directory | Client / operator | Entirely the client's |

The open standard governs the structure. The commercial license governs the author's IP. The client's work is never encumbered by either.

---

## Required license file

Every commercial shell must include a `SHELL-LICENSE.md` file at the repository root. This file governs the client's use of the `shell/` directory.

A ready-to-use template is available at [`templates/shell-license.md`](../templates/shell-license.md). Replace all [BRACKETED] placeholders before publishing.

Key terms the license must cover:

| Term | Requirement |
|---|---|
| Grant | Individual, non-transferable, single-user license |
| Client ownership | `context/` belongs entirely to the client |
| Restrictions | No redistribution of `shell/` contents |
| Termination | License terminates on breach, with 30-day cure period |
| Warranty | Disclaimed — AI outputs are the client's responsibility |

---

## What clients may and may not do

**Clients may:**
- Use the shell for their own work, indefinitely
- Modify their `context/` directory freely
- Use AI outputs generated with the shell commercially
- Keep their `context/` entirely private

**Clients may not:**
- Share the `shell/` directory with anyone
- Resell or sublicense the shell
- Use the shell's methodology to build a competing product
- Claim authorship of the shell framework

---

## What the open license covers

The CAS structural files — `CONTEXT.md`, `SETUP_PROMPT.md`, `AGENTS.md`, the `context/` folder structure, `.githooks/`, setup scripts — are derived from the CAS starter kit and remain under Apache 2.0 (code) and CC BY 4.0 (documentation). The commercial license does not extend to these files.

A client can always take their `context/` and move it to a new shell — open or commercial — without restriction. This is the portability guarantee.

---

## Practical notes

**Attribution in client work:** Clients may describe their work as "AI-assisted" without naming the shell. They may not claim the shell's methodology as their own original framework when delivering services.

**Team use:** The default license is single-user. Offer a team license (per-seat or per-organization) for clients who need multiple users. Price it separately.

**Updates policy:** Specify clearly whether updates are included, for how long, and how they are delivered. Patch updates (same major version) should be included. Major version upgrades can be a separate purchase.

**Governing law:** Use your own jurisdiction. Keep it simple — the courts where you operate.

---

## License

This document is part of the Context Architecture System™ framework documentation, © 2026 Context Arcana LLC, licensed under CC BY 4.0.
