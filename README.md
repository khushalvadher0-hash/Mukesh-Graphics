# Mukesh Graphics - Premium Packaging Website

A production-ready React + TypeScript website for Mukesh Graphics, a premium packaging design and manufacturing company with pan-India reach.

## 🎨 Design System

- **Primary Color**: `#E67E22` (Premium Orange)
- **Secondary Color**: `#0B1220` (Deep Navy)
- **Background**: `#FFFFFF` (White)
- **Surface**: `#F8FAFC` (Light Slate)
- **Text**: `#0F172A` (Dark Gray)
- **Muted**: `#64748B` (Medium Gray)
- **Border**: `#E2E8F0` (Light Gray)
- **Typography**: Inter font family (400, 500, 600, 700, 800 weights)

## 🚀 Tech Stack

- **React 18** - UI framework
- **TypeScript** - Type safety
- **Vite 5** - Build tool & dev server
- **Tailwind CSS 3** - Utility-first styling
- **Framer Motion 11** - Advanced animations
- **Lucide React** - Icon library
- **React Router 6** - Client-side routing
- **React Intersection Observer** - Scroll reveal detection

## 📁 Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── ui/              # Base UI primitives
│   │   ├── Button.tsx
│   │   ├── Input.tsx
│   │   ├── Badge.tsx
│   │   └── SectionHeading.tsx
│   ├── Navbar.tsx       # Sticky navigation
│   ├── Footer.tsx       # Multi-column footer
│   ├── ProductCard.tsx  # Product showcase
│   ├── PortfolioCard.tsx # Portfolio item
│   ├── TestimonialCard.tsx
│   └── QuoteForm.tsx    # Contact inquiry form
│
├── sections/            # Page sections
│   ├── Hero.tsx         # Hero with split layout
│   ├── Counters.tsx     # Animated statistics
│   ├── Clients.tsx      # Logo marquee
│   ├── Products.tsx     # Product grid
│   ├── Portfolio.tsx    # Filtered portfolio masonry
│   ├── WhyChooseUs.tsx  # Benefit cards
│   ├── Infrastructure.tsx # Manufacturing story
│   ├── Process.tsx      # 6-step process (dark)
│   ├── Industries.tsx   # Industry categories
│   ├── Testimonials.tsx # Carousel
│   ├── Contact.tsx      # Contact details + WhatsApp
│   └── CTA.tsx          # Call-to-action banner
│
├── pages/               # Route pages
│   ├── Home.tsx         # Homepage
│   ├── Products.tsx     # Product showcase page
│   ├── Portfolio.tsx    # Portfolio page
│   ├── About.tsx        # About + infrastructure
│   └── Contact.tsx      # Contact form page
│
├── layouts/             # Layout wrappers
│   └── MainLayout.tsx   # Navbar + Footer wrapper
│
├── data/                # Static data
│   ├── products.ts      # Product definitions
│   ├── portfolio.ts     # Portfolio items
│   ├── testimonials.ts  # Client testimonials
│   ├── stats.ts         # Achievement metrics
│   └── industries.ts    # Industry categories
│
├── animations/          # Framer Motion variants
│   └── variants.ts      # Reusable animation presets
│
├── hooks/               # Custom React hooks
│   └── useScrollReveal.ts # Intersection observer hook
│
├── utils/               # Utility functions
│   └── navLinks.ts      # Navigation structure
│
├── styles/              # Global CSS
│   └── globals.css      # Base + Tailwind directives
│
├── App.tsx              # Router setup
└── main.tsx             # React DOM mount point
```

## 🎯 Key Features

### Design & UX
- ✅ Premium glassmorphism cards with backdrop blur
- ✅ Smooth scroll-triggered animations
- ✅ Responsive mobile-first architecture
- ✅ Sticky navbar with scroll detection
- ✅ Hover lift effects on interactive elements
- ✅ Staggered animations for lists
- ✅ Parallax effects on hero section

### Performance
- ✅ Lazy loading images with `loading="lazy"`
- ✅ Code splitting with React Router
- ✅ Optimized Tailwind CSS (~4.6KB gzipped)
- ✅ Optimized JavaScript (~101KB gzipped)
- ✅ SEO-friendly semantic HTML
- ✅ Meta tags for social sharing

### Sections Included
- 🏠 **Hero** - Split layout with trust indicators
- 📊 **Counters** - Animated statistics (16+ years, 4000+ clients, etc.)
- 🏢 **Clients** - Infinite logo marquee animation
- 📦 **Products** - Responsive product grid with badges
- 🎨 **Portfolio** - Filterable masonry layout with 6 categories
- ⭐ **Why Choose Us** - 4-benefit premium cards
- 🏭 **Infrastructure** - Manufacturing story with capabilities
- ⚙️ **Process** - 6-step dark premium section
- 🏪 **Industries** - 6 industry category cards
- 💬 **Testimonials** - Auto-rotating carousel
- 📞 **Contact** - Details + WhatsApp CTA
- 📢 **CTA** - Call-to-action banner

### Pages
- 📄 **Home** - Full homepage with all sections
- 🛍️ **Products** - Dedicated products page
- 🎯 **Portfolio** - Portfolio showcase with filters
- ℹ️ **About** - Company info + manufacturing
- 📧 **Contact** - Quote form + contact details

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Development Server
```bash
npm run dev
# Opens http://localhost:5173
```

### Production Build
```bash
npm run build
# Creates dist/ folder with optimized assets
```

## 🎨 Customization

### Colors
Edit `tailwind.config.js`:
```javascript
theme: {
  extend: {
    colors: {
      primary: '#E67E22',      // Orange
      secondary: '#0B1220',    // Navy
      surface: '#F8FAFC',      // Light surface
      body: '#0F172A',         // Dark text
      muted: '#64748B',        // Gray text
      border: '#E2E8F0',       // Light border
    },
  },
}
```

### Typography
All text uses `font-sans` (Inter). Update in `tailwind.config.js`:
```javascript
fontFamily: {
  sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
}
```

### Content
- **Products**: Edit `src/data/products.ts`
- **Portfolio**: Edit `src/data/portfolio.ts`
- **Testimonials**: Edit `src/data/testimonials.ts`
- **Stats**: Edit `src/data/stats.ts`
- **Industries**: Edit `src/data/industries.ts`
- **Navigation**: Edit `src/utils/navLinks.ts`

### Images
See `IMAGE_ASSETS_GUIDE.md` for:
- Adding product images
- Portfolio image replacement
- Logo customization
- Image optimization tips

## 🎬 Animation Variants

Pre-built Framer Motion animations in `src/animations/variants.ts`:

```typescript
fadeInUp      // Fade in + slide up (300ms reveal)
fadeIn        // Pure fade animation
staggerChildren // Stagger children animations
floatUp       // Float up animation
largeReveal   // Large title reveal (900ms)
```

Usage:
```tsx
<motion.div
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.2 }}
  variants={fadeInUp}
>
  Content
</motion.div>
```

## 📱 Responsive Breakpoints

Built with mobile-first approach using Tailwind breakpoints:

- `sm`: 640px - Small devices
- `md`: 768px - Tablets
- `lg`: 1024px - Laptops
- `xl`: 1280px - Large screens

## ♿ Accessibility

- ✅ Semantic HTML (h1, h2, section, nav, footer)
- ✅ Alt text on all images
- ✅ ARIA labels on interactive elements
- ✅ Focus ring styles on buttons
- ✅ Keyboard navigation support
- ✅ Color contrast compliance (WCAG AA)

## 🔍 SEO Features

- ✅ Meta description in index.html
- ✅ Semantic HTML structure
- ✅ Open Graph tags ready
- ✅ robots.txt for crawler guidance
- ✅ sitemap.xml (update with real URLs)
- ✅ Descriptive page titles
- ✅ Mobile-responsive design

## 📊 Performance Metrics

Current optimized output:
- **HTML**: 0.94 KB (gzipped)
- **CSS**: 21.09 KB (gzipped: 4.60 KB)
- **JavaScript**: 324.46 KB (gzipped: 101.60 KB)
- **Total**: ~347 KB (gzipped: ~106 KB)

Recommendations:
- Use images (add ~500-800KB total for all assets)
- Consider CDN for image delivery
- Enable gzip compression on server
- Use HTTP/2 for multiplexing

## 🔗 Routes

- `/` - Homepage
- `/products` - Products page
- `/portfolio` - Portfolio page
- `/about` - About page
- `/contact` - Contact page

Smooth hash-based linking:
- `/#clients` - Jump to clients section
- `/#products` - Jump to products section
- `/#industries` - Jump to industries section
- `/#infrastructure` - Jump to infrastructure section

## 📦 Dependencies

### Core
- `react@^18.3.1` - UI framework
- `react-dom@^18.3.1` - React rendering
- `react-router-dom@^6.14.1` - Routing

### Animations & UI
- `framer-motion@^11.0.0` - Advanced animations
- `lucide-react@^0.498.0` - Icon library
- `react-intersection-observer@^9.4.4` - Scroll detection

### Styling
- `tailwindcss@^3.4.5` - Utility CSS
- `postcss@^8.4.45` - CSS processing
- `autoprefixer@^10.4.19` - CSS vendor prefixes

### Build Tools
- `vite@^5.4.0` - Build tool
- `@vitejs/plugin-react@^4.3.1` - React support
- `typescript@^5.6.0` - Type checking

## 🛠️ Available Scripts

```bash
npm run dev       # Start development server
npm run build     # Production build
npm run preview   # Preview production build locally
```

## 📝 Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🐛 Debugging

### Development
- Vite dev server with hot module replacement
- TypeScript strict mode for type safety
- React DevTools browser extension recommended

### Build Issues
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install

# Clear Vite cache
rm -rf dist
npm run build
```

## 📄 License

This project is proprietary. All rights reserved.

## 🤝 Support

For questions or updates, contact: hello@mukeshgraphics.in

---

**Built with ❤️ for premium packaging excellence.**
