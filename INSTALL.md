# Installing CAS

Two paths depending on how comfortable you are with Git.

---

## Path 1 — "I just want to try it"

No Git. No terminal. No setup.

1. On GitHub, click the green **"Code"** button → **"Download ZIP"**
2. Unzip the folder somewhere you'll remember (e.g., your Documents)
3. Open `CONTEXT.md` in any text editor and replace the placeholders with your information
4. Open `SETUP_PROMPT.md`, copy its contents, and paste them into a new conversation with Claude, ChatGPT, Gemini, or any AI assistant

That's it. You have a Context Architecture System. No version history, but it works.

**When you're ready for Git later, come back and follow Path 2.** Your files move over with no changes needed.

---

## Path 2 — "Set me up properly with Git"

This gives you version history, the secret scanner, and a safe way to back up your context to GitHub (or any Git host) if you want.

### Prerequisites

- **Git installed** — download from <https://git-scm.com/downloads>
- **A GitHub account** (or any Git host) — only if you want a cloud backup; not required for local use

### Steps

**1. Get the repository.**

Either click **"Use this template"** on GitHub to create your own copy, or clone the starter directly:

```
git clone https://github.com/context-arcana-llc/context-architecture-system.git my-context
cd my-context
```

**2. Run the setup script.**

On macOS or Linux:

```
bash setup.sh
```

On Windows (PowerShell):

```
.\setup.ps1
```

The script installs the secret-scanning git hooks (one-time, per clone).

**3. Start filling in your context.**

Open `CONTEXT.md` and replace the placeholders with your information. Commit when you're ready:

```
git add CONTEXT.md
git commit -m "Initial context setup"
```

**4. Activate with your AI.**

Copy the contents of `SETUP_PROMPT.md` into a new conversation with your AI assistant of choice.

---

## What if I skip the hooks?

The hooks scan files before every commit and push to block accidentally committed secrets (API keys, passwords, credit card numbers, etc.). If you skip them, you lose this safety net. Recommended for any repo that might ever be public or shared.

---

## Troubleshooting

| Symptom | Fix |
|---|---|
| "git is not recognized as a command" | Git isn't installed. See Prerequisites above. |
| "Permission denied" running `bash setup.sh` on macOS / Linux | Try `sh setup.sh` instead |
| Hooks don't seem to run | Confirm with `git config --get core.hooksPath` — it should print `.githooks` |
| A commit is blocked but the content is safe | Bypass with `git commit --no-verify` — only after visually confirming the content |
| PowerShell blocks the script with an execution policy error | Run `Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass` then try `.\setup.ps1` again |
| Hooks run on macOS but seem to miss some patterns | macOS ships without PCRE grep. Install GNU grep via Homebrew for full coverage: `brew install grep` |
