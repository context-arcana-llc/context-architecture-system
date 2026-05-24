# Decision Record — Upgrade Roaster from 5kg Probat to 12kg Probat

**Date:** 2026-03-12
**Status:** Accepted
**Supersedes:** none

---

## Context

The 5kg Probat has been our only roaster since founding. Capacity is now the binding constraint on growth — we're at 5 roasting days per week to keep up with wholesale plus retail, and any new wholesale account requires either turning away orders or skipping a market.

Wholesale demand is healthy and growing (~12% YoY) but we're rationing it.

Three options considered:

1. **Add a second 5kg roaster** alongside the existing one. ~$22K, fits the current power supply, no installation downtime.
2. **Upgrade to a 12kg Probat** replacing the 5kg. ~$58K, requires electrical upgrade (~$3K), 2 weeks installation downtime.
3. **Outsource roasting overflow** to a regional contract roaster. ~$2.50/lb premium, no capex, but loses control of quality and profile.

---

## Decision

Upgrade to a 12kg Probat. Sell the 5kg to a startup roaster we know in the next county for ~$8K (already discussed informally).

---

## Rationale

- **Option 1 (second 5kg)** doubles roasting time but doesn't reduce per-batch overhead (warm-up, between-batch transitions, end-of-day cleanup are per-roaster, not per-batch). Net throughput improvement is closer to 70% than 100%.
- **Option 3 (outsource)** defeats the "small batch, direct trade" positioning. Our wholesale accounts buy us for that reason. Non-starter unless we re-position.
- **Option 2 (upgrade)** increases throughput ~2.5x per roasting day, fits within 3 days/week instead of 5, frees a roasting day for market prep and quality work. Payback in ~14 months at current wholesale growth rate.
- The 2-week installation downtime is manageable — we'll roast ahead and freeze inventory, and the timing (June) lines up with the slower summer wholesale period.

---

## Consequences

**Easier:**

- Wholesale growth is no longer capacity-constrained for the next 2–3 years
- Per-batch overhead drops; per-lb cost drops accordingly
- Frees Mara from a roasting day per week — more time for sourcing and accounts

**Harder:**

- Cash flow tight for ~12 months until payback
- 12kg batches require larger green coffee purchase commitments — need to update direct-trade contract sizes
- Two weeks of zero new roasting in June — need a pre-build inventory plan

**Needs updating after install:**

- `context/06_workflows/single-origin-roast-cycle.md` — batch sizes, times, profiles all change
- `context/02_operations/account-inventory.md` — Probat service contract details
- `context/05_assets/roast-profiles/` — all profiles need re-calibration
- This decision record — update status if installation reveals issues

---

## Review date

2026-09-15 — six months post-install. Verify payback assumptions, throughput numbers, any quality drift.
