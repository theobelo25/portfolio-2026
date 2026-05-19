# Changelog

All notable documentation and architecture notes for this project are listed here. Release versioning follows deploys of [theocodes.dev](https://theocodes.dev).

## Unreleased

### Documentation

- README: architecture diagram, env setup, why Directus, live site + LinkedIn links.
- ADR [001](docs/adr/001-cms-cache-and-revalidation.md): caching and revalidation strategy (`lib/cms-cache.ts`, on-demand purge).
- [docs/accessibility.md](docs/accessibility.md): contrast pass, project-card keyboard pattern, bilingual `lang`, CMS checklist.

### Accessibility

- Stronger muted/subtle text and border tokens; hero uses `.text-subtle`.
- Project cards: overlay link focus stacking, decorative image alt, keyboard tests.
- CMS HTML allows `lang` / `dir`; `LocaleText` + `BilingualFigure` helpers; About copy mentions WCAG + EN/FR work.

### Configuration

- Canonical URLs centralized in `lib/site.ts` (`SITE_URL_DEFAULT`, social defaults).

## Earlier work

- Next.js App Router portfolio with Directus CMS, tagged `unstable_cache`, and webhook revalidation.
- CI: lint, typecheck, test, build on `main` / `development`.

For cache/revalidate rationale in depth, see [ADR 001](docs/adr/001-cms-cache-and-revalidation.md).
