# ui_context.md — Look and Feel (v4)

**GL Studio** — light, image-forward, modern professional. Not the dark law-firm look.

**Code folder:** `Gisele-LaRose-V4/site/` · port **8079**

---

## Design goal

- Cream canvas, gold from the new GL logo, ink type — expert, not conservative
- Lots of real project screenshots (no stock-as-work)
- Movement with purpose: cursor follower, scroll reveals, magnetic buttons, image galleries
- Fun and current without looking like a template

**Avoid:** full-page charcoal, Cormorant Garamond, sparse corporate layouts.

## Layout width

| Token | Value | Use |
|-------|--------|-----|
| `--max` | `100rem` (~1600px) | Text, cards, header, grids |
| `--gutter` | `clamp(1.25rem, 4vw, 4rem)` | Side padding |
| `.banner` / `.full-bleed` | `100vw` | Background images edge to edge |

Banners sit outside `.container`. Overlay copy goes in `.banner__content` > `.container`.

**Home — systems section:** `assets/images/banners/sleeping-beauty.jpg` (Sleeping Beauty mountain). Scaled to 118% width for taller coverage; raised with `margin-top` (not transform) so scroll stays stable. Cream scrim for type.

---

## Color palette

| Token | Purpose | Value |
|-------|---------|--------|
| `--color-bg` | Page | `#f7f1e6` |
| `--color-bg-alt` | Bands | `#efe6d4` |
| `--color-surface` | Cards | `#fffaf2` |
| `--color-ink` | Text | `#171411` |
| `--color-muted` | Secondary (still readable) | `#4a433c` |
| `--color-gold` | Accent, cursor, CTAs | `#c9a24a` |
| `--color-gold-bright` | Hover / glow | `#e4c36a` |
| `--color-teal` | Live-product badge | `#0f766e` |
| `--color-ink-deep` | Footer / dark bands | `#1c1915` |

---

## Typography

| Element | Font |
|---------|------|
| Headlines | **Fraunces** — optical size, weight 600–700 |
| Body, nav, UI | **Outfit** — weight 500–650, body ≥ 1.05rem |

---

## Motion

| Layer | Choice |
|-------|--------|
| Cursor | Gold follower from v1 (desktop, respects reduced motion) |
| Scroll | Lenis + GSAP ScrollTrigger (CDN) |
| Extra | Magnetic buttons, logo tilt, screenshot cycle, skill marquee |

---

## Logo

`assets/brand/gl-logo.png` — `Logo-GL-overlap2-transparent.png` (GL monogram + lockup + tagline).
