# Quick Start Guide

## 🚀 5-Minute Setup

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```
Visit `http://localhost:5173`

### 3. (Optional) Add Your Images
See `IMAGE_ASSETS_GUIDE.md` for image setup instructions.

---

## 📦 Deployment (Choose One)

### Option 1: Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Set up continuous deployment from GitHub
# https://vercel.com/new
```

**Vercel.json** (optional):
```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist"
}
```

### Option 2: Netlify

```bash
# Install Netlify CLI
npm i -g netlify-cli

# Deploy
netlify deploy --prod --dir=dist
```

**netlify.toml** (create in root):
```toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

### Option 3: Traditional Hosting (AWS, GCP, Azure)

```bash
# Build production bundle
npm run build

# Upload dist/ folder to your hosting
# Configure web server to serve index.html for all routes
```

**Nginx Configuration Example:**
```nginx
server {
    listen 80;
    server_name yourdomain.com;
    
    root /var/www/mukesh-graphics/dist;
    index index.html;
    
    location / {
        try_files $uri $uri/ /index.html;
    }
    
    # Gzip compression
    gzip on;
    gzip_types text/plain text/css text/javascript application/javascript;
}
```

### Option 4: Docker (for containerized deployment)

**Dockerfile:**
```dockerfile
# Build stage
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Serve stage
FROM node:18-alpine
RUN npm install -g serve
COPY --from=builder /app/dist /app
EXPOSE 3000
CMD ["serve", "-s", "/app", "-l", "3000"]
```

**Build and run:**
```bash
docker build -t mukesh-graphics .
docker run -p 3000:3000 mukesh-graphics
```

---

## 🔧 Environment Variables

### Development (.env.local)
```
VITE_API_URL=http://localhost:3000
VITE_ENABLE_ANALYTICS=false
```

### Production (.env.production)
```
VITE_API_URL=https://api.mukeshgraphics.com
VITE_ENABLE_ANALYTICS=true
```

Access in code:
```typescript
const apiUrl = import.meta.env.VITE_API_URL
```

---

## 📝 Pre-Deployment Checklist

- [ ] Update contact email in Footer & Contact sections
- [ ] Replace logo with real brand logo
- [ ] Add product and portfolio images
- [ ] Update navigation links (if custom pages added)
- [ ] Set up WhatsApp button link
- [ ] Update sitemap.xml with real URLs
- [ ] Add Google Analytics/tracking
- [ ] Test on mobile devices
- [ ] Check form submission endpoint
- [ ] Verify all external links
- [ ] Test performance with Lighthouse
- [ ] Set up SSL certificate
- [ ] Configure CDN for images (optional)

---

## 🌐 Domain Setup

### DNS Configuration
```
A Record:  @        → Your hosting IP
CNAME:     www      → your-domain.com
```

### SSL Certificate
- **Vercel/Netlify**: Automatic
- **Self-hosted**: Use Let's Encrypt (free)

```bash
# Let's Encrypt with Certbot
certbot certonly --standalone -d yourdomain.com
```

---

## 📊 Monitoring & Analytics

### Add Google Analytics

```html
<!-- In index.html -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_ID');
</script>
```

### Add Hotjar (Session Recording)
```html
<!-- In index.html -->
<script>
    (function(h,o,t,j,a,r){
        h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
        h._hjSettings={hjid:YOUR_ID,hjsv:6};
        a=o.getElementsByTagName('head')[0];
        r=o.createElement('script');
        r.async=1;
        r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
        a.appendChild(r);
    })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
</script>
```

---

## 🚨 Troubleshooting

### Routes Not Working After Deploy
**Solution**: Configure server to serve `index.html` for all routes (SPA routing)

### Images Not Loading
**Solution**: Check if images are in `public/` folder and referenced correctly

### Build Size Too Large
**Solution**: 
- Compress images (WebP format)
- Remove unused dependencies
- Enable code splitting

### Slow Performance
**Solution**:
- Enable gzip compression
- Use CDN for static assets
- Optimize images
- Enable browser caching

---

## 📞 Support

For issues or questions:
- Email: hello@mukeshgraphics.in
- GitHub Issues: [Repository Issues](https://github.com/khushalvadher0-hash/Mukesh-Graphics/issues)

---

## 📚 Additional Resources

- [Vite Deployment Guide](https://vitejs.dev/guide/static-deploy.html)
- [React Router Documentation](https://reactrouter.com)
- [Tailwind CSS Best Practices](https://tailwindcss.com/docs/installation)
- [Framer Motion Examples](https://www.framer.com/motion)
- [Web Performance Tips](https://web.dev/performance)

---

**Ready to go live? 🚀**
