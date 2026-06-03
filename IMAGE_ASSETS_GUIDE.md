# Mukesh Graphics - Image Assets Guide

## Asset Structure

All image assets are stored in `public/` directory for public static assets and can be referenced throughout the application.

### Current Placeholder Images

- `/logo.svg` - Mukesh Graphics brand logo
- `/product-placeholder.svg` - Product card placeholder
- `/portfolio-placeholder.svg` - Portfolio item placeholder

## How to Add Real Images

### 1. Product Images

Replace placeholder images in `src/data/products.ts`:

```typescript
// Current
export const products = [
  { 
    // ... other fields
    image: '/product-placeholder.svg' 
  },
]

// To replace with real images:
export const products = [
  { 
    // ... other fields
    image: '/images/products/fresh-food-wraps.jpg' 
  },
]
```

**Then add your actual image files to:**
- `public/images/products/fresh-food-wraps.jpg`
- `public/images/products/cool-treat-cartons.jpg`
- `public/images/products/luxury-beauty-tubes.jpg`
- `public/images/products/retail-stand-up-bags.jpg`

### 2. Portfolio Images

Replace placeholder images in `src/data/portfolio.ts`:

```typescript
export const portfolio = [
  { 
    // ... other fields
    image: '/images/portfolio/masala-sauces.jpg' 
  },
  // ... more items
]
```

**Then add your actual image files to:**
- `public/images/portfolio/masala-sauces.jpg`
- `public/images/portfolio/cream-dream.jpg`
- `public/images/portfolio/grocery-shelf.jpg`
- `public/images/portfolio/herbal-care.jpg`
- `public/images/portfolio/glow-label.jpg`
- `public/images/portfolio/cosmetic-bloom.jpg`

### 3. Logo

Replace `public/logo.svg` with your actual brand logo. Update size expectations:
- Width: 40px (h-10 w-10 in Tailwind)
- Should be square or rectangular
- Support transparent backgrounds

### 4. Hero Images

The hero section currently uses product placeholders. To add a hero showcase image:

1. Update `src/sections/Hero.tsx` to reference a dedicated hero image
2. Add your image to `public/images/hero/showcase.jpg`
3. Update the img src attributes in the grid

## Image Optimization Best Practices

### File Formats

- **Products & Portfolio**: JPG (80-85% quality) or WebP for better compression
- **Logo**: SVG (preferred) or PNG with transparency
- **Icons**: Already using Lucide React icons, no additional files needed

### Image Sizes

**Product Cards**: 
- Recommended: 400x300px (4:3 aspect ratio)
- Max file size: 100KB per image

**Portfolio Cards**: 
- Recommended: 600x450px (4:3 aspect ratio)
- Max file size: 150KB per image

**Logo**: 
- SVG: No size limit (vector)
- PNG: 200x200px minimum for crisp rendering

### Lazy Loading

All images are already configured with `loading="lazy"` in the components for better performance.

## Vite Image Import (Alternative Method)

Instead of public folder references, you can also import images as modules:

```typescript
// In data files or components
import productImage from '@/assets/product1.jpg'

export const products = [
  {
    // ... other fields
    image: productImage
  }
]
```

This method:
- Automatically optimizes images
- Includes hash in filename for cache busting
- Better for tree-shaking unused images
- Requires proper module setup

## Creating Directories

```bash
# Create image directories
mkdir -p public/images/products
mkdir -p public/images/portfolio
mkdir -p public/images/hero
```

## Testing Images Locally

```bash
# Start dev server to test images
npm run dev

# Visit http://localhost:5173
# All images should load from public/ folder
```

## Build Output

Images in the `public/` folder are copied as-is to `dist/` during build.
Images imported as modules are processed and optimized by Vite.

## Responsive Images

To add responsive images with srcset:

```tsx
<img 
  src={image} 
  alt="Description"
  srcSet={`${image}?w=400 400w, ${image}?w=600 600w`}
  sizes="(max-width: 640px) 400px, 600px"
  loading="lazy" 
/>
```

## Performance Metrics

Current build includes:
- JS: 324.46 KB (gzipped: 101.60 KB)
- CSS: 21.09 KB (gzipped: 4.60 KB)

Adding optimized images:
- Each JPG: +30-100KB per image
- Total for all products + portfolio: ~500-800KB additional

Recommendations:
- Use WebP format where possible (30-40% smaller)
- Implement image compression in build pipeline
- Consider CDN for image delivery (Cloudinary, Imgix)
