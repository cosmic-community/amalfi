# Amalfi

![App Preview](https://imgix.cosmicjs.com/99b42bb0-81ed-11f1-b063-03e379245aca-autopilot-photo-1533106497176-45ae19e68ba2-1784299291043.jpeg?w=1200&h=630&fit=crop&auto=format,compress)

An elegant Amalfi Coast–themed Italian restaurant website built with Next.js 16 and [Cosmic](https://www.cosmicjs.com). Browse the menu grouped by category, explore restaurant locations with hours and reservation info, and read customer reviews — all powered by your existing Cosmic content.

## Features

- 🍝 **Menu grouped by category** with pricing, dietary info, spice levels, and chef's specials
- 📍 **Locations** with addresses, opening hours, phone numbers, and reservation links
- ⭐ **Customer reviews** with star ratings tied to locations
- 🎨 **Beautiful, modern responsive design** inspired by the Amalfi Coast
- ⚡ **Server Components** for fast, SEO-friendly rendering
- 🖼️ **Optimized imagery** via imgix
- 📱 **Fully responsive** across mobile, tablet, and desktop

## Clone this Project

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket and code repository to get started instantly:

[![Clone this Project](https://img.shields.io/badge/Clone%20this%20Project-29abe2?style=for-the-badge&logo=cosmic&logoColor=white)](http://localhost:3040/projects/new?clone_bucket=6a5a3eabd1eb5336568ef636&clone_repository=6a5a3fdbd1eb5336568ef67b)

## Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> "Create content models for a restaurant website with menu items (including images, pricing, and dietary info), menu categories, locations, and customer reviews.
>
> User instructions: An Amalfi Coast themed Italian restaurant site with menu items grouped by category, hours, locations, and reservation info"

### Code Generation Prompt

> Build a Next.js application for an online business called "Amalfi". The content is managed in Cosmic CMS with the following object types: menu-categories, menu-items, locations, reviews. Create a beautiful, modern, responsive design with a homepage and pages for each content type. An Amalfi Coast themed Italian restaurant site with menu items grouped by category, hours, locations, and reservation info

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## Technologies Used

- **Next.js 16** (App Router)
- **React 19**
- **TypeScript**
- **Tailwind CSS**
- **Cosmic SDK** for content management

## Getting Started

### Prerequisites

- [Bun](https://bun.sh) or Node.js 18+
- A [Cosmic](https://www.cosmicjs.com) account with your bucket

### Installation

```bash
bun install
```

Set your environment variables (these are provided automatically when deploying via Cosmic):

```
COSMIC_BUCKET_SLUG=your-bucket-slug
COSMIC_READ_KEY=your-read-key
COSMIC_WRITE_KEY=your-write-key
```

Run the development server:

```bash
bun run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Cosmic SDK Examples

```typescript
import { cosmic } from '@/lib/cosmic'

// Fetch menu items with connected category (depth for relationships)
const { objects: items } = await cosmic.objects
  .find({ type: 'menu-items' })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1)

// Fetch a single location
const { object: location } = await cosmic.objects
  .findOne({ type: 'locations', slug })
  .depth(1)
```

## Cosmic CMS Integration

This app uses four object types from your Cosmic bucket:

- **menu-categories** — grouping for menu items (name, description, image, display order)
- **menu-items** — dishes with price, dietary info, spice level, chef's special flag, and category relationship
- **locations** — restaurant locations with hours, contact, and reservation info
- **reviews** — customer reviews with ratings tied to locations

Learn more in the [Cosmic docs](https://www.cosmicjs.com/docs).

## Deployment Options

- **Vercel** — Recommended for Next.js. Set your environment variables in the project dashboard.
- **Netlify** — Works with the Next.js runtime.

Set `COSMIC_BUCKET_SLUG`, `COSMIC_READ_KEY`, and `COSMIC_WRITE_KEY` in your hosting platform's environment variable settings.
<!-- README_END -->