# scope_context.md — What to Touch and What to Leave Alone (v4)

**If it is not in the prompt, do not change it.**

---

## Locked sections

**Status:** `locked` = do not edit. `open` = can still change.

Say **unlock [section]** to set a row back to `open`.

**Revert rule:** If anything in a locked section needs to be undone (accidental edit, failed polish, rollback request), restore that section to its **last locked position** — the frozen state as of the row’s current **Locked date** / Notes. Do not redesign while reverting.

| Section | Page / file | Status | Locked date | Notes |
|---------|-------------|--------|-------------|-------|
| Bathroom Busters featured card | Home — `site/js/projects.js` bathroom-busters entry; `site/js/main.js` featured render; `site/js/motion.js` gallery swipe; CSS `.project-card--featured`, `.project-cycle-frame`, `.project-cycle`, `.project-card-aside`, `.gallery-row` / `.gallery-shot`; assets under `bathroom-busters/` incl. `BB-*.jpg` | **locked** | 2026-08-12 | Laptop mockup + swipe-left mobile slideshow + thumbnails (`BB-Main` lead). Copy: 756 locations claim + stack pills (Node.js, SQLite, Docker, PWA, REST APIs, Admin dashboard, DigitalOcean, Caddy). Do not change layout, motion, assets, or copy unless unlocked. |
| Alderleaf.ca card | Home — `#alderleaf` in `site/js/projects.js`; media `site/assets/images/projects/alderleaf.png`; CSS `#alderleaf` / `#alderleaf .project-card-media` | **locked** | 2026-08-12 | Screenshot content (nav/hero/CTAs + photo framing) + left-column claim/tags + subtle media border + card padding shared with other cards. Do not change unless unlocked. |

---

## File boundaries

| Area | Rule |
|------|------|
| `Gisele-LaRose-V4/site/` | Active build |
| v1 / v2 / v3 | Do not edit unless asked |
