# Industrial refinement — 8 September 2026

Basis: `development` at `9d87b0154373e2abac56fbb02f8fbc348b9b1711`, checked out from GitHub. The supplied master mockup and existing design, container and launch documents informed this revision.

## What changes

- Keep the dark storefront inside a visible mineral-grey concrete frame, including a narrow frame on mobile.
- Use Shopify's `oswald_n7` heading font through the existing font picker and `font_face`; retain the merchant's ability to change fonts. No font binaries are bundled.
- Load `mockup.css` last as the shared finish layer. Brushed graphite, restrained edge lighting and tight shadows extend to the homepage, product/collection cards, cart and contact/content panels.
- Place the TAGWERK feature and toolbox immediately after the three pillars. All other homepage sections remain available in their existing order.
- Disable the default duplicate orange announcement in the header group; merchants can still enable and edit the announcement section.
- Preserve the three product colors and shared geometry. New SVGs use wider ribbed lids, rounded shoulders, cylindrical label shading, curved diagonal color fields, vector G marks and outlined Oswald product names. The artwork contains no recipe, weight, dosage or origin claims. These remain packaging concepts, not print-ready manufacturer artwork.
- Recreate the damaged legacy hero crop as `gk-hero-people-v2.webp`, a 1254 × 1254 image, approximately 246 KB. Existing merchant-selected hero images remain supported.
- Add keyboard focus to the toolbox region, responsive arrow states, computed card gap and reduced-motion-aware scrolling.
- Run the existing Theme Check action on pull requests targeting `development` as well as `main`.

## Validation and limits

- Shopify CLI Theme Check: empty JSON result (`[]`), exit 0.
- Local Chromium/Chrome renders of the actual Liquid sections using LiquidJS, schema defaults and the repository's homepage settings.
- Homepage widths: 1440, 1024, 768, 390 and 320 px. No horizontal page overflow, failed decoded images or JavaScript exceptions. Mobile menu opening/Escape and toolbox scrolling passed.
- Product fixture at 1440 and 390 px: switching to an unavailable variant updates price, disables add-to-cart and updates the URL; switching back re-enables add-to-cart.
- Product, empty collection, empty cart and contact layouts render at 1440 and 390 px without horizontal page overflow.
- Desktop/mobile screenshots inspected for hero composition, product family and product-page layout.
- The local preview uses synthetic product data and substitutes Shopify form wrappers. It cannot validate Shopify checkout, payments, real inventory, form submission or a theme-editor session. The previously described unpublished Shopify preview theme was not accessed or deployed to. Run the existing launch checklist in an authenticated unpublished theme before merging or publishing.

## Asset provenance

Hero generated with the built-in Imagegen tool using the supplied mockup as composition reference. This is generated brand artwork; it does not document real customers or endorsements. The uncompressed source is supplied separately with the local deliverables. Production uses the optimized WebP only.

Final prompt:

> Use case: photorealistic-natural. Asset type: production website hero photograph for existing GRUNDKRAFT industrial brand. Input image is the user's master website composition reference; recreate ONLY the people group with monumental brushed metallic G behind them, no website UI. Keep the reference's grounded real-life mood and similar composition: left a serious woman in tan work overalls, center a warm smiling mother in pale neutral blouse and jeans holding her young child, right a smiling older white-haired bearded gardener in green check shirt and dark green apron with gloves. Waist-up group, close together, visible natural faces and realistic hands, no gym styling. Large heavy beveled brushed steel letter G fills background behind heads on charcoal #121313. The group sits slightly right, with a little dark space on lower left where a separate vector product tub will be overlaid by CSS. Do not draw any product tubs or packages in people's hands or foreground; hands rest naturally, mother holds child. Subtle garden greenery at far lower right as in reference. Realistic directional studio/daylight from upper left, detailed skin fabric and weathered steel, restrained premium industrial editorial photography. Square composition, tightly framed, dark edges blending to #121313. Output only the photographic asset, no captions, labels, interface, logos other than the large steel G, borders, watermark or website. This is a clean high-resolution replacement of the damaged existing hero crop.

Typography: [Shopify font library](https://shopify.dev/docs/storefronts/themes/architecture/settings/fonts), with Oswald outline source from [Google Fonts](https://github.com/google/fonts/tree/main/ofl/oswald). SVG display lettering is outlined for consistent image rendering. The merchant-selected theme font controls HTML headings independently.
