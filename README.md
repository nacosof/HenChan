# HenChan

HenChan is a web application for reading manga, built with Next.js and TypeScript. The project demonstrates a modern approach to frontend development using component-based architecture, CSS Modules, and responsive design.

## Features
- View previews and pages of three different manga.
- Responsive interface for desktop, tablet, and mobile devices.
- Modal window for user sign-in.
- Navigation between manga pages and the main page.
- Modern design with CSS Modules and gradients.

## Pages
- `/` — Main page with manga previews and sign-in button.
- `/manga_1`, `/manga_2`, `/manga_3` — View pages of the selected manga.

## Architecture
- **Next.js** — SSR/SSG, page routing.
- **TypeScript** — Strict typing for components and utilities.
- **Components**: 
  - `MangaImageContainer` — Manga preview card with click support.
  - `ExampleComponent` — Example component.
- **Hooks**: 
  - `useExample` — Example of a custom hook.
- **Utilities**: 
  - `manga_photo.ts` — Exports paths to manga previews and pages.
  - `helpers.ts` — Helper functions.
  - `mediaQueries.ts` — Hooks for device type detection.
- **Styling**: 
  - CSS Modules (`Home.module.css`) for component and responsive styling.
  - Global styles (`globals.css`) for background and base layout.

## Static Files
- All manga images and previews are stored in the `public/images` folder.

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the development server:
   ```bash
   npm run dev
   ```
3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Scripts
- `npm run dev` — Start the development server
- `npm run build` — Build the project
- `npm run start` — Start the production server
- `npm run lint` — Run the linter

## Configuration
- **next.config.js** — React strict mode and SWC minification enabled.
- **tsconfig.json** — Strict typing, base import path set to `src`.

## Example Project Structure
```
HenChan/
  public/images/           # Static manga images and previews
  src/pages/               # Next.js pages
  src/components/          # Reusable components
  src/hooks/               # Custom hooks
  src/layouts/             # Layout components
  src/services/            # API examples
  src/styles/              # CSS Modules and global styles
  src/types/               # TypeScript types
  src/utils/               # Helper functions and utilities
```

## License
This project is provided for educational purposes.
