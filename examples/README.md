# Examples

A worked example of CAS in use. **This folder is reference material, not part of the framework itself.** Read through it to see what populated context looks like, then delete the folder when you're ready to start your own.

---

## What's in here

`riverstone-coffee/` — a fully populated CAS for a fictional small-batch coffee roastery called **Riverstone Coffee Roasters**. The business does not exist. Any resemblance to real coffee businesses is coincidental.

The example covers most of the `context/` folders with realistic content:

| File | What it demonstrates |
|---|---|
| `CONTEXT.md` | A fully filled-in machine-readable context summary |
| `context/00_index/index.md` | A master index pointing to active context files |
| `context/01_identity/brand-voice.md` | Brand voice rules with do/don't examples |
| `context/01_identity/founding-story.md` | An origin story reusable across surfaces |
| `context/02_operations/account-inventory.md` | The account-inventory template, populated |
| `context/03_offers/retail-subscription.md` | A retail offer with tiers, rationale, and what's NOT included |
| `context/03_offers/wholesale-program.md` | A B2B offer with terms, pricing tiers, and quote workflow reference |
| `context/06_workflows/single-origin-roast-cycle.md` | A detailed multi-step operational workflow |
| `context/07_decisions/2026-03_drum-roaster-upgrade.md` | A decision record with options considered and consequences |
| `context/08_prompts/wholesale-quote-generator.md` | A working prompt that references other context files |

Folders not shown (`04_clients/`, `05_assets/`, `09_outputs/`, `99_archive/`) follow the same pattern with content appropriate to their purpose.

---

## How to use this

1. Read `riverstone-coffee/CONTEXT.md` first — it shows what a complete context summary looks like
2. Browse a few of the populated files to see the level of detail
3. Notice that **no file contains secrets** — only references to which accounts exist and what they're for
4. Notice that files **cross-reference each other** by path (e.g., the prompt references the offer, the decision references workflow files that will need updating)
5. When you're ready to build your own context, delete this folder:
   ```
   rm -rf examples/
   ```

---

## Why coffee?

Coffee is universally understood and has both B2B (wholesale to cafes) and B2C (retail subscription) dimensions, giving the example enough operational surface area to demonstrate the patterns without being overwhelming. The fictional Riverstone Coffee Roasters is small enough (founder + 2 employees) that the context structure stays legible.
