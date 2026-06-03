# Context Architecture System — Claude Context

> This is the CAS framework repo. It contains the open spec, CLI tooling,
> templates, and documentation for the Context Architecture System™.
> The repo's own CONTEXT.md and AGENTS.md are part of the CAS spec —
> do not confuse them with the personal operator shell at C:\shell.

## Session startup (required)

At the start of every session, before anything else:
1. Read `C:\shell\CONTEXT.md` — owner identity, permissions, context map
2. Find `C:\shell\context\sessions\context-architecture-system\` and read the
   most recent file in it. If that subfolder does not exist, read the most
   recent file in `C:\shell\context\sessions\` instead.
3. Confirm orientation in one short paragraph: who you are working with and
   where things left off on this project.
4. If `C:\shell` cannot be found or read, stop immediately and ask:
   "I can't find your personal context shell. Where is it?
   (Windows: C:\shell — Mac/Linux: ~/shell or /home/yourname/shell)"
