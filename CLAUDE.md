# CLAUDE.md — Project Context & Workflow

> Project context and workflow documentation. Co-authored with [Claude Code](https://claude.ai/code) by Anthropic.

---

## Project Overview

**Name:** ecommerce-frontend  
**Type:** React 18 SPA — e-commerce storefront  
**Bootstrapped with:** Create React App 5  
**Course context:** JAMK Application Framework course project

**Sister repo (backend):** `D:\JAMK\application-framework\ecommerce-backend`  
**Backend GitHub:** https://github.com/SharifMasum/ecommerce-backend (private)  
**Source reference:** `D:\JAMK\application-framework\ecommerce-spring-boot-react\source\react`

---

## Tech Stack

| Layer | Library / Tool |
|---|---|
| UI framework | React 18 |
| Routing | React Router DOM v6 |
| Component library | MUI (Material UI) v5 + Emotion |
| Utility CSS | Tailwind CSS v3 |
| Headless components | Headless UI v1 |
| Icons | Heroicons v2, MUI Icons |
| Carousel | react-alice-carousel v2 |
| Testing | React Testing Library + Jest |

---

## Directory Structure

```
src/
├── App.js                          # Root component — wires Navigation, page, Footer
├── index.js                        # React DOM entry point
├── Data/
│   └── mens_kurta.js               # Static product data (men's section)
└── customer/
    └── components/
        ├── Navigation/
        │   ├── Navigation.jsx       # Full responsive nav (mobile drawer + desktop flyout)
        │   └── navigationData.js    # Category / section / page link data
        ├── HomeCarosel/
        │   ├── MainCarosel.jsx      # Hero banner carousel
        │   └── MainCaroselData.js   # Banner slide data
        ├── HomeSectionCard/
        │   └── HomeSectionCard.jsx  # Individual product card in homepage sections
        ├── HomeSectionCarosel/
        │   └── HomeSectionCarosel.jsx # Horizontal scroll carousel for a product section
        ├── pages/
        │   └── HomePage/
        │       └── HomePage.jsx     # Home page (currently commented out in App.js)
        ├── Product/
        │   ├── Product.jsx          # Product listing page with sidebar filters
        │   ├── ProductCard.jsx      # Single product card
        │   ├── FilterData.jsx       # Filter sidebar data/config
        │   └── ProductCard.css      # Card-specific styles
        └── Footer/
            └── Footer.jsx           # Site footer
```

---

## Current State (as of 2026-06-02)

### What is built
- Navigation bar — responsive with mobile drawer (Headless UI Dialog/Transition) and desktop flyout (Popover). Avatar + user menu (MUI Menu) wired up with static `true` auth guard.
- Product listing page — active and rendered in `App.js`.
- Footer — rendered.
- HomePage with hero carousel + section carousels — **commented out** in `App.js` (`<HomePage />` replaced by `<Product />`).

### What is NOT yet built / pending
- Authentication — sign-in / sign-up modal (`setOpenAuthModal` declared but not wired; auth modal component missing).
- Routing — `react-router-dom` installed but no `<Routes>` / `<Route>` set up yet. `handleCategoryClick` has a commented-out `navigate()` call.
- Cart — shopping bag icon shows hardcoded `2`; no cart state or page.
- Product detail page.
- Checkout flow.
- Backend integration — all data is static (`mens_kurta.js`, navigation data).
- State management — no Redux / Zustand / Context yet.

---

## Development Commands

```powershell
npm start       # Start dev server at http://localhost:3000
npm test        # Run test suite (Jest + React Testing Library)
npm run build   # Production build to /build
```

---

## Known Issues / Notes

- `Navigation.jsx:21` — `setOpenAuthModal` is declared but never used (triggers lint warning). Auth modal not implemented yet.
- `Navigation.jsx:152` — `{"item.name"}` is a string literal bug (should be `{item.name}`) in the mobile menu section items.
- `App.js:13` — `<HomePage />` is commented out; the product page is rendered directly without routing.
- No React Router `<BrowserRouter>` wrapper exists yet — must be added before any `<Link>` or `navigate()` usage.

---

## Workflow Guidelines for Claude

1. **Before editing a component**, read its current file to avoid clobbering in-progress work.
2. **Routing setup** is a prerequisite before adding any new pages or navigation links.
3. **Auth modal** should be a separate component in `src/customer/components/Auth/` when built.
4. **State management** — decide on Redux Toolkit vs Zustand before building cart/auth state; don't wire both.
5. **Styling convention** — use Tailwind utility classes for layout/spacing; MUI components for interactive elements (buttons, inputs, menus). Don't mix MUI `sx` prop and Tailwind on the same element.
6. **Data layer** — static data files in `src/Data/`. Future API calls should live in a `src/api/` or `src/services/` directory.

---

## Session Log

| Date | What was done |
|---|---|
| 2026-06-02 | Project scaffolded; Navigation, Product, Footer, HomePage, Carousel components built. CLAUDE.md created. |
| 2026-06-02 | Backend repo created at D:\JAMK\application-framework\ecommerce-backend, pushed to github.com/SharifMasum/ecommerce-backend. Secrets stripped from application.properties; Razorpay placeholders replaced with Stripe env vars. |
