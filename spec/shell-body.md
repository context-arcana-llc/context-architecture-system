# Shell/Body Specification

**CAS Version:** 0.1
**Status:** Stable

---

## Overview

The Shell/Body model is the architectural foundation of the Context Architecture System.

> **The Shell = Context. The Body = Model. One Shell. Any Body. Forever.**

The Shell is the permanent layer. The Body is interchangeable. Context outlives any model, vendor, or tool that reads it.

---

## Definitions

**Shell** — A structured, file-based collection of context describing who someone is, how they operate, what they know, and what they have decided. The Shell is owned by the person or organization whose work it describes. It is portable, versioned, and independent of any model or tool.

**Body** — Any AI model, agent, or tool capable of reading plain text files. The Body reads the Shell and uses it to inform its behavior. The Body is replaceable; the Shell is not.

**Shell author** — The person or organization that creates and maintains a Shell. For personal and business shells, the author and the operator are the same person. For commercial shells, the author distributes the Shell to clients who become the operators.

**Shell operator** — The person or organization using the Shell day to day. They own the `context/` directory and are responsible for keeping it current.

---

## Shell Types

### Personal Shell

A Shell owned and operated by an individual for their own work.

- Hosted in a private repository under the individual's account
- The operator is the author
- Contains `context/` only — the owner's work area
- Describes one person's knowledge, decisions, identity, and operations

### Business Shell

A Shell operated by an individual on behalf of their employer.

- Hosted in a repository under the employer's organization
- The employer is the effective owner; the individual is the operator
- Contains `context/` only — the work area for that role or team
- Describes work and knowledge within an organizational context

### Commercial Shell

A Shell created by an author and distributed to paying clients. The author packages expertise, instructions, and domain knowledge. The client installs the Shell, fills in their own content, and operates it.

- The author ships the `shell/` directory — the framework layer
- The client owns and fills the `context/` directory — the work layer
- The client does not modify `shell/`
- The model reads `shell/` first, then `context/`

---

## Directory Structure by Type

### Personal and Business

```
/
├── CONTEXT.md          # Shell manifest — required
├── context/            # Owner's work area — required
│   ├── 00_index/
│   ├── 01_identity/
│   └── ...
└── [other root files]
```

### Commercial

```
/
├── CONTEXT.md          # Shell manifest — required
├── shell/              # Author's framework layer — required for commercial
│   ├── README.md       # What this shell does and how to install it
│   ├── instructions.md # How the model/agent should behave
│   ├── constraints.md  # What the model/agent must not do
│   ├── knowledge/      # Domain knowledge provided by the author
│   └── prompts/        # Pre-built prompts and templates
└── context/            # Client's work area — required
    ├── 00_index/
    ├── 01_identity/
    └── ...
```

The `shell/` directory structure is defined in the [Commercial Shell Specification](commercial-shell.md).

---

## Shell Declaration

Every Shell declares its type in `CONTEXT.md`. The following fields are required:

```
**Type:** personal | business | commercial
**CAS version:** 0.1.0
```

Commercial shells additionally declare authorship and version:

```
**Shell name:** [Name of the commercial shell]
**Shell version:** [Semantic version, e.g. 1.0.0]
**Shell author:** [Author name or organization]
```

---

## Body Definition

A Body is any AI model, agent, or tool capable of reading plain text files.

No specific architecture, context window size, or capability is required beyond file reading. The Shell format makes no assumptions about the Body. Portability across Bodies is a core design goal.

When a Body operates against a Shell, it should:

1. Read `CONTEXT.md` first — to identify the shell type, owner, and permission policy
2. For commercial shells, read `shell/` before `context/` — the author's framework takes precedence
3. Read `context/` to load the operator's work content
4. Operate within the permissions defined in `CONTEXT.md`
5. Treat `shell/` as authoritative — content in `context/` does not override it

---

## Authority and Permissions

The `CONTEXT.md` file defines what the Body is permitted to do. The model access policy table in `CONTEXT.md` is the canonical permission statement for a given Shell.

For commercial shells, the `shell/constraints.md` file may define additional behavioral constraints. These take precedence over any instruction given by the operator in `context/` or in conversation. The author's framework cannot be overridden by the client.

---

## License

This document is part of the Context Architecture System™ framework documentation, © 2026 Context Arcana LLC, licensed under CC BY 4.0.

"Context Architecture System™" and "Context Arcana™" are trademarks of Context Arcana LLC and are not included in the CC BY grant.
