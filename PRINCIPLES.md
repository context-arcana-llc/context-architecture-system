# Principles

The Context Architecture System™ is governed by ten principles. Together they define what the framework is, what it commits to, and what it refuses to compromise on. Adoption begins with reading them.

The principles are stable. They will not change across patch or minor releases within a major version. A major release may revise the list, and the version number will reflect that.

---

## 1. The user owns the context

The context layer belongs to whoever's work it describes. Not to a vendor, not to a model provider, not to a consultant who helped set it up. Ownership is the first commitment; every other principle follows from it. If ownership is ever in question, the system has been built wrong.

---

## 2. The context lives in portable files

Plain Markdown, plain folders, plain text. No proprietary format. No database. No app required to read it. If a text editor can open it, it qualifies. Portability is the test — a context that cannot be moved between machines, services, or decades is not a context worth keeping.

---

## 3. The context is versioned with Git where possible

Git is the recommended substrate because it provides history, attribution, and replication without requiring a service. Where Git is not an option — a non-technical user with files on a desktop — the context is still valid. The framework does not require Git. Where Git is in use, every meaningful change should produce a commit.

---

## 4. The context layer outlives any model, vendor, workflow engine, or consultant

Models will be replaced. Vendors will change pricing or shutter products. Consultants will move on. Workflow tools will be deprecated. The context must remain readable and usable through all of these transitions. Anything that ties the context to a specific runtime, model class, or vendor is a violation of this principle and should be removed.

---

## 5. Models may read context by default, but may not destructively edit it by default

The default permission for any AI model or agent operating against the context is read-only. Changes must be proposed, reviewed, and applied by the owner — not made silently. Destructive operations (deletion, overwriting, structural reorganization) require explicit human instruction. This boundary preserves the owner's authority and prevents an agent from rewriting history on their behalf.

---

## 6. Every meaningful change should be committed

A change worth making is a change worth recording. The commit history is the long-term log of what changed, when, and why. Skipping commits is acceptable for trivial edits; skipping them for substantive ones surrenders accountability to memory. The git log is the durable record; written-down rationale ([decision records](templates/decision-record.md), [change logs](templates/context-change-log.md)) makes the log readable.

---

## 7. Secrets do not belong in context files

API keys, passwords, tokens, identity-grade PII, and credentials never belong in the context layer. They belong in a password manager or secrets manager. The starter kit's pre-commit and pre-push hooks enforce this automatically. A context that contains secrets becomes a liability the moment it is shared, backed up, or pushed to a host.

---

## 8. Accounts remain under the user's control

Every account referenced in the context — every vendor, tool, platform, subscription — is registered in the owner's name or the owner's organization. No account is created or held by a consultant, a contractor, or a third party on the owner's behalf. The context can document who has access to what; ownership stays with the user. When the relationship with the third party ends, nothing of value leaves with them.

---

## 9. Infrastructure should be replaceable

Any tool, host, service, or runtime referenced by the context can be swapped for an equivalent without rewriting the context. If switching from GitHub to GitLab, from one model to another, or from one editor to another would require structural changes to the context, the infrastructure is too tightly coupled. Replaceability is a design feature, not an emergency exit.

---

## 10. Operational continuity is the outcome

The point of the framework is not the files themselves. The point is that work continues — through model changes, vendor changes, team changes, and time. A context system that survives two years of change is doing its job. A context system that survives ten is the goal. Everything else in this document exists to make that outcome more likely.

---

## How these principles relate

Principle 1 is the foundation. Principles 2, 3, 7, and 8 protect ownership in practice. Principle 4 is the test the framework must pass repeatedly over time. Principles 5 and 6 define the operating discipline. Principle 9 is what makes long-term ownership feasible. Principle 10 is the outcome the other nine produce.

---

## Citation

A specific principle is cited by number: "CAS Principle 5." The numbering is stable within a major version. If your work depends on a particular principle, cite it by both number and a short version reference (e.g., "CAS v0.1 Principle 5").

---

## License

This document is part of the Context Architecture System™ framework documentation, © 2026 Context Arcana LLC, licensed under CC BY-SA 4.0. See [`LICENSE-DOCS.md`](LICENSE-DOCS.md) for full terms.

"Context Architecture System™" and "Context Arcana™" are trademarks of Context Arcana LLC and are not included in the CC BY-SA grant.
