# Casa Solaris — Design System

> *Western Algarve · Burgau · Portugal*

The visual identity and component library for **Casa Solaris**, a private luxury villa in Burgau on the western Algarve coast of Portugal. This system covers brand foundations, colour + type tokens, logo assets, reusable UI components, and a full-page website UI kit.

---

## 1. Company & Product Context

**Casa Solaris** is a private holiday villa situated above the village of Burgau in Western Algarve, Portugal — one of the last stretches of the Algarve coast protected from mass development by the Costa Vicentina natural park. The villa sleeps up to 8 guests across 5 bedrooms, has a private pool with Atlantic views, and sits a five-minute walk from the village beach.

**The house character:** sun, warmth, light, stillness, the pool as the social heart, slow afternoons on the terrace, the smell of whitewash and warm stone. Heritage handled with a light, contemporary touch.

**The brand archetype:** a *place of rest* — not a hotel, not a resort, but a private house where guests feel at home in the Algarve rather than merely visiting. The identity draws on the real visual DNA of the Western Algarve: azulejo tilework, ornamental chimneys, terracotta and ochre façade bands, Moorish geometric patterns, and Atlantic light.

**Products / surfaces represented:**
- `ui_kits/website/` — Marketing website / villa homepage

---

## 2. Sources

| Source | Path / URL | Status |
|---|---|---|
| Brand Identity DC | `uploads/Casa Solaris Brand Identity.dc.html` | ✅ Fully mined |
| Logo SVGs (4 files) | `uploads/casa-solaris-*.svg` | ✅ Copied to `assets/logos/` |
| Font exploration HTML | `uploads/casa_solaris_cormorant_garamond.html` | ✅ Mined |
| Claude Prompt (DOCX) | `uploads/Casa Solaris claude Prompt.docx` | ✅ Read — original brand brief |
| Codebase | `Casa Solaris/` (local mounted) | ✅ Explored — previous DS artefacts |
| Booking.com listing | `https://www.booking.com/hotel/pt/casa-solaris-algarve.pl.html` | ⛔ Blocks scraping |
| Figma | None provided | — |

No Figma file was provided. No real product codebase was present in the mounted folder (only a prior Adopt AI Labs design system under `_ds/`). The brand identity was fully defined in the uploaded DC HTML.

---

## 3. Content Fundamentals

**Voice in one line:** warm, understated, precise — the house speaking through place and detail rather than marketing language.

**Person & address.** The brand does not address itself to "users" — it speaks about the house, the landscape, and the experience. Describe, don't sell. Write in third person about the house ("The pool holds the warmth until evening"); first person only for direct guest correspondence.

**Casing.** The logotype is always **ALL CAPS** (Cormorant Garamond Bold). Body copy and headings on the website use sentence case. Eyebrows, location labels, and metadata are UPPERCASE Trebuchet MS with generous tracking — this is a *typographic* choice, not a copy-writing one.

**Tone.** Restraint. Specificity. Presence. Not effusive adjectives ("stunning", "beautiful", "amazing") — instead, precise concrete detail: "Five-minute walk to the beach." "The light comes in from the east in the mornings." "The village restaurant at the harbour is older than the tourist industry."

**Register.** Literary-adjacent. Unhurried. The copy should feel like a letter from someone who knows the place, not a property listing.

**Emoji:** never used. No exclamation marks in marketing copy.

**Portuguese references:** place names in Portuguese (Burgau, Algarve, Costa Vicentina, azulejo, açoteias). Do not translate them.

### Voice examples

| Context | On-brand |
|---|---|
| Hero tagline | "Where the Algarve stays wild." |
| Amenity | "The pool holds the warmth until evening." |
| Location | "Protected by the Costa Vicentina natural park, its cliffs are unbuilt and its village is unhurried." |
| CTA | "Contact us to check availability, ask about the house, or arrange your arrival." |

**Avoid:** "stunning views", "perfect for families", "luxury villa experience", "book now!", superlative stacking.

---

## 4. Visual Foundations

**Overall vibe.** Warm, precise, Mediterranean-at-rest. The colour palette runs from the deepest umber of old Portuguese mahogany through terracotta roof tiles, Atlantic-sunset sienna, saffron amber, and out to aged parchment paper. Not a single cool tone. Every surface has warmth.

**Colour.**

| Name | Hex | Role |
|---|---|---|
| Umber | `#4A1B0C` | Primary dark — deep text, dark surfaces, rich backgrounds |
| Terracotta | `#993C1D` | Brand signature — primary accent, borders, CTA fill |
| Sunset | `#D85A30` | Warm sienna — secondary accent, hover states |
| Amber | `#E8A33D` | Sun gold — compass centre, gradient end, warm highlights |
| Parchment | `#FAF6EE` | Primary light surface — hero bg, card faces |
| Sand | `#C8C2B8` | Page background — warm dune grey |
| Warm White | `#FFFDF8` | Card / paper surface — sun-bleached linen |
| Stone | `#F2EDE0` | Tinted card — dry stone, secondary surface |

**Gradient accent.** `linear-gradient(90deg, #993C1D, #D85A30, #E8A33D)` — the terracotta-to-amber sweep. Used as 2–3px accent bars (top of cards, letterhead rules, page top), never as full-bleed section backgrounds. On CTAs, use solid terracotta fill — the gradient is an architectural detail, not a button fill.

**Typography.** Two families only, both used ALL CAPS:
- **Cormorant Garamond Bold** — display, logotype, section headings. Always 700 weight, always uppercase. Letter-spacing 0.14em on primary headings. Free substitute for DSType's Andrade Pro (the most authentically Portuguese serif).
- **Trebuchet MS Bold** — supporting text: location labels (0.38–0.50em tracking), eyebrows (0.22em), metadata (0.14em). Always bold. Always uppercase. No italic use.

**Backgrounds.** Solid warm fields only. Parchment for main content sections; umber for dark sections (stats, footer, nav). Sand as the overall page background. No gradients as section backgrounds. Dark sections may carry a very faint radial amber glow (max 6% opacity) for depth — used sparingly.

**Cards.** Warm White or Parchment fill, 0.5px terracotta-tinted border (`rgba(153,60,29,0.18)`), warm low-contrast shadow. `featured` variant adds the 2px terracotta→amber gradient bar at top. Hover lifts shadow one step. Radii are restrained: 2–3px (`--r-sm`).

**Shadows.** Warm-tinted (umber base), low contrast. `0 2px 8px rgba(74,27,12,0.12)` for resting cards; `0 3px 12px rgba(74,27,12,0.18)` for hover/raised. Never hard, cold, or spread widely.

**Borders.** Hairline, terracotta-tinted: `rgba(153,60,29,0.18)` on light surfaces; `rgba(250,246,238,0.12)` on dark. Strong border at `rgba(74,27,12,0.22)`.

**Corner radii.** Restrained. Stationery uses 2–3px (`--r-xs` / `--r-sm`). Cards up to `--r-md` (6px). Never pill-heavy. Pill (`100px`) reserved for filter chips only.

**Hover states.** Gentle. Buttons shift from terracotta → sunset on hover; shadow deepens. Cards lift shadow. Links shift to terracotta. No opacity-only hovers.

**Press states.** Subtle `scale(0.98)` settle — the "settle" feeling. No bounces.

**Animation.** Calm ease-out (`cubic-bezier(0.22,0.61,0.36,1)`), 140–400ms. Fades and short position transitions only. No infinite loops. Respect `prefers-reduced-motion`.

**Imagery vibe.** Warm-toned, golden-hour, real — not styled editorial or stock. Atlantic light, whitewashed walls, terracotta surfaces, the village harbour, the pool in late afternoon. No cold blue tones, no drone property shots, no people posing.

**Decorative marks.** The four tile marks (Compass Rose, Sun, Curves, Moorish Star) are used as texture and punctuation — on stationery, in galleries, as section breaks. Never re-coloured. The Compass Rose is the primary identity mark and appears on the main lockup.

---

## 5. Iconography

The brand ships **no proprietary icon font** — only the four SVG tile marks (Compass Rose, Curves, Moorish Star, Sun).

**Tile marks** (in `assets/logos/`):
- `casa-solaris-mark-light.svg` — terracotta/sunset/amber on transparent
- `casa-solaris-mark-dark.svg` — parchment/amber on umber fill
- `casa-solaris-lockup-light.svg` — full logotype, light version
- `casa-solaris-lockup-dark.svg` — full logotype, dark version

**Functional iconography.** For UI icons (amenity symbols, navigation, form controls): use a thin-stroke, round-cap SVG icon set. Recommended: **[Lucide](https://lucide.dev)** (CDN) — 1.5px stroke, round caps/joins, matches the brand's precise-but-warm line quality. Colour: `currentColor` inheriting terracotta on light, parchment on dark.

> ⚠️ **Substitution flagged:** No icon set was shipped with the brand materials. Lucide is a suggested substitution. If Casa Solaris has bespoke illustrations, send them and they will be incorporated.

**Azulejo tile motifs** appear as decorative elements — as SVG inline marks in stationery, gallery grids, and the location section. Do not convert them to raster.

**Emoji:** never used.

**Unicode:** middot `·` and en-dash `–` are used as copy dividers (e.g. "WESTERN ALGARVE · BURGAU"). Arrow `→` may be used in inline links.

---

## 6. Index & Manifest

| Path | Description |
|---|---|
| `README.md` | This file |
| `styles.css` | Root entry — @imports all token files |
| `tokens/fonts.css` | Google Fonts import (Cormorant Garamond) |
| `tokens/colors.css` | All colour tokens — brand palette + semantic roles |
| `tokens/typography.css` | Font families, type scale, letter-spacing, line-heights |
| `tokens/spacing.css` | Spacing (8pt grid), radii, shadows |
| `tokens/motion.css` | Easing curves + duration tokens |
| `assets/logos/` | 4 SVG logo files (mark + lockup, light + dark) |
| `guidelines/` | 9 specimen cards for the Design System tab |
| `components/core/` | 5 reusable React components |
| `ui_kits/website/` | Full villa marketing website UI kit |
| `SKILL.md` | Agent Skill manifest for Claude Code |

### Components
| Component | Variants | Use |
|---|---|---|
| `Button` | primary · secondary · ghost · outline | CTA buttons, nav actions |
| `Card` | default · featured · tinted · dark | Content panels, amenity tiles |
| `Badge` | default · accent · gold · dark · sand | Property stats, info labels |
| `Tag` | default · accent · filled · dark | Category labels, filter chips |
| `Divider` | rule · ornamental · gradient | Section separators |

### Design System Tab Groups
- **Colors** — Primary Palette, Surfaces & Neutrals, Semantic Colors, Gradient Accent
- **Brand** — Logo Marks, Logotype Lockups
- **Type** — Display, Supporting, Scale
- **Spacing** — Spacing Scale, Radii & Shadows
- **Components** — Core Components (all 5)
- **Website** — Marketing Website
