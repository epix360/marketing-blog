# Marketing Blog

A static portfolio/blog built with Astro SSG and Pico CSS, featuring automated deployment and CMS integration.

## 🚀 Features

- **Static Site Generation** with Astro
- **Minimal Styling** with Pico CSS
- **Content Collections** for blog posts
- **Static Search** with Pagefind
- **Contact Form** with EmailJS integration
- **Analytics** with Umami Cloud
- **SEO Optimization** with dynamic Open Graph tags
- **Automated Deployment** via GitHub Actions
- **CMS Integration** with Pages CMS

## � Project Structure

```
/
├── .github/workflows/     # GitHub Actions deployment
├── .pagescms/            # Pages CMS configuration
├── public/
│   ├── images/           # CMS image uploads
│   └── robots.txt        # Search engine directives
├── src/
│   ├── components/        # Astro components
│   ├── content/          # Blog content collections
│   ├── layouts/          # Page layouts
│   └── pages/            # Astro pages
├── astro.config.mjs       # Astro configuration
└── package.json          # Dependencies and scripts
```

## 🛠️ Setup

### Prerequisites

- Node.js 22.12.0 or higher
- GitHub repository with Pages enabled

### Environment Variables

Copy `.env.example` to `.env` and configure:

```env
# EmailJS for contact form
PUBLIC_EMAILJS_SERVICE_ID=your_service_id_here
PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id_here
PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key_here

# Umami Analytics
PUBLIC_UMAMI_WEBSITE_ID=your_website_id_here
```

### Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

## 🚀 Deployment

### Automated Deployment

This project uses GitHub Actions for automated deployment to GitHub Pages:

1. **Push to main branch** triggers automatic deployment
2. **Build process** runs with Pagefind indexing
3. **Deployment** to gh-pages branch
4. **Live site** updates automatically

### Manual Deployment

```bash
# Build for production
npm run build

# Preview locally
npm run preview
```

## 📝 Content Management

### Pages CMS Setup

1. Visit [Pages CMS](https://pagescms.org/)
2. Connect your GitHub repository
3. Configure using `.pagescms/config.json`
4. Edit content through web interface

### Content Collections

Blog posts are managed through `src/content/blog/` with schema:

- `title` (string, required)
- `pubDate` (date, required)
- `description` (string, required)
- `heroImage` (string, optional)
- `tags` (array, optional)

## 🔧 Configuration

### Astro Configuration

- **Static output** for GitHub Pages
- **Base path** `/marketing-blog/`
- **Sitemap** integration for SEO
- **Image optimization** settings

### SEO Features

- **Dynamic Open Graph** tags per page
- **Schema.org** structured data
- **Sitemap.xml** auto-generation
- **Robots.txt** for search engines

## 📊 Analytics & Tracking

- **Umami Cloud** analytics (production only)
- **EmailJS** contact form integration
- **Pagefind** static search indexing

## 🧞 Commands

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |

## 📚 Documentation

- [Astro Documentation](https://docs.astro.build/)
- [Pico CSS](https://picocss.com/)
- [Pages CMS](https://pagescms.org/)
- [EmailJS](https://www.emailjs.com/)
- [Umami Analytics](https://umami.is/)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Push to your fork
5. Open a pull request
