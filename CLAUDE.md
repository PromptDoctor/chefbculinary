# DDM Astro Starter — Build Instructions for Claude Code

This is the Digital Downtown Main starter for building client websites.
Every client site is an Astro 5 static site, GEO/SEO-optimized, deployed to Netlify.

## The workflow you're slotting into
The client design arrives as an HTML file + screenshots from Claude Design.
Your job: convert that design into this Astro structure, populated and deploy-ready.

## Non-negotiable rules

### Rendering
- Static rendering by default. The ONLY client-hydrated islands are:
  the contact form, the mobile menu, and (if needed) interactive accordions.
- FAQ accordions use native <details>/<summary> — no JavaScript, no React.
- All body copy, headings, and stats MUST be present in the static HTML
  output. Verify with `npm run build` then inspect dist/index.html.

### Stats and animated numbers
- Count-up animations MUST render their FINAL value in static HTML.
- Never let a stat render as "0%" / "0x" in the source. Crawlers read the
  static value. Animate from the real number or to it — never from zero.

### Client data
- ALL client-specific values live in src/config/business.ts.
- Never hardcode name, address, phone, email, hours into components.
- Name/Address/Phone (NAP) must be byte-identical everywhere it appears:
  schema, visible copy, footer, meta tags.

### Schema
- Schema.astro emits LocalBusiness, Organization, Service, FAQPage JSON-LD.
- All values come from business.ts. Never put markdown link syntax in JSON.
- Validate every build: Google Rich Results Test + validator.schema.org.

### Images
- All images local in public/assets/ — never hotlink remote URLs.
- Use Astro's <Image /> from astro:assets so images optimize to WebP/AVIF.
- Lowercase filenames, hyphens not underscores. Netlify is case-sensitive.

### Before declaring done
- Run `npm run build`. Zero errors.
- Work through STEP5-CHECKLIST.md. Every item.
- Never commit node_modules/, dist/, .astro/, .claude/, or reference files.

## Deploy
- Static output to dist/. netlify.toml is pre-configured.
- Each client = its own repo (from this template) = its own Netlify site.