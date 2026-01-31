# Project-1: Business Portfolio Website

## Overview

**Project-1** is a modern business and portfolio website built with React. It's a multi-section landing page that showcases services, team members, portfolio work, and client testimonials. The website has a professional layout with navigation, hero section, services cards, and a contact form with a fully functional theme toggle (dark/light mode).

## Features

- 🎨 **Responsive Design** - Mobile-friendly layout using Tailwind CSS
- 🌙 **Dark Mode** - Theme toggle with localStorage persistence
- ✨ **Smooth Animations** - Using Motion library for transitions
- 🔔 **Toast Notifications** - React Hot Toast for user feedback
- 📧 **Contact Form** - Functional contact section using Web3forms API
- 🎭 **Professional UI** - Clean and modern design with Preline components

## Tools & Technologies Used

### Frontend Framework & Build

- **React 19** - UI library for building components
- **Vite 7** - Fast build tool and dev server with HMR

### Styling & UI

- **Tailwind CSS 4** - Utility-first CSS framework for styling
- **@tailwindcss/vite** - Tailwind integration with Vite
- **Preline 3** - Pre-built UI component library

### Libraries & Utilities

- **Motion 12** - Animation library for smooth transitions and effects
- **React Hot Toast 2** - Toast notification system for user feedback

### Development Tools

- **ESLint 9** - Code quality and linting
- **Babel/SWC** - JavaScript transpiling via Vite plugin

## Project Structure

```
src/
├── components/
│   ├── Navbar.jsx          # Navigation bar with theme toggle
│   ├── Hero.jsx            # Landing/hero section
│   ├── TrustedBy.jsx       # Client testimonials
│   ├── Servises.jsx        # Services display
│   ├── ServiseCard.jsx     # Individual service card
│   ├── OurWork.jsx         # Portfolio/project showcase
│   ├── Teams.jsx           # Team members section
│   ├── Contact.jsx         # Contact form
│   ├── Footer.jsx          # Website footer
│   └── ThemeButton.jsx     # Theme toggle button
├── assets/
│   └── assets.js           # Asset imports and configuration
├── App.jsx                 # Main app component
├── index.css               # Global styles
└── main.jsx                # Application entry point
```

## Key Concepts Learned

### React Fundamentals

- ✓ Component-based architecture
- ✓ Functional components with React Hooks
- ✓ State management with `useState`
- ✓ Component composition and reusability

### State Management

- ✓ Local state with `useState`
- ✓ localStorage for theme persistence
- ✓ Props passing between components

### Styling

- ✓ Tailwind CSS utility classes
- ✓ Dark mode implementation with `dark:` prefix
- ✓ Responsive design patterns
- ✓ Custom component styling

### Advanced Features

- ✓ Toast notifications for user feedback
- ✓ Theme toggle functionality
- ✓ Animation integration
- ✓ Multi-section landing page layout
- ✓ Professional UI component organization

### Development Workflow

- ✓ Vite as a modern build tool
- ✓ Hot Module Replacement (HMR) for fast development
- ✓ ESLint for code quality
- ✓ Module-based project structure

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Starts the development server at `http://localhost:5173`

### Build

```bash
npm run build
```

Builds the project for production

### Lint

```bash
npm run lint
```

Runs ESLint to check code quality

### Preview

```bash
npm run preview
```

Preview the production build locally

## Dependencies Summary

| Package           | Purpose                  |
| ----------------- | ------------------------ |
| react             | UI library               |
| react-dom         | DOM rendering            |
| @tailwindcss/vite | Tailwind CSS integration |
| tailwindcss       | CSS framework            |
| motion            | Animation library        |
| react-hot-toast   | Notifications            |
| preline           | UI components            |

## What Makes This Project Special

- Clean, professional design pattern
- Modern tech stack (React 19 + Vite 7)
- Theme persistence across sessions
- Smooth animations and transitions
- Modular component structure
- Production-ready build configuration
