# Portability Guide

**CAS Version:** 0.1

---

## The portability promise

A CAS shell is readable by any AI model, any agent, and any tool that can open a text file. It is not tied to a vendor, a platform, or a subscription. If the tool you use today shuts down tomorrow, your context moves with you.

> **One Shell. Any Body. Forever.**

This guide explains what portability means in practice, how to test it, and what to do when switching tools.

---

## What portability means

**Your context is in files you own.** Every piece of context — your brand voice, your decisions, your offers, your workflows — lives in plain Markdown files in a folder you control. No export button required. No account to log into. No vendor permission needed.

**Any model can read it.** Claude, GPT-4, Gemini, Mistral, Llama, or any model that accepts a text input can work with your context. The format is Markdown. If a model can read text, it can read your shell.

**Switching tools is a single command.** When you move from one AI tool to another, run `cas export <adapter>` and paste the output. Your context arrives in the new tool in seconds.

**Your shell outlives any model.** Models are updated, deprecated, and replaced. Your context does not change when the model does. The shell from 2026 will still be readable — and useful — in 2036.

---

## Switching between AI tools

### Switching within the same tool

If you switch from one Claude project to another, or start a new GPT conversation:

```bash
cas export claude   # or gpt, gemini, cursor, generic
```

Paste `exports/claude.md` into the new project's instructions. Done.

### Switching to a different tool

Moving from Claude to GPT:

```bash
cas export gpt
```

Paste `exports/gpt.md` into your Custom GPT or API system prompt. Your context is now in GPT with the same structure it had in Claude.

The shell itself does not change. Only the export format changes.

### Moving to a tool without an adapter

Use the generic adapter:

```bash
cas export generic
```

`exports/generic.md` is a complete, unformatted context dump that works anywhere. Paste it as a system prompt, a document, or a file attachment.

---

## Portability across devices

Because the shell lives in a Git repository, it is inherently multi-device:

```bash
git clone <your-shell-repo>
cd <your-shell>
cas export claude
```

Any machine with Git and Node.js can load your context into any AI tool in under a minute.

---

## Portability across time

Context that survives ten years is more valuable than context built for today's tools. CAS is designed for this:

- **Plain Markdown** — readable by any text editor from any decade
- **No proprietary format** — no app required to open or read the files
- **Git history** — every change is recorded with when and why
- **Version-stamped** — the `cas_version` field in your manifest tells future tools what version of CAS produced this shell

If CAS itself changes in a future major version, the old files will still be readable. The `cas_version` field tells a future validator exactly how to interpret the structure.

---

## Testing portability

To verify your shell is portable, run:

```bash
cas validate
```

A clean PASS means your shell conforms to the CAS specification and will be readable by any compliant tool or validator.

Then try at least two adapters:

```bash
cas export claude
cas export generic
```

If both succeed and the output looks correct, your shell is portable.

---

## What is not portable

A few things fall outside CAS portability guarantees:

- **Secrets** — credentials belong in a password manager, not in context files. The pre-commit hook blocks them. A shell that contains secrets cannot be shared without risk.
- **Binary files** — images, PDFs, and other binary assets are not part of the CAS text layer. They can be referenced in context files but are not exported.
- **Tool-specific features** — a prompt written specifically for Claude's extended thinking or GPT's code interpreter will not automatically work in another tool. Write prompts for the task, not the tool.

---

## License

This document is part of the Context Architecture System™ framework documentation, © 2026 Context Arcana LLC, licensed under CC BY 4.0.
