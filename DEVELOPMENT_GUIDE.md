# Development Guide - Mukesh Graphics

This guide covers extending and maintaining the Mukesh Graphics website.

## Adding New Sections

### Step 1: Create Data File (if needed)

```typescript
// src/data/newFeature.ts
export type NewItem = {
  id: string
  title: string
  description: string
}

export const newItems: NewItem[] = [
  { id: '1', title: 'Item 1', description: 'Description' },
]
```

### Step 2: Create Section Component

```typescript
// src/sections/NewSection.tsx
import { motion } from 'framer-motion'
import { fadeInUp, staggerChildren } from '../animations/variants'
import { newItems } from '../data/newFeature'

export default function NewSection() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerChildren}
          className="space-y-12"
        >
          {newItems.map((item) => (
            <motion.div
              key={item.id}
              variants={fadeInUp}
              className="card-glass rounded-[32px] border border-border p-8"
            >
              <h3 className="text-xl font-semibold text-body">{item.title}</h3>
              <p className="mt-4 text-base text-muted">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
```

### Step 3: Add to Home Page

```typescript
// src/pages/Home.tsx
import NewSection from '../sections/NewSection'

export default function Home() {
  return (
    <>
      {/* ... other sections */}
      <NewSection />
    </>
  )
}
```

## Creating Reusable Components

### Card Component Pattern

```typescript
// src/components/MyCard.tsx
import { motion } from 'framer-motion'

interface MyCardProps {
  title: string
  description: string
  icon: React.ReactNode
}

export default function MyCard({ title, description, icon }: MyCardProps) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="card-glass group rounded-[32px] border border-border p-8 transition hover:border-primary/40"
    >
      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-3xl bg-primary/10 text-primary">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-body">{title}</h3>
      <p className="mt-4 text-sm leading-7 text-muted">{description}</p>
    </motion.div>
  )
}
```

## Custom Animations

### Creating a New Animation Variant

```typescript
// src/animations/variants.ts
import type { Variants } from 'framer-motion'

export const customSlide: Variants = {
  hidden: { opacity: 0, x: -24 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 1, 0.5, 1], // Custom easing
    },
  },
}

export const bounce: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
      type: 'spring',
      stiffness: 120,
    },
  },
}
```

### Using Custom Animations

```typescript
import { customSlide } from '../animations/variants'

<motion.div
  initial="hidden"
  whileInView="visible"
  variants={customSlide}
>
  Content
</motion.div>
```

## Form Handling

### Extending the Quote Form

```typescript
// src/components/QuoteForm.tsx
const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
  event.preventDefault()
  
  // Validate
  if (!form.email.includes('@')) {
    alert('Invalid email')
    return
  }

  // Send to backend
  try {
    const response = await fetch('/api/quote', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    })
    
    if (response.ok) {
      setSubmitted(true)
      setForm(initialState) // Reset
    }
  } catch (error) {
    console.error('Form submission error:', error)
  }
}
```

## Styling Patterns

### Glass-morphism Cards

The `.card-glass` class is already in `globals.css`:

```css
.card-glass {
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(18px);
  border: 1px solid rgba(226, 232, 240, 0.8);
}
```

To use:
```tsx
<div className="card-glass rounded-[32px] p-8 border border-border">
  Content
</div>
```

### Custom Gradients

```tsx
// Background gradient
<div className="bg-gradient-to-br from-white via-sky-50 to-orange-50">

// Text gradient (requires custom CSS)
<h1 className="bg-gradient-to-r from-primary to-orange-400 bg-clip-text text-transparent">
  Gradient Text
</h1>
```

### Shadow System

```tsx
// Soft shadow
<div className="shadow-soft">

// Glow shadow (primary color)
<div className="shadow-glow">
```

Defined in `tailwind.config.js`.

## Navigation & Routing

### Adding New Route

```typescript
// src/App.tsx
import NewPage from './pages/NewPage'

<Routes>
  {/* ... existing routes */}
  <Route path="/new-page" element={<NewPage />} />
</Routes>
```

### Updating Navigation Links

```typescript
// src/utils/navLinks.ts
export const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'New Page', href: '/new-page' },
  // ...
]
```

### Hash Links (same page)

```typescript
// In Navbar or Links
<Link to="/#products">Go to Products</Link>

// In sections, add id
<section id="products">
```

## Performance Optimization

### Image Optimization

```tsx
// Lazy load with responsive sizes
<img
  src={image}
  alt="Description"
  loading="lazy"
  srcSet={`${image}?w=400 400w, ${image}?w=800 800w`}
  sizes="(max-width: 640px) 400px, 800px"
  className="w-full"
/>
```

### Code Splitting

Already handled by React Router. Pages load on demand:

```typescript
// Automatic code splitting with React Router
<Route path="/products" element={<Products />} />
```

### Preventing Unnecessary Re-renders

```typescript
// Memoize expensive components
import { memo } from 'react'

const MyCard = memo(({ item }: Props) => {
  return <div>{item.title}</div>
})

export default MyCard
```

## Testing Components

### Testing a Component

```bash
# Create a test file
src/components/__tests__/Button.test.tsx

# Run tests (when configured)
npm run test
```

Example test structure:
```typescript
import { render, screen } from '@testing-library/react'
import Button from '../Button'

describe('Button', () => {
  it('renders with text', () => {
    render(<Button>Click me</Button>)
    expect(screen.getByText('Click me')).toBeInTheDocument()
  })
})
```

## Deployment

### Build for Production

```bash
npm run build
# Creates dist/ folder
```

### Deploy to Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Deploy to Netlify

```bash
# Install Netlify CLI
npm i -g netlify-cli

# Deploy
netlify deploy --prod --dir=dist
```

### Environment Variables

Create `.env` file:
```
VITE_API_URL=https://api.example.com
VITE_ANALYTICS_ID=your-id
```

Access in code:
```typescript
const apiUrl = import.meta.env.VITE_API_URL
```

## TypeScript Best Practices

### Type Interfaces

```typescript
// Good: Specific interface
interface Product {
  id: string
  title: string
  price: number
}

// Avoid: Using 'any'
const product: any = {}
```

### Props Typing

```typescript
// Component props
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'ghost'
  size?: 'md' | 'lg'
}
```

### Data Types

```typescript
// Export types with data
export type ProductItem = {
  title: string
  category: string
  // ...
}

export const products: ProductItem[] = [
  // ...
]
```

## Debugging

### React DevTools
- Install React DevTools browser extension
- Inspect component tree
- Check props and state

### Console Logging

```typescript
// Debug animations
console.log('Animation triggered for:', element)

// Debug form state
console.log('Form state:', form)
```

### Vite Debug Mode

```bash
# Run with debug output
DEBUG=* npm run dev
```

## Common Issues & Solutions

### Images Not Loading
- Check path: Should start with `/` for public folder
- Verify file exists in `public/`
- Check browser console for 404 errors

### Animations Not Playing
- Verify `whileInView` threshold matches content
- Check `viewport={{ once: true }}` is set
- Ensure element is in viewport

### TypeScript Errors
- Run `npm run build` to see all errors
- Check `tsconfig.json` for type settings
- Verify imports have `.tsx` extension for components

### Styles Not Applying
- Check Tailwind class names are correct
- Verify `content` config in `tailwind.config.js`
- Rebuild Tailwind with `npm run dev`

## Git Workflow

```bash
# Create feature branch
git checkout -b feature/new-section

# Make changes and commit
git add .
git commit -m "feat: add new section"

# Push to origin
git push origin feature/new-section

# Create pull request on GitHub
```

## Code Quality

### Linting Setup (Optional)

```bash
npm install -D eslint @typescript-eslint/parser eslint-config-prettier
```

### Format Code

```bash
# Using Prettier (optional)
npm install -D prettier
npx prettier --write src/
```

## Resources

- [React Documentation](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Framer Motion Guide](https://www.framer.com/motion)
- [Vite Documentation](https://vitejs.dev)

---

Happy coding! 🚀
