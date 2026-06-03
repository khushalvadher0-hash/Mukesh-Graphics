export type ProductItem = {
  title: string
  category: string
  feature: string
  accent: string
  label: string
  image: string
}

export const products = [
  { title: 'Fresh Food Wraps', category: 'Food Packaging', feature: 'Aroma lock barrier film for fresher food.', accent: 'bg-orange-50 text-orange-700', label: 'Flexible Pouch', image: '/products/Pr 1.jpg' },
  { title: 'Cool Treat Cartons', category: 'Ice Cream Packaging', feature: 'Premium cold-grade cartons with matte finish.', accent: 'bg-slate-50 text-slate-900', label: 'Cold-safe Pack', image: '/products/Pr 2.jpg' },
  { title: 'Luxury Beauty Tubes', category: 'Cosmetics', feature: 'High-end metallic sheen for premium brands.', accent: 'bg-amber-50 text-amber-700', label: 'Premium Tube', image: '/products/Pr 3.jpg' },
  { title: 'Retail Stand-up Bags', category: 'Retail Packaging', feature: 'Shelf-ready packaging with strong structure.', accent: 'bg-sky-50 text-sky-700', label: 'Display Pack', image: '/products/Pr 4.jpg' },
]
