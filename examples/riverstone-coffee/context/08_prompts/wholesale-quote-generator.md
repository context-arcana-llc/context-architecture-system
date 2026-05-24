# Prompt Card — Wholesale Quote Generator

**Category:** Generation
**Model tested on:** [e.g., model name and version]
**Last updated:** 2026-04-22

---

## Purpose

Given a wholesale prospect's name, estimated monthly volume, and any special requests, generate a quote email that matches our voice, pricing tiers, and terms — without making up details.

---

## Prompt

```
You are helping me draft a wholesale quote for Riverstone Coffee Roasters.

Read these files first:
- `context/03_offers/wholesale-program.md` — pricing tiers, terms, what's included
- `context/01_identity/brand-voice.md` — voice rules
- `context/01_identity/founding-story.md` — used only if the prospect asked "tell me about you"

Then draft an email quote for:

- Prospect: {company name}
- Contact: {contact name}
- Estimated monthly volume: {volume in lb}
- Special requests: {any custom asks, or "none"}
- Tone: {standard / warm if existing customer / brief if they asked for a fast turnaround}

Rules:
1. Use the actual pricing tier from `wholesale-program.md` based on volume. Do not invent pricing.
2. Match the voice rules — direct, sensory, regional. No "premium" or "curated."
3. Include only the terms that apply to their tier.
4. If they asked for something we don't offer (equipment loans, exclusive territory, co-branded bags), say so plainly and reference what we do offer instead.
5. Sign as Mara unless I tell you otherwise.
6. Output only the email body. No subject line, no preamble.
```

---

## Usage notes

- Verify the volume tier match — the prompt does this from the file, but double-check once before sending
- For prospects asking about co-branding (still TBD), reference `context/07_decisions/` to see current thinking
- Don't use this for existing accounts — for those, see `context/04_clients/{account}/notes.md` for their specific arrangements

---

## Example output

See `context/09_outputs/quotes/2026-04_oakcliff-bistro.md` for a representative example. That quote shipped and the account is now at Standard tier.
