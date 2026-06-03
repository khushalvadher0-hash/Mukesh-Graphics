# Project File Structure Reference

Complete guide to all files in the Mukesh Graphics website project.

## Root Configuration Files

```
/
├── package.json              # NPM dependencies and scripts
├── tsconfig.json             # TypeScript compiler configuration
├── tsconfig.node.json        # TypeScript config for build files
├── tailwind.config.js        # Tailwind CSS theme configuration
├── postcss.config.js         # PostCSS plugins for CSS processing
├── vite.config.ts            # Vite bundler configuration
├── index.html                # HTML entry point (SPA root)
├── .gitignore                # Git ignore patterns
│
├── README.md                 # Project overview & documentation
├── QUICK_START.md            # Setup & deployment guide
├── IMAGE_ASSETS_GUIDE.md     # Image management guide
├── DEVELOPMENT_GUIDE.md      # Developer reference
└── PROJECT_FILES.md          # This file
```

## Public Assets (`/public`)

Static files served as-is, not processed by build tools.

```
/public
├── favicon.ico               # Browser tab icon
├── robots.txt                # Search engine crawler rules
├── sitemap.xml               # SEO sitemap (update URLs manually)
├── logo.svg                  # Brand logo (SVG placeholder)
├── product-placeholder.svg   # Product card image template
├── portfolio-placeholder.svg # Portfolio item image template
│
├── /images/                  # (Create when adding real images)
│   ├── /products/           # Product images directory
│   │   ├── fresh-food-wraps.jpg
│   │   ├── cool-treat-cartons.jpg
│   │   ├── luxury-beauty-tubes.jpg
│   │   └── retail-stand-up-bags.jpg
│   ├── /portfolio/          # Portfolio images directory
│   │   ├── masala-sauces.jpg
│   │   ├── cream-dream.jpg
│   │   ├── grocery-shelf.jpg
│   │   ├── herbal-care.jpg
│   │   ├── glow-label.jpg
│   │   └── cosmetic-bloom.jpg
│   └── /hero/               # Hero section images
│       └── showcase.jpg
```

## Source Code (`/src`)

All application source code, organized by feature.

### `/src/components`

Reusable React components for UI elements.

```
/src/components
├── Navbar.tsx               # Sticky navigation with mobile menu
├── Footer.tsx               # Multi-column footer with newsletter
├── ProductCard.tsx          # Product showcase card (with image)
├── PortfolioCard.tsx        # Portfolio item card (with image)
├── TestimonialCard.tsx      # Client testimonial card
├── QuoteForm.tsx            # Contact inquiry form component
│
└── /ui                      # Base UI primitives
    ├── Button.tsx           # Primary button component (href or submit)
    ├── Input.tsx            # Form input field component
    ├── Badge.tsx            # Category/label badge component
    └── SectionHeading.tsx   # Reusable section title component
```

**Key Component Patterns:**
- Props typed with TypeScript interfaces
- Framer Motion animations on hover/viewport
- Tailwind CSS for styling
- Lazy loading on images

### `/src/sections`

Full-page sections composable into pages.

```
/src/sections
├── Hero.tsx                 # Split layout hero with package mockups
├── Counters.tsx             # Animated statistics section (16+, 4000+, etc.)
├── Clients.tsx              # Infinite marquee logo carousel
├── Products.tsx             # 4-column responsive product grid
├── Portfolio.tsx            # 3-column masonry with category filters
├── WhyChooseUs.tsx          # 4-benefit card grid
├── Infrastructure.tsx       # Manufacturing capability showcase
├── Process.tsx              # 6-step dark process cards
├── Industries.tsx           # 6-industry interactive cards
├── Testimonials.tsx         # Auto-rotating testimonial carousel
├── Contact.tsx              # Contact details + WhatsApp + map placeholder
└── CTA.tsx                  # Call-to-action banner with button
```

**Section Characteristics:**
- Reusable with scroll-reveal animations
- Use `useScrollReveal` hook for intersection detection
- Staggered child animations
- Responsive grid layouts

### `/src/pages`

Full page components that combine multiple sections.

```
/src/pages
├── Home.tsx                 # Homepage with all sections
├── Products.tsx             # Dedicated products page
├── Portfolio.tsx            # Dedicated portfolio page
├── About.tsx                # About company + infrastructure
└── Contact.tsx              # Full contact page with form
```

**Route Mapping:**
- `/` → Home.tsx
- `/products` → Products.tsx
- `/portfolio` → Portfolio.tsx
- `/about` → About.tsx
- `/contact` → Contact.tsx

### `/src/layouts`

Layout wrappers for consistent structure.

```
/src/layouts
└── MainLayout.tsx           # Wraps Navbar + children + Footer
```

### `/src/data`

Static data definitions (JSON-like TypeScript).

```
/src/data
├── products.ts              # Product items with images
├── portfolio.ts             # Portfolio case studies with images
├── testimonials.ts          # Client testimonials quotes
├── stats.ts                 # Achievement metrics (16+, 4000+, etc.)
└── industries.ts            # Industry categories with descriptions
```

**Data Structure:**
- TypeScript types exported
- Default exports as arrays
- Easy to fetch from API and replace

### `/src/animations`

Reusable Framer Motion animation variants.

```
/src/animations
└── variants.ts              # Animation presets (fadeInUp, stagger, etc.)
```

**Available Animations:**
- `fadeInUp` - Fade + slide up (300ms)
- `fadeIn` - Pure fade (800ms)
- `staggerChildren` - Stagger delay for children
- `floatUp` - Float animation
- `largeReveal` - Title reveal (900ms)

### `/src/hooks`

Custom React hooks for common logic.

```
/src/hooks
└── useScrollReveal.ts       # Wrapper for react-intersection-observer
```

**Hook Usage:**
```typescript
const { ref, inView } = useScrollReveal()
```

### `/src/utils`

Utility functions and constants.

```
/src/utils
└── navLinks.ts              # Navigation menu structure
```

### `/src/styles`

Global CSS and Tailwind directives.

```
/src/styles
└── globals.css              # Global styles + .card-glass + .fade-mask
```

**Global Classes:**
- `.card-glass` - Glassmorphism card style
- `.fade-mask` - Gradient fade effect
- `.hero-gradient` - Hero section background

### `/src/App.tsx`

Root component with React Router setup.

```typescript
// Routes defined here
// MainLayout wraps all pages
```

### `/src/main.tsx`

React DOM entry point.

```typescript
// Mounts App to #root div
// Imports global.css
```

## Build Output (`/dist`)

Generated during production build (do not edit).

```
/dist
├── index.html               # Minified HTML
├── /assets
│   ├── index-[hash].js     # Bundled & minified JavaScript
│   └── index-[hash].css    # Bundled & minified CSS
└── /                        # Public files copied here
```

## File Size Reference

### Source Code (~32 files)
- Components: ~15 files
- Sections: ~12 files
- Data/Utilities: ~5 files
- **Total**

### Build Output
- **JavaScript**: 324.46 KB → 101.60 KB (gzipped)
- **CSS**: 21.09 KB → 4.60 KB (gzipped)
- **HTML**: 0.94 KB → 0.50 KB (gzipped)

## Key Dependencies

### Production
| Package | Version | Purpose |
|---------|---------|---------|
| react | ^18.3.1 | UI framework |
| react-dom | ^18.3.1 | React rendering |
| react-router-dom | ^6.14.1 | Client-side routing |
| framer-motion | ^11.0.0 | Advanced animations |
| lucide-react | ^0.498.0 | Icon library |
| react-intersection-observer | ^9.4.4 | Scroll detection |

### Development
| Package | Version | Purpose |
|---------|---------|---------|
| vite | ^5.4.0 | Build tool |
| @vitejs/plugin-react | ^4.3.1 | React support in Vite |
| tailwindcss | ^3.4.5 | Utility CSS framework |
| typescript | ^5.6.0 | Type safety |
| @types/react | ^18.3.4 | React types |
| @types/react-dom | ^18.3.0 | React DOM types |

## Environment Variables

### Development
```
VITE_API_URL=http://localhost:3000
VITE_ENABLE_ANALYTICS=false
```

### Production
```
VITE_API_URL=https://api.mukeshgraphics.com
VITE_ENABLE_ANALYTICS=true
```

Access with: `import.meta.env.VITE_VARIABLE_NAME`

## Git & Version Control

```
.gitignore              # Files to ignore
```

**Standard ignores:**
- `node_modules/`
- `dist/`
- `.env.local`
- `*.log`

## Important Notes

### Image Paths
- Public images: `/image.svg` (starts with `/`)
- No `src/` prefix for public folder
- Images in `public/` are copied to `dist/` as-is

### TypeScript
- All components use `.tsx` extension
- Data files use `.ts` extension
- Strict mode enabled
- Path aliases: `@/*` maps to `src/*`

### Build
- `npm run build` produces optimized output
- CSS is auto-purged (only used styles included)
- JavaScript is tree-shaken (unused code removed)
- Images should be manually optimized

### Tailwind
- Configuration in `tailwind.config.js`
- Content paths: `./src/**/*.{ts,tsx}`
- Color theme: Custom primary/secondary colors
- Responsive: Mobile-first with `sm`, `md`, `lg`, `xl` breakpoints

## Next Steps

1. **Add Images**: See `IMAGE_ASSETS_GUIDE.md`
2. **Update Content**: Edit files in `/src/data`
3. **Customize Colors**: Update `tailwind.config.js`
4. **Deploy**: See `QUICK_START.md`
5. **Extend**: See `DEVELOPMENT_GUIDE.md`

---

**File Structure maintained for scalability and team collaboration.** ✨
