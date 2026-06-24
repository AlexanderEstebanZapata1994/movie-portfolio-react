# Movies Portfolio 🎬

A modern, responsive movie discovery application built with React and Vite. This project is specifically designed as a learning sandbox to practice configuring **CI/CD pipelines from scratch** and deploying to **Vercel**.

---

## 🎯 Project Purpose & CI/CD Focus
This project serves as a hands-on exercise for configuring and understanding CI/CD concepts:
* **CI/CD from Scratch:** Designed to implement, test, and troubleshoot deployment workflows.
* **Vercel Deployment:** Automatically deploys production-ready builds on pushes to the repository.
* **Pre-deployment Verification:** Includes local build checks, TypeScript compilation, linting, and automated unit testing.

---

## 🛠️ Technology Stack
* **Framework:** React 19
* **Build Tool:** Vite 8
* **Language:** TypeScript
* **Styling:** Tailwind CSS 3 (with PostCSS & Autoprefixer)
* **Testing:** Vitest
* **Linting:** ESLint
* **Data Provider:** [TMDB API](https://www.themoviedb.org/)

---

## 🏗️ Design Patterns & Architecture
The project applies clean code architecture and standard frontend design patterns:

### 1. Context Provider Pattern
Manages global state for movies, loading indicators, and error tracking across components without prop-drilling.
* **File:** `src/context/MovieContext.tsx`

### 2. Custom Hooks & Debouncing
Encapsulates complex logic for search delays. The search input uses a 500ms debounce cleanup to prevent unnecessary TMDB API calls while typing.
* **File:** `src/hooks/useMovieSearch.ts`

### 3. Service Layer Pattern
Abstracts API communication logic away from React components, providing clean, reusable methods for fetching and searching movies.
* **File:** `src/services/movie.service.ts`

### 4. API Mocking & Spy Testing
Ensures testing isolation by using Vitest spies (`vi.spyOn`) and static JSON mock data to verify API services without making real network requests.
* **File:** `src/tests/services/movie.service.test.ts`

---

## 🚀 Getting Started

### Prerequisites
Make sure you have Node.js and `pnpm` installed.

### Installation
```bash
# Clone the repository
git clone <repository-url>

# Install dependencies
pnpm install
```

### Environment Setup
Create a `.env` file in the root directory and add your TMDB API key:
```env
VITE_TMDB_KEY=your_tmdb_api_key_here
```

### Available Scripts
```bash
# Run local development server
pnpm dev

# Run Vitest test suite
pnpm test

# Run ESLint check
pnpm lint

# Build the project (TypeScript check + Vite build)
pnpm build
```
