# Astro Blog

A modern, animated personal portfolio and blog built with [Astro](https://astro.build/). This project features a beautiful UI, article pagination, Notion integration for dynamic content, and a contact form.

## ✨ Features

- ⚡ Fast, SEO-friendly static site
- 🎨 Animated, dark-themed UI with responsive design
- 📝 Blog articles managed via Notion and Markdown
- 📄 Article pagination and detailed article pages
- 📬 Contact form
- 📰 RSS feed and sitemap support
- 🖼️ Asset and font management

## 📁 Project Structure

```
astro-blog/
  public/           # Static assets (images, fonts, favicon)
  src/
    components/     # UI components (Header, Hero, About, etc.)
    content/        # Markdown articles
    layouts/        # Page layouts
    lib/            # Notion and helper utilities
    pages/          # Astro pages and routes
    styles/         # Global and component CSS
  package.json      # Project metadata and scripts
  astro.config.mjs  # Astro configuration
  tsconfig.json     # TypeScript configuration
```

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) v18 or later
- [npm](https://www.npmjs.com/) v9 or later

### 1. Clone the repository
```sh
git clone <your-repo-url>
cd astro-blog
```

### 2. Install dependencies
```sh
npm install
```

### 3. Configure Notion Integration (Optional)
If you want to fetch articles from Notion, create a `.env` file in the project root and add:
```
NOTION_TOKEN=your_notion_integration_token
NOTION_DATABASE_ID=your_notion_database_id
```
If you only want to use Markdown articles in `src/content/articles/`, you can skip this step.

### 4. Start the development server
```sh
npm run dev
```
Visit [http://localhost:4321](http://localhost:4321) to view your site.

### 5. Build for production
```sh
npm run build
```
The static site will be generated in the `dist/` folder.

### 6. Preview the production build
```sh
npm run preview
```

## 🛠️ Customization
- Add or edit articles in `src/content/articles/` (Markdown format)
- Update site metadata in `src/consts.ts`
- Customize styles in `src/styles/global.css`
- Edit components in `src/components/`

## 📦 Deployment
You can deploy the generated `dist/` folder to any static hosting service (Vercel, Netlify, GitHub Pages, etc.).

For Vercel deployment, install the adapter:
```sh
npm install @astrojs/vercel
```
And follow [Astro’s Vercel deployment guide](https://docs.astro.build/en/guides/deploy/vercel/).

## 🙏 Credits
- Built with [Astro](https://astro.build/)
- Notion integration via [@notionhq/client](https://github.com/makenotion/notion-sdk-js) and [notion-to-md](https://github.com/anshumanv/notion-to-md)
- Inspired by Bear Blog and Astro’s official blog starter

---
Feel free to customize this project and make it your own!
