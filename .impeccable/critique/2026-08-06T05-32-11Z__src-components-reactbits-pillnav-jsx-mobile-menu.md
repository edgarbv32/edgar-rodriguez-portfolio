---
target: mobile nav menu (PillNav.jsx hamburger popover)
total_score: 20
max_score: 32
na_heuristics: 7,10
p0_count: 2
p1_count: 2
timestamp: 2026-08-06T05-32-11Z
slug: src-components-reactbits-pillnav-jsx-mobile-menu
---
## Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 2/4 | Hamburger→X morph is visible, but `aria-label` stays "Abrir menú" in both states and there's no `aria-expanded` at all — screen-reader users get zero signal the menu opened. |
| 2 | Match System / Real World | 3/4 | Labels are clear plain Spanish, but "GitHub"/"Descargar CV" (leave-site / download) sit in the same row style as in-page anchors, implying false equivalence. |
| 3 | User Control and Freedom | 1/4 | Confirmed live: no click-outside-to-close, no Escape-to-close. Only exits are tapping a link or re-tapping the tiny hamburger/X. |
| 4 | Consistency and Standards | 2/4 | Internally consistent with the desktop pill, but diverges from standard mobile-drawer conventions (no scrim, no outside-tap dismiss). |
| 5 | Error Prevention | 3/4 | Touch targets exceed 44px minimum (49.3px rows) — good. But with no scrim, live page content directly under the popover stays fully clickable. |
| 6 | Recognition Rather Than Recall | 4/4 | All 6 sections + 2 actions always visible as one list — no hidden state, no memory burden. |
| 7 | Flexibility and Efficiency | n/a | No power-user shortcuts meaningfully apply to a single-page portfolio nav. |
| 8 | Aesthetic and Minimalist Design | 1/4 | Core of the complaint: 8 uniform-weight rows, only 2 of 8 have icons, no hierarchy, no numbering, nothing ties it to the site's own visual signature. |
| 9 | Error Recovery | 4/4 | Trivially satisfied — a nav list has no error states. |
| 10 | Help and Documentation | n/a | Not applicable to a portfolio nav menu. |
| **Total** | | **20/32** | **Acceptable (63%)** |

## Design Specificity Verdict

**LLM assessment**: Not authored for this product. This is the stock reactbits.dev pill-nav pattern (the codebase itself credits reactbits.dev) with zero site-specific typographic or motion signature applied to the mobile popover. Every row shares identical weight/size/color — nothing echoes the site's own established personality: the Hero carousel's bold "01 /" numeral system, oversized black display type, or MagicBento's eyebrow→title→meta hierarchy. Drop this exact popover into any dark glass-UI SaaS site and it would look at home — which is exactly the "muy plano/genérico" complaint.

**Deterministic scan**: CLI scan on `PillNav.jsx` (`detect.mjs --json`) returned exit 0, zero findings. Browser injection of the real detector bundle (`detect-antipatterns-browser.js`) with the mobile menu open found **zero real findings inside `.mobile-menu-popover`** — the only 2 flagged elements site-wide near the nav belonged to hidden (`display:none`) desktop-only pills, irrelevant at mobile width. One visual false-positive was identified and traced: two overlay boxes that appeared to sit on the open menu in a screenshot actually targeted unrelated Hero-section elements (a status dot, an eyebrow line) that happen to share the same screen coordinates while the menu is open — a coincidental overlap artifact, not a defect in the menu markup.

This is a meaningful cross-check: the mechanical detector, which catches concrete anti-patterns (glow abuse, low contrast, gradient overuse, etc.), found **nothing wrong** with this component — because "generic, undifferentiated pill list" isn't a pattern a static scanner can flag. The genericness here is compositional and structural, not a checklist violation, which is exactly the kind of issue that requires a design-director read rather than automated scanning.

## Overall Impression

The menu works and doesn't break anything — but it is functionally and visually interchangeable with any dark-mode SaaS dropdown. The one genuine delight (the hamburger→X morph) is undercut immediately by a flat list with no hierarchy, plus two real interaction gaps: it can't be dismissed by tapping outside or pressing Escape, and the page underneath stays fully live and clickable while it's "open." The single biggest opportunity: give this component the same typographic confidence the rest of the site already has (the Hero's "01 /" numeral motif), while closing the two P0 interaction gaps.

## What's Working

1. **Touch target sizing is genuinely good** — each row measures ~49px tall, comfortably clearing the 44px accessibility minimum. Most portfolio nav menus get this wrong.
2. **The hamburger→X GSAP rotation** (±45° rotation + translate on the two lines) is a cheap, effective, well-timed state-change cue.
3. **Visual coherence with the desktop pill nav** — same glass treatment (blur/gradient/border/shadow), so resizing the viewport doesn't feel like landing on a different design system.

## Priority Issues

- **[P0] No way to dismiss the menu except re-tapping the hamburger or navigating away.** Confirmed live: Escape does nothing, tapping outside the popover does nothing, and the live page underneath fires normally. *Why it matters*: violates a baseline overlay expectation; traps or confuses users who tap away out of habit. *Fix*: outside-click listener + Escape handler wired to the existing `closeMobileMenu`. *Suggested command*: `/impeccable harden`.

- **[P0] Aesthetic flatness is structural.** All 8 rows share identical weight/size/color with no numbering, iconography pattern, or typographic accent tying them to the site's own signature (the Hero's "01 /" numerals, MagicBento's eyebrow/title/meta pattern). *Why it matters*: this is the literal complaint, traceable directly to the CSS having no differentiation mechanism. *Fix*: give the menu its own typographic identity borrowed from the site's existing numeral/eyebrow motif. *Suggested command*: `/impeccable typeset` or `/impeccable bolder`.

- **[P1] No scrim/backdrop behind the popover** — background content stays visibly and functionally live (confirmed: page scroll/click-through works normally while the menu is "open"). *Why it matters*: doesn't read as modal, invites accidental interaction with what's behind it. *Fix*: dim/blur the rest of the page and intercept its taps while open. *Suggested command*: `/impeccable layout`.

- **[P1] Accessibility state invisible to assistive tech.** `aria-label` is hardcoded to "Abrir menú" regardless of state; no `aria-expanded` anywhere on `.mobile-menu-button`. *Why it matters*: screen-reader users have no way to know the menu toggled. *Fix*: toggle `aria-label`/`aria-expanded` with `isMobileMenuOpen`. *Suggested command*: `/impeccable harden`.

- **[P2] Inconsistent iconography creates an unintentional-looking pattern.** Only the 2 actions (GitHub, CV) get icons; the 5 in-page anchors don't. *Why it matters*: reads as an accident, not a deliberate signifier distinguishing "leaves the site" from "scrolls the page." *Fix*: either icon all rows consistently, or use iconography specifically to mark the 2 non-anchor actions as different in kind. *Suggested command*: `/impeccable layout`.

## Persona Red Flags

**Casey (distracted, one-handed, thumb-only)**: The hamburger sits top-left of a 390px screen — the hardest one-handed reach zone. Once open, if her thumb drifts past the popover's bottom edge (~500px on an 844px screen) she lands on live Hero buttons ("Ver proyectos", "Descargar CV") still fully interactive underneath, and can trigger unintended navigation. If she taps outside expecting a normal mobile-sheet dismiss, nothing happens — she has to re-locate the same small top-left target to close it.

**Jordan (confused first-timer)**: Sees 8 identical-looking rows with no grouping — nothing signals that "GitHub" leaves the site while "Formación" scrolls the same page. The active-section indicator (a faint background tint on "Inicio") is subtle enough she likely can't tell which section is current on first glance. She's already seen "Descargar CV" and "GitHub" as full CTA buttons in the Hero, directly below the closed menu — seeing them again identically styled in the menu seconds later adds no new information.

## Minor Observations

- `.hamburger-line { transition: all 0.01s ease; }` is effectively a no-op — the real rotation/translate is driven by GSAP tweens; vestigial CSS.
- z-index scheme is inconsistent: `.pill-nav-container` is `z-index: 80` while its child `.mobile-menu-popover` jumps to `998` with no evident numbering system.
- The external "GitHub" link has no visual cue (icon/arrow) that it navigates off-site.
- The active-state tint (`rgba(var(--accent), 0.2)`) is low-contrast against the row's resting background — worth a contrast check.

## Questions to Consider

1. If you cropped the logo out of a screenshot of this open menu, would anyone recognize it as Edgar's site rather than a generic dark-mode template?
2. Why do "leave the site" (GitHub) and "download a file" (CV) sit in the exact same visual register as "scroll to a section"?
3. The Hero already has a bold numbered-eyebrow system ("01 /", "02 /") that gives the site its voice — what would this menu feel like if opening it felt like paging through that same system, instead of unrolling a generic settings-style list?
4. Is "muy plano" really a depth/shadow problem, or a personality problem — would more glass/glow actually fix a menu whose real issue is that it has no typographic or motion signature at all?
