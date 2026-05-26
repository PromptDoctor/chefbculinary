# Step 5 Acceptance Checklist — DDM Client Site

Run every item before declaring a client site done. No exceptions.
This is the GEO/SEO quality gate. If an item fails, fix before deploy.

## 1. Configuration
- [ ] Every field in `src/config/business.ts` replaced — no "REPLACE ME" anywhere
- [ ] Phone is the real number; not 555-555-0100
- [ ] `domain` is the real domain, no trailing slash
- [ ] `geo` coordinates match the real address (verify in Google Maps)
- [ ] `businessType` is the specific schema.org subtype (e.g. "Plumber"), not generic "LocalBusiness"
- [ ] `description` is under 160 characters
- [ ] `openingHours` array is in schema format ("Mo-Fr 09:00-17:00")

## 2. Build & rendering
- [ ] `npm run build` completes with zero errors
- [ ] Open `dist/index.html` — all body copy, headings, services, FAQ present as real text
- [ ] No stat or number renders as "0" / "0%" / "0x" in the static HTML
- [ ] `dist/llms.txt` and `dist/robots.txt` generated and populated
- [ ] `dist/sitemap-index.xml` exists

## 3. Schema (GEO core)
- [ ] Paste live URL into Google Rich Results Test — LocalBusiness, Organization, FAQPage valid
- [ ] Paste JSON-LD into validator.schema.org — zero errors across all types
- [ ] No markdown link syntax inside any JSON string
- [ ] `sameAs` includes the client's Google Business Profile URL (if they have one)
- [ ] Schema `logo` is a raster image (PNG/JPG), not SVG

## 4. NAP consistency
- [ ] Business name byte-identical in schema, page copy, and footer
- [ ] Phone identical everywhere (same formatting)
- [ ] Email identical everywhere
- [ ] Address matches the client's Google Business Profile exactly

## 5. Images
- [ ] All images local in `public/assets/` — no remote/hotlinked URLs
- [ ] Filenames lowercase, hyphens not underscores
- [ ] `ogImage` is a 1200x630 JPG or PNG (not SVG) and the file exists
- [ ] Images use Astro `<Image />` for optimization where possible

## 6. Forms & islands
- [ ] `PUBLIC_WEB3FORMS_KEY` set in the client's `.env` (their own key)
- [ ] Test submission sent — confirm it lands in the client's inbox
- [ ] Honeypot (`botcheck`) field present
- [ ] Mobile menu opens/closes; FAQ accordion expands/collapses

## 7. Meta & social
- [ ] `<title>` and meta description present and unique
- [ ] Open Graph tags present — test the link preview (paste URL in Slack/iMessage)
- [ ] Canonical URL correct
- [ ] Favicon present

## 8. Performance (PageSpeed Insights)
- [ ] Performance, Accessibility, Best Practices, SEO all 90+
- [ ] Mobile score checked, not just desktop

## 9. Post-deploy
- [ ] Live site loads at the real domain over HTTPS
- [ ] View Source on the live page — copy is in the raw HTML
- [ ] Sitemap submitted to Google Search Console
- [ ] Sitemap submitted to Bing Webmaster Tools
- [ ] Client's Google Business Profile claimed/verified, NAP matches the site