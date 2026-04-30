# Abdelrahman Mohamed -- Portfolio

A high-performance, fully responsive developer portfolio built with React 18, TypeScript, and Vite. Designed to showcase professional experience, technical skills, and project work through a refined, interactive interface with smooth animations and a polished dark/light theme system.

## Overview

This portfolio is engineered as a production-quality single-page application that balances visual impact with technical depth. Every section -- from the animated hero to the interactive skills grid and detailed experience timeline -- is built to communicate engineering competency directly to recruiters, hiring managers, and collaborators.

The architecture prioritizes performance, accessibility, and maintainability, making it straightforward to extend with new projects, update content, or adapt the visual language.

## Features

- **Animated Hero Section** -- Particle background system and animated gradient blobs create a dynamic first impression without sacrificing performance
- **Custom Cursor** -- A bespoke cursor interaction layer that adds a layer of polish to the browsing experience
- **About Section** -- Structured professional summary with smooth scroll-reveal animations powered by Framer Motion
- **Skills Grid** -- Categorized technical skill display with visual indicators for proficiency and relevance
- **Experience Timeline** -- Detailed career history with role descriptions, tech stack tags, and chronological layout
- **Contact Section** -- Direct communication channels with integrated form handling and validation via React Hook Form and Zod
- **Dark/Light Mode** -- System-aware theme switching through next-themes with seamless transitions and persistent preference storage
- **Responsive Navigation** -- Sticky navigation bar with smooth scroll-to-section behavior and active link tracking via React Router
- **Toast Notifications** -- Non-intrusive feedback system powered by Sonner for form submissions and user interactions
- **Embla Carousel** -- Smooth, touch-friendly carousel for project showcases and content rotation
- **Command Palette** -- Fast keyboard-driven navigation via cmdk for power users
- **Optimized Performance** -- Vite-powered build pipeline with tree-shaking, code splitting, and lazy-loaded routes

## Tech Stack

| Category | Technology |
|---|---|
| Framework | React 18, TypeScript |
| Build Tool | Vite |
| Styling | Tailwind CSS 3 |
| UI Components | Radix UI, shadcn/ui |
| State & Data | @tanstack/react-query |
| Animations | Framer Motion |
| Routing | React Router |
| Forms & Validation | React Hook Form, Zod |
| Charts | Recharts |
| Icons | Lucide React |
| Notifications | Sonner |
| Theming | next-themes |
| Carousel | Embla Carousel |
| Command Menu | cmdk |
| Date Utilities | date-fns |
| Input | input-otp |
| Drawer | vaul |

## Architecture

The application follows a component-driven architecture with clear separation of concerns:

```
src/
  components/
    ui/                  # shadcn/ui component library
    Hero/                # Landing section with particle background
    About/               # Professional summary
    Skills/              # Categorized skill grid
    Experience/          # Career timeline
    Contact/             # Communication form and links
    Navigation/          # Top bar and NavLink components
    CustomCursor/        # Interactive cursor layer
    ParticleBackground/  # Canvas-based particle system
    AnimatedBlobs/       # CSS gradient blob animations
  hooks/                 # Custom React hooks
  lib/                   # Utility functions and helpers
  pages/                 # Route-level components
  styles/                # Global styles and Tailwind config
```

Key architectural decisions:

- **shadcn/ui components** are vendored directly into the project, giving full control over styling and behavior without external dependency bloat
- **Framer Motion** handles all entrance, exit, and interaction animations with a consistent easing system
- **React Query** manages any server state for dynamic content fetching with automatic cache invalidation
- **next-themes** provides theme persistence in localStorage with system preference detection and zero-flash transitions

## Getting Started

### Prerequisites

- Node.js 18 or later
- npm 9 or later

### Installation

```bash
git clone https://github.com/abdomohamed911/abdelrahman-mohamed-portfolio.git
cd abdelrahman-mohamed-portfolio
npm install
```

### Run Locally

```bash
npm run dev
```

The development server starts at `http://localhost:5173`.

### Build for Production

```bash
npm run build
npm run preview
```

The production build is output to the `dist/` directory.

## Customization

Content is managed through structured data constants and typed configuration files. To update portfolio content:

1. **Projects** -- Edit the projects data array to add, remove, or modify showcased work
2. **Experience** -- Update the experience timeline entries with new roles and descriptions
3. **Skills** -- Modify the categorized skill sets and proficiency levels
4. **Contact** -- Update social links, email, and form submission endpoints
5. **Theme** -- Adjust the Tailwind CSS configuration and CSS custom properties in the theme system

## Accessibility

- Semantic HTML structure throughout all components for screen reader compatibility
- Keyboard navigation support for all interactive elements including the command palette and carousel
- Sufficient color contrast ratios in both light and dark themes, verified against WCAG 2.1 AA standards
- Focus management and visible focus indicators for all interactive controls
- Reduced motion support that respects the user's operating system preference for animations

## Browser Support

- Chrome (latest two versions)
- Firefox (latest two versions)
- Safari (latest two versions)
- Edge (latest two versions)

The particle background gracefully degrades on browsers that do not support canvas animations, falling back to a static gradient background without breaking layout or functionality.

## Performance

- Lighthouse performance score optimized through lazy loading, code splitting, and efficient animation scheduling
- Particle background uses canvas rendering with requestAnimationFrame for consistent frame rates
- All assets are optimized at build time through Vite's asset pipeline
- Font loading strategy prevents layout shift while ensuring fast text rendering
- Images and media assets use responsive srcsets and lazy loading attributes to minimize initial page weight

## License

MIT

---

**Abdelrahman Mohamed** | [GitHub](https://github.com/abdomohamed911)
