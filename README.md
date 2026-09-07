# GRUNDKRAFT Shopify Theme

Native Shopify Online Store 2.0 theme for **GRUNDKRAFT**.

**Claim:** Gemacht für Macher.  
**Design:** Industrial Editorial / Industrial Comic Premium.

## Branches

- `main` = stable
- `development` = active Shopify-connected development theme

Shopify should stay connected to `development` while the theme is being built and tested.

## What the theme supports

- Homepage storytelling and product system
- Product pages with variants, media, price, availability, add-to-cart and dynamic checkout
- Collections with sorting and pagination
- Cart and checkout handoff
- Search
- Blog and articles
- Standard pages
- Contact form template
- Password page
- Gift card page
- Newsletter
- Responsive/mobile navigation
- Customer account link when enabled in Shopify
- SEO/social metadata
- Custom Liquid section for integrations/apps

## Automatic product hookup

The homepage tries to connect the GRUNDKRAFT mockup products to real Shopify products automatically.

Preferred product handles:

- `tagwerk`
- `standfest`
- `kraftreserve`

If these handles aren't present, the theme also looks for the names in product titles.

## Optional product metafield

For an expandable ingredients block on product pages:

`custom.ingredients`

## Quality check

`.github/workflows/theme-check.yml` runs Shopify Theme Check on pushes to `development` and `main`.

## Launch

See [`docs/LAUNCH-CHECKLIST.md`](docs/LAUNCH-CHECKLIST.md) for the Shopify Admin tasks that still require real merchant data, such as products, pricing, shipping, payments and legal policies.
