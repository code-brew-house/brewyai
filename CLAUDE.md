# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

### Development
- **Run development server**: `npm run dev` or `yarn dev`
- **Build for production**: `npm run build` or `yarn build`
- **Preview production build**: `npm run preview` or `yarn preview`
- **Lint code**: `npm run lint` or `yarn lint`
- **TypeScript check**: Run `tsc -b` (included in build command)

## Architecture Overview

This is a React + TypeScript + Vite web application for Brewy AI, featuring:

### Technology Stack
- **Frontend Framework**: React 19 with TypeScript
- **Build Tool**: Vite with SWC for fast compilation
- **UI Library**: Material-UI v7 with Emotion for styling
- **Routing**: React Router v7
- **HTTP Client**: Axios for API calls
- **Type Checking**: TypeScript with strict mode enabled

### Project Structure
- **`/src/api/`**: API integration layer
  - `auth/`: Authentication endpoints (login, logout, register)
  - `users/`: User management endpoints
  - `organization/`: Organization management
  - `analysis.ts`: Analysis-related API calls

- **`/src/components/`**: React components organized by feature
  - `Authentication/`: Login, SignUp, Logout, RequireAuth components
  - `Layout/`: HomeLayout, SiteLayout, LoggedInLayout wrappers
  - `Home/`: Landing page components
  - `Dashboard/`, `Analysis/`, `Reports/`: Core application features
  - `Pages/`: Static pages (About, FAQ, Pricing, etc.)

- **`/src/contexts/`**: React Context providers
  - `auth/`: Authentication context with AuthProvider wrapping the app

### Routing Architecture
The app uses three main layout types:
1. **HomeLayout**: For the landing page
2. **SiteLayout**: For public pages (pricing, about, etc.)
3. **LoggedInLayout**: For authenticated pages (dashboard, analysis, reports)

Protected routes use the `RequireAuth` component to ensure authentication.

### Styling Approach
- Material-UI theme configured in `/src/theme.ts`
- Mix of CSS files and Material-UI styled components
- Roboto font loaded via @fontsource

### TypeScript Configuration
- Separate configs for app (`tsconfig.app.json`) and node (`tsconfig.node.json`)
- Strict mode enabled with additional linting rules
- Module resolution set to "bundler" mode

## Important Notes
- The project is in active development (git status shows changes to auth API)
- No test framework is currently configured
- ESLint is configured with TypeScript and React hooks support