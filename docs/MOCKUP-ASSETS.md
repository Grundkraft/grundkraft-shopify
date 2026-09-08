# GRUNDKRAFT Master-Mockup Assets

The original GRUNDKRAFT mockup is the visual master reference for the storefront.

## Current production hero

- `assets/gk-hero-people-v2.webp`: 1254 × 1254, approximately 246 KB, newly generated from the supplied composition reference. Used by the default hero. The old raster exports below failed decoding during refinement and are retained only as legacy source history.
- `assets/gk-concrete.svg`: seamless procedural mineral texture for the outer page frame.
- See `VISUAL-REFINEMENT.md` for provenance, prompt and validation limits.

## Earlier extracted / recreated assets stored in the theme

- `assets/gk-hero-people-metal.jpg`
  - Extracted from the supplied master mockup.
  - Contains the people group and the metallic G composition used on the right side of the hero.
  - Superseded by the v2 WebP for the default hero.

- `assets/gk-metal-g.svg`
  - Recreated metallic G backdrop motif for scalable use.
  - Steel gradient, edge lighting and subtle texture.

- `assets/gk-logo.svg`
  - Recreated GRUNDKRAFT logo lockup based on the mockup.
  - Used by the header when no custom Shopify logo is selected.

- `assets/product-tub-tagwerk.svg`
- `assets/product-tub-standfest.svg`
- `assets/product-tub-kraftreserve.svg`
  - Product container family preserved as reusable vector assets.

## Material / background system

Implemented in `assets/mockup.css`:

- concrete outer page background
- dark central storefront shell
- translucent / metallic card surfaces
- directional gradients
- warm orange glow zones
- subtle halftone / material texture
- softened panel borders and inset highlights
- rounded industrial cards close to the master mockup

## Structural elements taken from the mockup

- compact dark header inside a concrete page shell
- hero with copy on the left and people / metallic G / TAGWERK composition on the right
- three compact everyday-pillar cards
- TAGWERK product hero as a raised material panel
- horizontal product toolbox cards

## Rule

Future homepage styling should treat the master mockup as the primary visual reference. Avoid large uninterrupted pure-black surfaces. Use layered anthracite surfaces, concrete surroundings, translucent depth and restrained orange accents instead.
