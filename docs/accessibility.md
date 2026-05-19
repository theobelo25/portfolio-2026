# Accessibility

How this portfolio handles inclusive UX, and what to verify before shipping content changes.

## Built in

| Area | Implementation |
|------|----------------|
| **Skip link** | “Skip to main content” in [`app/layout.tsx`](../app/layout.tsx) → `#main-content` on each page |
| **Reduced motion** | Framer Motion gated with `useReducedMotion()`; route enter animation disabled via `prefers-reduced-motion` in [`app/globals.css`](../app/globals.css) |
| **Focus** | Visible `focus-visible` rings on buttons, nav, cards, and overlay links |
| **Semantics** | Landmarks (`main`, `nav`, `article`), filter `aria-current`, loading `aria-busy` |
| **Theme** | `next-themes` with system preference; contrast tokens tuned in `globals.css` |
| **CMS HTML** | Sanitized with `lang` / `dir` allowed for bilingual case studies ([`lib/cms/sanitize-html.ts`](../lib/cms/sanitize-html.ts)) |

## Contrast (2026 pass)

- **`--muted-foreground`** darkened in light mode and brightened in dark mode for ~AA body text on `background` / `zinc-50`.
- **`.text-subtle`** — `color-mix` on `foreground` for hero and card secondary copy on marketing backgrounds.
- **Borders** — `border-border` (not `/60`) on cards and prose blocks; challenge rail uses `border-primary/55` for a visible accent on both themes.

Re-check after large theme edits with [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/) or axe DevTools.

## Project cards (keyboard + screen readers)

Pattern in [`components/shared/projects/project-card.tsx`](../components/shared/projects/project-card.tsx):

1. **Stretched overlay `<Link>`** — `aria-label="View case study: …"`, `z-[1]`, raises to `z-30` on `:focus-visible` so the ring sits above content.
2. **Decorative preview image** — `alt=""` + `aria-hidden` (title is exposed as heading; navigation name is on the link).
3. **Repo / live links** — `pointer-events-auto` + higher `z-index` so they remain clickable and tabbable after the overlay in DOM order.
4. **Visual hint** — “View case study →” is `aria-hidden` but appears on hover, focus-within, and when the overlay has focus.

Manual test: Tab through `/work` — each card should get one case-study stop, then optional external links; Enter opens the case study.

Automated: [`project-card.test.tsx`](../components/shared/projects/project-card.test.tsx).

## Bilingual / EN–FR marketing work

- **Static copy** — [`LocaleText`](../components/shared/locale-text.tsx) (`<span lang="fr">`) on About for short French terms.
- **Case studies (CMS)** — Use HTML in Directus, e.g. `<span lang="fr">…</span>` or `<figcaption lang="fr">` inside `<figure>`; sanitizer preserves `lang`.
- **Static figures** — [`BilingualFigure`](../components/shared/bilingual-figure.tsx) for optional `lang` on captions.
- **Page language** — Root `html lang="en"`; do not set `lang="fr"` on the whole page unless the document is primarily French.

In a case study, call out accessibility work explicitly when relevant, e.g. *“WCAG-minded components, focus order, and EN/FR locale switching on the marketing launch.”*

## Content checklist (CMS / copy)

- [ ] Headings in order (`h2` → `h3` in case study sections)
- [ ] Meaningful link text (avoid “click here”)
- [ ] Alt text on meaningful images in CMS HTML
- [ ] `lang` on French pull quotes, UI screenshots, or captions
- [ ] Mention a11y outcomes on enterprise / marketing projects where you contributed

## Related docs

- [ADR 001 — CMS cache](./adr/001-cms-cache-and-revalidation.md) (performance, not a11y)
