# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build Commands

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build application for production
- `npm run generate` - Generate static site (primary deployment method)
- `npm run start` - Start production server

## Technology Stack

- **Framework:** Nuxt.js 2 (Vue.js) with static site generation (`target: 'static'`)
- **UI Library:** Vuetify (Material Design)
- **Styling:** SCSS with Vuetify theme variables
- **i18n:** nuxt-i18n supporting English (en) and Arabic (ar)
- **Animation:** GSAP
- **Carousel:** vue-agile
- **Form Validation:** Vuelidate

## Architecture

### Component Organization
Components are organized by page sections:
- `components/homePage/` - Home page sections (Landing, Services, Projects, Clients, etc.)
- `components/aboutPage/` - About page sections
- `components/servicesPage/` - Service detail components
- `components/spinners/` - Loading state components

### Path Aliases
- `~/` and `@/` - Root directory aliases for imports

### SVG Icon System
Global icon components in `plugins/svgIconSystem/svg/` - 30+ icons registered globally.

## Key Patterns

### Internationalization & RTL
```javascript
this.$i18n.locale === 'ar'  // Check current language
this.$vuetify.rtl = true     // Toggle RTL mode for Arabic
```

Arabic uses font-family Almarai; English uses Montserrat.

### Responsive Design
Use Vuetify breakpoints for responsive logic:
```javascript
$vuetify.breakpoint.smAndUp
$vuetify.breakpoint.mdAndUp
```

### z-index Hierarchy
- Loading spinner: 100
- Navbar: 99
- Carousel: 2-7
- Intro section: 8-9

### Brand Colors
- Main color: `#d42532`
- Nav color: `#424242`

## Code Style

- No semicolons
- Single quotes for strings
- 2-space indentation
- Apply `cursor-pointer` class to all buttons

## Translations

All user-facing text lives in `locales/en.json` and `locales/ar.json`. Never hardcode text.

## Static Assets

- Local assets in `static/` folder
- Images primarily hosted on ImageKit CDN
- Use `eager` loading only for above-the-fold images
