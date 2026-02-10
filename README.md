# Kudo Advisory Website

A modern, clean website redesign for Kudo Advisory focusing on user experience, performance, and intuitive navigation.

## Features

- ✨ **Modern Design**: Clean aesthetics with ample white space and bold typography
- 🎨 **Brand Integration**: Uses official Kudo Advisory brand colors (Navy: #10222E, Cream: #FFFFDC)
- 📱 **Responsive**: Fully responsive design that works on all devices
- ⚡ **Fast Performance**: Optimized for speed with minimal dependencies
- 🎭 **Smooth Animations**: Subtle, professional animations and micro-interactions
- ♿ **Accessible**: Semantic HTML and ARIA attributes for accessibility

## File Structure

```
kudoadvisory-redesign/
├── index.html              # Main HTML file
├── styles/
│   └── main.css           # All styles (using CSS variables)
├── scripts/
│   └── main.js            # JavaScript functionality
├── assets/
│   ├── logos/             # Logo files (SVG)
│   │   ├── logo-horizontal.svg
│   │   └── mark.svg
│   └── favicon/           # Favicon files
│       ├── favicon.ico
│       ├── favicon-16.png
│       ├── favicon-32.png
│       └── ...
├── README.md              # This file
└── .gitignore            # Git ignore file
```

## Quick Start

### Local Development

1. Simply open `index.html` in your browser
2. Or use a local server:
   ```bash
   # Using Python 3
   python -m http.server 8000
   
   # Using Node.js
   npx serve
   ```

### Deploy to GitHub Pages

1. **Create a new repository** on GitHub (e.g., `kudoadvisory-website`)

2. **Initialize and push your code**:
   ```bash
   cd kudoadvisory-redesign
   git init
   git add .
   git commit -m "Initial commit: Modern website redesign"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/kudoadvisory-website.git
   git push -u origin main
   ```

3. **Enable GitHub Pages**:
   - Go to your repository on GitHub
   - Click on "Settings"
   - Scroll down to "Pages" in the left sidebar
   - Under "Source", select "main" branch and "/ (root)"
   - Click "Save"
   - Your site will be available at: `https://YOUR-USERNAME.github.io/kudoadvisory-website/`

4. **Custom Domain (Optional)**:
   - In GitHub Pages settings, add your custom domain: `www.kudoadvisory.com`
   - Create a `CNAME` file in the repository root with your domain
   - Configure DNS records with your domain provider:
     - Add a CNAME record pointing `www` to `YOUR-USERNAME.github.io`
     - Add A records for the apex domain to GitHub's IPs:
       - 185.199.108.153
       - 185.199.109.153
       - 185.199.110.153
       - 185.199.111.153

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Android)

## Performance Optimizations

- Minimal external dependencies (only Google Fonts)
- CSS animations (hardware-accelerated)
- Lazy loading for images
- Optimized asset sizes
- No JavaScript framework overhead

## Customization

### Colors
Edit CSS variables in `styles/main.css`:
```css
:root {
    --kudo-navy: #10222E;
    --kudo-cream: #FFFFDC;
}
```

### Typography
Fonts are loaded from Google Fonts. To change:
1. Edit the `<link>` tag in `index.html`
2. Update font variables in `styles/main.css`

### Content
All content is in `index.html` - edit directly to update text, links, etc.

## Analytics Setup

To add analytics (Google Analytics, Plausible, etc.):
1. Add the tracking script to `<head>` in `index.html`
2. Or add to `scripts/main.js` in the analytics placeholder section

## Contact

For questions or updates, contact: vijay@kudoadvisory.com

---

**Built with** ❤️ for clarity, governance, and delivery.
