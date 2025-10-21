# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js-based corporate website for Integrity Audit and Accounting, an oil and gas joint venture auditing and accounting services company. The site uses React 17, Tailwind CSS for styling, and SendGrid for email functionality.

## Development Commands

```bash
# Development server (runs on http://localhost:3000)
npm run dev

# Production build
npm run build

# Start production server (requires build first)
npm start
```

## Architecture

### Content-Driven Architecture

This website follows a **content-driven component pattern** where:
- **Content files** (in `content/` directory) define the data and structure for each page section
- **Components** (in `components/` directory) are reusable, presentational components that receive content via props
- **Pages** (in `pages/` directory) compose components and pass content from content files

This separation allows for easy content updates without touching component logic.

### Key Directories

- `pages/` - Next.js pages and API routes
  - `pages/api/sendgrid.js` - Email submission endpoint
- `components/` - Reusable React components (all in `.jsx` format)
- `content/` - Content objects organized by page (all in `.js` format)
- `context/` - React Context providers
- `public/` - Static assets (images, SVGs, etc.)
- `styles/` - Global CSS with Tailwind directives

### Core Components

**Hero** - Primary hero sections with background images and custom content
- Accepts `customImage`, `containerClass`, `contentClass`, and `content` props
- Background images can be customized per page via content objects

**TwoColumnsWithImage** - Two-column layout with image on one side, content on the other
- Supports `imageOnRight` prop to control layout direction
- Can be used with or without container wrapper

**IconBox** - Grid layout for displaying icon-based feature cards
- Highly customizable with container and item-level classes

**OneColumn** - Single column content sections
- Supports background colors and background images via props

**OurTeam** - Displays team member profiles (likely populated from content)

**OurMission** - Mission statement component

### Layout System

The app uses a consistent layout structure defined in `pages/_app.js`:

```
HeaderProvider (Context)
  └─ Layout
      ├─ Header
      ├─ main (page content)
      └─ Footer
```

**HeaderContext** manages:
- Scroll state (`scrolled` - true when scrollY > 100)
- Layout size (`mobile` vs `desktop` - breakpoint at 1024px)
- Menu state (`menuOpened`)

### Content File Pattern

Content files export objects with this structure:
```javascript
export const contentName = {
  content: <>JSX content with text and components</>,
  image: '/path-to-image.jpg', // optional
  // other properties as needed
}
```

### Page Structure Pattern

Pages typically follow this pattern:
1. Import Next.js `Head` component
2. Import needed presentational components
3. Import content objects from `content/` directory
4. Compose components with content in the page component
5. Set page title with `{process.env.NEXT_PUBLIC_SITE_NAME}` variable

## Styling

- **Tailwind CSS** - Primary styling framework
- Custom theme colors defined in `tailwind.config.js`:
  - `primary`: #2CAC16 (green)
  - `secondary`: #04207A (blue)
  - `tertiary`: #222222 (dark gray)
- Custom fonts:
  - Heading: Palanquin
  - Body: Roboto
- Tailwind Forms plugin enabled for form styling
- Global styles in `styles/globals.css`

## API Routes

**POST /api/sendgrid** - Contact form submission
- Accepts: `{ name, email, subject, message }`
- Sends email to `khill@integrity-audit.com` and `audits@integrity-audit.com`
- Requires `SENDGRID_API_KEY` environment variable

## Environment Variables

Required environment variables (should be in `.env.local`):
- `SENDGRID_API_KEY` - SendGrid API key for email functionality
- `NEXT_PUBLIC_SITE_NAME` - Site name used in page titles (e.g., "Integrity Audit")

## File Naming Conventions

- Pages: kebab-case (e.g., `about-us.js`)
- Components: PascalCase with `.jsx` extension
- Content files: camelCase with `.js` extension
- Component organization: Each component in its own directory with PascalCase naming

## React Version Note

This project uses **React 17.0.2**, which means:
- No automatic JSX transform (imports of `React` may still be present)
- Link components from Next.js use the older pattern with `<a>` tags as children
