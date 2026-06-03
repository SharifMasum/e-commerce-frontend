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
**Frontend GitHub:** https://github.com/SharifMasum/e-commerce-frontend  
**Source reference:** `D:\JAMK\application-framework\ecommerce-spring-boot-react\source\react`

---

## Tech Stack

| Layer | Library / Tool |
|---|---|
| UI framework | React 18 |
| Routing | React Router DOM v6 |
| State management | Redux Toolkit + react-redux |
| HTTP client | Axios (with JWT interceptor) |
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
├── App.js                          # Root — dispatches getUser on mount, renders Routes
├── index.js                        # Entry point — <Provider> + <BrowserRouter>
├── config/
│   └── api.js                      # Axios instance; JWT attached via interceptor; reads REACT_APP_API_BASE_URL
├── Redux/
│   ├── store.js                    # configureStore with all 6 reducers
│   ├── Auth/
│   │   └── authSlice.js            # register, login, getUser thunks + logout reducer
│   └── Customers/
│       ├── productSlice.js         # findProducts, findProductById
│       ├── cartSlice.js            # getCart, addItemToCart, removeCartItem, updateCartItem
│       ├── orderSlice.js           # createOrder, getOrderById, getOrderHistory
│       ├── reviewSlice.js          # createReview/Rating, getAllReviews/Ratings
│       └── paymentSlice.js         # createPayment (Stripe-ready), updatePayment
├── Data/
│   ├── productRegistry.js          # Merges all datasets; stable IDs; gender field; exports allProducts, productsBySection, findProductById
│   ├── mens_kurta.js               # Static product data
│   ├── mens_shirt.json             # Static product data
│   ├── mens_shoes.js               # Static product data (uses `image` field, not `imageUrl`)
│   ├── womens_saree.js             # Static product data (uses `image` field, not `imageUrl`)
│   └── womens_dress.js             # Static product data
├── Pages/
│   └── NotFound.jsx                # 404 page
├── Routers/
│   └── CustomerRoutes.jsx          # All customer-facing routes + Navigation + Footer wrapper
└── customer/
    └── components/
        ├── Navigation/
        │   ├── Navigation.jsx       # Responsive nav; all items are <Link>; flyout closes on navigation; keyboard accessible
        │   └── navigationData.js    # Every item has href; categories have top-level href; brands use /brands/:slug
        ├── HomeCarosel/
        │   ├── MainCarosel.jsx      # Hero banner carousel (Unsplash images, 500px, autoPlay)
        │   └── MainCaroselData.js   # Banner slide data with route paths
        ├── HomeSectionCard/
        │   └── HomeSectionCard.jsx  # Product card for homepage carousels; navigates to /product/:id
        ├── HomeSectionCarosel/
        │   └── HomeSectionCarosel.jsx  # Horizontal section carousel; arrows use AliceCarousel ref API
        ├── pages/
        │   ├── HomePage/
        │   │   └── HomePage.jsx     # Home page — hero carousel + 5 product section carousels
        │   ├── CompanyPage/
        │   │   └── CompanyPage.jsx  # /company — About, Vision, Values, Careers, Contact
        │   ├── StoresPage/
        │   │   └── StoresPage.jsx   # /stores — 7 Finnish city cards with address and hours
        │   └── BrandPage/
        │       └── BrandPage.jsx    # /brands/:brandSlug — derives name from slug; coming-soon placeholder
        ├── Product/
        │   ├── Product.jsx          # Collection page; filters by gender + category slug; empty state
        │   ├── ProductCard.jsx      # Clickable product card; navigates to /product/:id; prices in €
        │   ├── ProductDetails.jsx   # Full product detail page — image, price, sizes, qty, Add to Cart
        │   ├── FilterData.jsx       # Filter sidebar config
        │   └── ProductCard.css      # Card hover styles
        └── Footer/
            └── Footer.jsx           # Site footer
```

---

## Routing

| Path | Component | Notes |
|---|---|---|
| `/` | `HomePage` | Hero carousel + section carousels |
| `/home` | `HomePage` | Alias |
| `/collections/:gender` | `Product` | All products for that gender |
| `/collections/:gender/:category` | `Product` | Filtered by SLUG_TO_CATEGORY map; empty state if no data |
| `/brands/:brandSlug` | `BrandPage` | Brand name derived from slug; coming-soon placeholder |
| `/product/:productId` | `ProductDetails` | Full detail page; ID from productRegistry |
| `/company` | `CompanyPage` | About, Vision, Values, Careers, Contact |
| `/stores` | `StoresPage` | 7 Finnish store locations |
| `*` | `NotFound` | 404 |
| `/admin/*` | _(pending)_ | Admin panel — blocked on auth |

---

## Redux Store Shape

```js
store = {
  auth:    { user, isLoading, error }           // null user = not logged in
  product: { products[], product, loading, error }
  cart:    { cart, cartItems[], loading, error }
  order:   { orders[], order, loading, error }
  review:  { reviews[], ratings[], loading, error }
  payment: { payment, loading, error }
}
```

---

## Data Layer

All product data is currently **static** (no backend calls). The `productRegistry.js` normalises 5 datasets into a single flat array with stable prefix-based IDs:

| Prefix | Dataset | `gender` | `thirdLavelCategory` | URL slug |
|---|---|---|---|---|
| `mk-N` | Men's Kurta | `men` | `mens_kurta` | `kurtas` |
| `ms-N` | Men's Shirt | `men` | `shirt` | `shirts` |
| `msh-N` | Men's Shoes | `men` | `men_shoes` | `shoes` |
| `ws-N` | Women's Saree | `women` | `saree` | `sarees` |
| `wd-N` | Women's Dress | `women` | `women_dress` | `dresses` |

`normalize()` sets both `gender` and `thirdLavelCategory` from the call site. `Product.jsx` maps `gender:slug` → `thirdLavelCategory` via `SLUG_TO_CATEGORY` — add entries here when new datasets are added. Unknown slugs produce an empty state rather than showing all products.

When backend is connected, replace `findProductById` calls in `ProductDetails` with the `findProductById` Redux thunk from `productSlice`.

---

## Current State (as of 2026-06-03)

### What is built
- **Hero carousel** — Unsplash banner images, autoPlay, dot navigation, clickable slides
- **Homepage** — 5 product section carousels (Kurta, Shoes, Shirt, Saree, Dress) with working arrows
- **Navigation** — fully functional desktop flyout + mobile drawer; every item is a `<Link>`; flyout closes on navigation; "Shop all →" link inside each flyout; keyboard accessible (focus styles on all links); mobile literal-string bug fixed; mobile drawer closes on any link click
- **Collection page** (`/collections/:gender/:category`) — filters by `gender` + slug→category mapping; gender-only route shows full collection; unknown slugs show empty state; heading derived from nav data
- **Brand page** (`/brands/:brandSlug`) — placeholder page; brand name derived from slug; coming-soon UI
- **Product detail page** — image, brand, title, EUR price + discount badge, color, size selector (required), quantity +/−, Add to Cart (dispatches Redux thunk), Back link
- **Company page** (`/company`) — hero, stats bar, Vision, Values grid, Careers listings, Contact; edit data arrays at top of file
- **Stores page** (`/stores`) — 7 Finnish city cards (Tampere, Helsinki, Turku, Oulu, Lahti, Vaasa, Jyväskylä) each with address, hours, note; edit `stores` array at top of file
- **Redux store** — 6 slices (auth, product, cart, order, review, payment); `getUser` dispatched on app mount
- **Axios API client** — `src/config/api.js`; JWT attached on every request via interceptor
- **Routing** — full `<Routes>` setup; `BrowserRouter` in `index.js`; `<Provider>` wraps app
- **404 page**

### What is NOT yet built
- **Auth modal** — sign-in / sign-up UI; `auth.user` is always null until built
- **Cart page** — `/cart` route exists as comment; `cartSlice` is ready
- **Checkout flow** — `/checkout` route exists as comment
- **Orders pages** — `/account/order` and `/account/order/:orderId` exist as comments
- **Payment** — Stripe integration; backend `PaymentController` needs to be updated from Razorpay
- **Admin panel** — route exists as comment in `App.js`; blocked on auth
- **Backend connection** — all product data is static; Redux thunks will work once `REACT_APP_API_BASE_URL` points to a running backend
- **Product filter wiring** — filter UI exists but doesn't filter the product list yet

---

## Development Commands

```powershell
npm start       # Dev server at http://localhost:3000
npm run build   # Production build to /build
npm test        # Jest + React Testing Library
```

## Environment Variables

| Variable | Default | Purpose |
|---|---|---|
| `REACT_APP_API_BASE_URL` | `http://localhost:5454` | Spring Boot backend URL |

Create `.env.local` to override locally (already git-ignored).

---

## Workflow Guidelines for Claude

1. **Always read a file before editing it** — avoid clobbering in-progress work.
2. **Styling convention** — Tailwind for layout/spacing; MUI for interactive elements. Don't mix MUI `sx` and Tailwind on the same element.
3. **Product data** — use `productRegistry.js` as the single source. Don't import raw data files directly in components.
4. **Redux thunks** — all API calls go through slices in `src/Redux/`. Don't call `api.js` directly from components.
5. **Auth guard** — check `store.auth.user` for logged-in state. The Navigation already has a `true` hardcoded — replace with `Boolean(auth.user)` when auth modal is built.
6. **New pages** — add the route in `CustomerRoutes.jsx` and uncomment the matching comment block. For new product categories, also add a `gender:slug → thirdLavelCategory` entry to `SLUG_TO_CATEGORY` in `Product.jsx` and a `gender` + `thirdLavelCategory` arg to the corresponding `normalize()` call in `productRegistry.js`.
7. **Currency** — display all prices in **€** (EUR). The data prices are numbers (INR values used as placeholder amounts).

---

## Session Log

| Date | What was done |
|---|---|
| 2026-06-02 | Project scaffolded; Navigation, Product, Footer, HomePage, Carousel components built. CLAUDE.md created. |
| 2026-06-02 | Backend repo created at ecommerce-backend; secrets stripped; Razorpay → Stripe placeholders. |
| 2026-06-02 | Set up React Router v6: CustomerRoutes, NotFound page, category nav wired to useNavigate. |
| 2026-06-02 | Fixed homepage carousels: arrows use AliceCarousel ref API; each section uses correct dataset. |
| 2026-06-02 | Fixed hero carousel: replaced hotlink-blocked images with Unsplash CDN; removed -z-10. |
| 2026-06-02 | Added Redux Toolkit store with 6 slices; Axios instance with JWT interceptor; Provider in index.js. |
| 2026-06-02 | Implemented product detail page; productRegistry normalises all datasets with stable IDs; both card types navigate to /product/:id. |
| 2026-06-03 | Fixed mega menu category navigation: Product.jsx now filters by levelThree URL param; productRegistry passes explicit thirdLavelCategory per dataset; navigationData cleaned up (no broken hrefs, Shoes added to Men accessories); Navigation guards against id '#' clicks. |
| 2026-06-03 | Made navbar logo a React Router Link to /. Fixed Company/Stores nav links (were broken — no href, id-based). Added CompanyPage (/company) and StoresPage (/stores) with Finnish content. |
| 2026-06-03 | Full navbar overhaul: all items/subitems are proper Links; routes changed to /collections/:gender/:category; gender field added to productRegistry; SLUG_TO_CATEGORY map in Product.jsx; BrandPage added; mobile literal-string bug fixed; keyboard accessibility added throughout. |
