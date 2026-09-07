# GRUNDKRAFT Design System

Status: **Master direction locked from current visual mockup**

This document preserves the visual rules before further Shopify development. The shop should feel like an independent premium work-performance brand, not a recolored standard ecommerce template.

## Brand core

- Dachmarke: **GRUNDKRAFT**
- Claim: **Gemacht für Macher.**
- Visual direction: **Industrial Editorial / Industrial Comic Premium**
- Tone: direct, robust, premium, modern, grounded

## Color system

### Core surfaces

- Main background: `#121212`
- Deep background: `#0D0E0F`
- Primary surface: `#1B1B1B`
- Raised surface: `#242424`
- Card surface: `#2B2B2B`
- Border: `#404040`
- Soft border: `rgba(255,255,255,.10)`

### Text

- Primary text: `#F3EFE7`
- Secondary text: `#C1BBB3`
- Muted text: `#918C86`

### Brand orange

- Primary orange: `#E15313`
- Bright orange / hover: `#F0641A`
- Dark orange: `#A83A08`

### Product accents

- TAGWERK: `#E15313`
- STANDFEST: `#355582`
- KRAFTRESERVE: `#456C4F`
- OMEGA-3: `#238F98`
- BASIS: `#4E7F4E`
- FEIERABEND: `#4C5288`

## Backgrounds

The visual world uses depth, not flat white space.

1. Base: nearly black matte background.
2. Industrial frame areas: concrete / mineral grey with subtle noise.
3. Raised sections: charcoal panels with a mild vertical gradient.
4. No glossy SaaS-style glassmorphism.
5. Texture should stay subtle enough that products and typography remain dominant.

Suggested background recipes:

```css
background: #121212;
background: linear-gradient(180deg,#202020 0%,#171717 100%);
background: radial-gradient(circle at 25% 15%,rgba(255,255,255,.035),transparent 38%),#121212;
```

## Semi-transparent layers

Use transparency to create physical depth, not futuristic glass effects.

- Dark overlay: `rgba(12,12,12,.72)`
- Heavy overlay: `rgba(12,12,12,.88)`
- Raised translucent card: `rgba(38,38,38,.82)`
- Light edge: `rgba(255,255,255,.08)`
- Orange glow only very sparingly: `rgba(225,83,19,.18)`

Backdrop blur may be used on the sticky header only, approximately `10px–14px`.

## Shapes

- Predominantly rectangular and sturdy
- Small radius only: `4px–8px`
- Hero frame can use clipped / stepped industrial corners
- Product cards should be tall, dense and box-like
- Buttons: rectangular, compact, no pills
- Thin inset borders and slightly lighter top edges create depth

Avoid oversized rounded cards and soft wellness styling.

## Shadows

Shadows are tight and heavy rather than soft and floating.

```css
box-shadow: 0 12px 30px rgba(0,0,0,.32);
box-shadow: inset 0 1px 0 rgba(255,255,255,.06), 0 8px 22px rgba(0,0,0,.28);
```

## Typography

Target look from the mockup:

### Display / headings

- condensed
- very bold
- industrial/editorial
- uppercase for major headlines
- tight line-height around `.92–1.0`

Desired visual family: **DIN Condensed / Barlow Condensed / Oswald / Trade Gothic Condensed direction**.

Do not bundle font files into the repository. Use a licensed or Shopify-supported equivalent at implementation time.

### Body

- neutral modern sans-serif
- compact
- high legibility on dark surfaces
- medium contrast against background

### Type hierarchy

- H1: large condensed uppercase
- H2: condensed bold
- Product names: uppercase, very bold
- Utility labels: uppercase, tracked slightly
- Body text: sentence case

## Images

Image direction:

- real people and real daily life
- work + family + movement + outdoor life
- no gym-model clichés
- cut-out or naturally composited subjects may overlap panels
- products may overlap hero imagery and card boundaries
- lighting should be directional, realistic and slightly gritty

The current mockup is the master composition reference for proportion and mood.

## Hero composition

- dark panel inside an industrial/concrete outer environment
- navigation embedded into same visual frame
- left side: headline + copy + CTAs
- right side: real people / real-life image
- product tub overlaps the transition between copy and image
- lower edge blends into next section instead of looking like a generic banner

## Cards

### Pillar cards

- 3-column desktop
- dark graphite surface
- fine grey border
- white line icon
- oversized semi-transparent number in upper corner
- bold uppercase title
- short subtitle

### Product cards / “Dein Werkzeugkasten”

- tall narrow cards
- product container centered
- product accent color only on container/label and small UI accents
- dark graphite card
- small circular utility icon top right
- product name near bottom
- minimal copy

## Motion

- subtle hover lift: 2–4 px max
- slight border/light change
- no bouncing, spinning or neon animations
- product carousel can slide smoothly
- respect `prefers-reduced-motion`

## Non-negotiables

- No white generic Shopify look
- No pastel wellness style
- No full-page orange overload
- No bodybuilder imagery
- No exaggerated comic characters
- No excessive gradients
- No glassmorphism-heavy UI
- No pill-shaped CTA system
- Product containers remain a key visual anchor
