# La Miche — High-End Bakery Website Rebuild

## Goal
Consolidate the best elements from `lamiche-v2.html` (rich SVG illustrations, AI assistant, World Breads, full 26-product catalog, cart system, canvas hero) and `bakery-website.html` (clean editorial design, hero image grid, process timeline, gallery) — guided by both deep-research reports — into a **single, production-quality Next.js website** using the existing `lamiche-nextjs` project.

The result should feel ultra-premium, rivaling sites like Debaere, Magnolia Bakery, and Janjou Patisserie.

## Current Issues Found

1. **Next.js page is incomplete** — only has ~11 products, no cart, no footer, no testimonials, no process, no gallery, no subscribe, no AI section, no regional breads
2. **Hero uses a single Unsplash image** — the HTML versions have much richer hero treatments (animated canvas in v2, image grid in v1)
3. **No interactivity** — cart badge hardcoded to "3", no add-to-cart logic, no toast notifications
4. **Missing sections** — About/Story, Specials, Process, Testimonials, Subscribe, Contact/Info, Gallery, Footer are all absent
5. **Missing product data** — only 3 categories vs the full taxonomy (8 categories, 26+ products)
6. **`bakery-website.html` hero bug** — uses `<?= heroSVG('bread') ?>` PHP template syntax that doesn't render in HTML

## Proposed Changes

### Architecture

The rebuild will use a **component-based system design** with clear separation:

```
app/
├── layout.tsx          — Root layout with fonts, metadata
├── globals.css         — Tailwind directives + custom animations + design tokens
├── page.tsx            — Main page composing all sections
├── components/
│   ├── Navbar.tsx      — Fixed navbar with scroll-aware styling & cart pill
│   ├── Hero.tsx        — Full-viewport hero with animated gradient + stats
│   ├── Ticker.tsx      — Scrolling marquee strip
│   ├── About.tsx       — Editorial split with images + signature
│   ├── Catalog.tsx     — Category filter tabs + product grid
│   ├── ProductCard.tsx — Individual product card with add-to-cart
│   ├── Specials.tsx    — Dark editorial specials grid
│   ├── Regional.tsx    — World Breads section with hover-fill cards
│   ├── Process.tsx     — 4-step "From Grain to Table" section
│   ├── Testimonials.tsx— 3-column testimonial cards
│   ├── Subscribe.tsx   — Terracotta CTA strip
│   ├── Contact.tsx     — 4-column info grid
│   ├── Gallery.tsx     — Masonry-style gallery grid
│   ├── Footer.tsx      — 4-column dark footer
│   ├── CartSidebar.tsx — Slide-over cart panel
│   └── Toast.tsx       — Toast notification system
├── lib/
│   ├── data.ts         — All product, specials, regional, testimonial data
│   └── cart-context.tsx— React context for cart state management
```

---

### Component Details

#### [NEW] `app/components/Navbar.tsx`
- Fixed position, blur backdrop, scroll-aware (transparent → solid)
- Logo, nav links (Menu, Specials, World Breads, Story, Gallery, Visit)
- Cart pill with animated count badge
- Mobile hamburger menu

#### [MODIFY] `app/page.tsx`
- Complete rewrite as a composition of all section components
- Add smooth scroll, intersection observer animations

#### [NEW] `app/components/Hero.tsx`
- Full-viewport section with animated gradient background (CSS gradients, no canvas — for SSR compat)
- Split layout: left copy + stats, right hero imagery via Unsplash
- Animated entry with staggered fade-in
- Stats row: "37+ Years Baking", "80+ Daily Items", "12K Happy Regulars"

#### [NEW] `app/components/Ticker.tsx`
- Auto-scrolling marquee with CSS animation
- 8 items repeated for seamless loop

#### [NEW] `app/components/About.tsx`
- Editorial split grid (image + text)
- Heritage story content from lamiche-v2
- Signature typography element
- CTA buttons

#### [NEW] `app/components/Catalog.tsx` + `ProductCard.tsx`
- Full 26-product catalog from lamiche-v2 data
- 8 category filter tabs with underline active state
- Product cards with Unsplash images, badges, allergen tags, add-to-cart
- Hover animations (lift + shadow + image zoom)

#### [NEW] `app/components/Specials.tsx`
- Dark section (brown background)
- Bento-style grid: 1 large + 3 small special cards
- Overlay text with gold accents

#### [NEW] `app/components/Regional.tsx`
- 5 world-bread region cards with emoji icons
- Hover fill animation (scale-up background)
- Tag-based items list

#### [NEW] `app/components/Process.tsx`
- 4-step horizontal process with connected line
- Circle number indicators
- Hover color transition

#### [NEW] `app/components/Testimonials.tsx`
- 3-column card grid with quote marks
- Star ratings, avatar initials, customer info

#### [NEW] `app/components/Subscribe.tsx`
- Terracotta background CTA
- Email input + subscribe button
- Background watermark text

#### [NEW] `app/components/Contact.tsx`
- 4-column info grid (Hours, Location, Phone, Delivery)
- SVG icons, clean typography

#### [NEW] `app/components/Gallery.tsx`
- CSS Grid masonry with 6 gallery items using Unsplash images
- Hover zoom + overlay + plus icon

#### [NEW] `app/components/Footer.tsx`
- Dark charcoal 4-column footer
- Brand description, shop links, about links, hours/address
- Social icons, bottom bar with copyright and legal links

#### [NEW] `app/components/CartSidebar.tsx`
- Slide-over panel from right
- Backdrop with blur
- Cart items with quantity controls
- Total + checkout button

#### [NEW] `app/components/Toast.tsx`
- Fixed bottom-right toast notification
- Auto-dismiss after 2.8s

#### [NEW] `app/lib/data.ts`
- All 26 products with Unsplash image URLs, complete category/allergen/badge data
- Specials, Regional, Process, Testimonials data arrays
- Ticker items, AI chips

#### [NEW] `app/lib/cart-context.tsx`
- React Context + useReducer for cart state
- Actions: addToCart, removeFromCart, changeQuantity, clearCart

#### [MODIFY] `app/globals.css`
- Custom keyframe animations (fadeUp, ticker, scrollPulse, addPop, blink)
- Smooth scroll on `html`
- Custom scrollbar styling
- Section reveal animation classes

#### [MODIFY] `app/layout.tsx`
- Wrap children with CartProvider
- Add Fraunces font alongside existing fonts for premium display type

> [!IMPORTANT]
> **Using Unsplash images instead of SVG illustrations** — The current HTML files use programmatic SVG bread/pastry illustrations which look abstract. For a high-end site, real food photography from Unsplash will be far more impactful. The `next.config.mjs` already allows Unsplash domains.

## Design System

| Token | Value | Usage |
|-------|-------|-------|
| `--ink` | `#1A120B` | Primary dark text |
| `--terra` | `#BF5A2F` | Primary accent (CTAs, highlights) |
| `--gold` | `#C8962A` | Secondary accent (specials, badges) |
| `--cream` | `#FAF5EC` | Section backgrounds |
| `--sage` | `#6B7C5A` | Badges, nature accent |
| `--white` | `#FDFAF6` | Page background |
| Font Display | Fraunces | Headlines, prices, logo |
| Font Serif | Libre Baskerville | Body quotes, italic text |
| Font Sans | Instrument Sans | Body text, UI elements |
| Border Radius | 4-12px | Cards and inputs |
| Animation Ease | `cubic-bezier(0.22,1,0.36,1)` | All transitions |

## Verification Plan

### Automated Tests
- `npm run build` — ensure Next.js compiles without errors
- `npm run dev` — launch and visually verify in browser

### Manual Verification
- Open in browser and verify all 12 sections render
- Test cart: add items, change quantity, remove, check total
- Test category filtering
- Test responsive: desktop (1440px), tablet (768px), mobile (375px)
- Test subscribe email validation
- Test smooth scroll navigation links
- Verify all Unsplash images load
