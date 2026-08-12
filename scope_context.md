# scope_context.md — What to Touch and What to Leave Alone (v4)

**If it is not in the prompt, do not change it.**

---

## Locked sections

**Status:** `locked` = do not edit. `open` = can still change.

Say **unlock [section]** to set a row back to `open`.

**Revert rule:** If anything in a locked section needs to be undone (accidental edit, failed polish, rollback request), restore that section to its **last locked position** — the frozen state as of the row’s current **Locked date** / Notes. Do not redesign while reverting.

| Section | Page / file | Status | Locked date | Notes |
|---------|-------------|--------|-------------|-------|
| Bathroom Busters featured card | Home — `site/index.html` project stack; `site/js/main.js` featured render; `site/js/motion.js` gallery swipe; `site/js/projects.js` bathroom-busters entry (incl. `BB-*.jpg` mobile gallery); CSS `.project-card--featured`, `.project-cycle-frame`, `.project-cycle`, `.project-card-aside`, `.gallery-row` / `.gallery-shot` as used by this card | **locked** | 2026-08-12 | Laptop mockup + swipe-left mobile slideshow + thumbnails (`BB-Main` lead, then Home/Map/Leaderboard/Submit/Rate/Admin). Do not change layout, motion, or assets unless unlocked. |

---

## File boundaries

| Area | Rule |
|------|------|
| `Gisele-LaRose-V4/site/` | Active build |
| v1 / v2 / v3 | Do not edit unless asked |
