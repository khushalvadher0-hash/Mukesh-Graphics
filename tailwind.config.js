export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#E67E22',
        surface: '#F8FAFC',
        body: '#0F172A',
        muted: '#64748B',
        border: '#E2E8F0',
      },
      boxShadow: {
        soft: '0 24px 80px rgba(15, 23, 42, 0.08)',
        glow: '0 0 120px rgba(230, 126, 34, 0.12)',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'hero-glow': 'radial-gradient(circle at top, rgba(230, 126, 34, 0.18), transparent 35%)',
      },
    },
  },
  plugins: [],
}
