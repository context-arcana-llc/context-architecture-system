# AGENTS.md

> Instructions for AI coding agents, automation agents, and agentic workflows operating in this repository.
> This document extends `CONTEXT.md`. Read `CONTEXT.md` first — its Model Access Policy applies to all agents.

---

## Agent-specific permissions

| Action | Permitted |
|---|---|
| Execute shell commands | No |
| Access external services or APIs | No |

All other permissions are inherited from `CONTEXT.md`.

---

## Notes for coding agents

This is a context repository, not a software project. There is no build step, no test suite, and no runtime.

- Do not run package managers, compilers, or interpreters
- Do not modify `.githooks/` without explicit instruction
- If asked to update context, propose the change as a draft — do not overwrite directly
- No inline secrets, even as placeholder examples
