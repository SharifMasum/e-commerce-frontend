# HANDOFF.md — ecommerce-frontend

> Last updated: 2026-06-03  
> Course: JAMK Application Framework  
> Co-authored with [Claude Code](https://claude.ai/code) by Anthropic

---

## Repos & Hosting

| Repo | Location | Remote |
|---|---|---|
| Frontend (this repo) | `D:\JAMK\application-framework\ecommerce-frontend` | https://github.com/SharifMasum/e-commerce-frontend |
| Backend | `D:\JAMK\application-framework\ecommerce-backend` | https://github.com/SharifMasum/ecommerce-backend (private) |
| Source reference | `D:\JAMK\application-framework\ecommerce-spring-boot-react` | — |

Planned deployment: **Vercel** (frontend) + **Railway** (Spring Boot backend).  
Not deployed yet — both repos are local/GitHub only.

---

## Tech Stack

| Layer | Choice |
|---|---|
| UI | React 18 + Create React App 5 |
| Routing | React Router DOM v6 |
| State | Redux Toolkit + react-redux |
| HTTP | Axios with JWT request interceptor |
| Components | MUI v5 + Headless UI v1 |
| Styling | Tailwind CSS v3 (layout) + MUI (interactive elements) |
| Icons | Heroicons v2 + MUI Icons |
| Carousel | react-alice-carousel v2 |

---

## What Is Built

### Navigation
- Responsive navbar: mobile drawer (Headless UI `Dialog`) + desktop mega-menu flyout (`Popover`)
- **Every item is a working `<Link>`** — no dead clicks anywhere
- Desktop flyout: click Women/Men to open panel; "Shop all →" link inside navigates to collection overview; all subitems navigate to their own category page
- Mobile drawer: tab-based; featured images, category subitems, and page links all close the drawer on navigation
- Logo → `/` (keyboard accessible, `aria-label`)
- Company → `/company`, Stores → `/stores`
- Keyboard accessible throughout (`focus:outline-none focus:underline` on all link items)

### Pages

| Page | Route | Status |
|---|---|---|
| Home | `/` `/home` | ✅ Hero carousel + 5 product section carousels |
| Collection overview | `/collections/women` `/collections/men` | ✅ Shows all products for that gender |
| Category listing | `/collections/women/sarees` etc. | ✅ Filtered; empty state for categories with no data |
| Brand page | `/brands/full-nelson` etc. | ✅ Placeholder — coming-soon UI, name derived from slug |
| Product detail | `/product/:id` | ✅ Image, price (€), sizes, qty, Add to Cart |
| Company | `/company` | ✅ About, stats, Vision, Values, Careers, Contact |
| Stores | `/stores` | ✅ 7 Finnish cities with address and hours |
| 404 | `*` | ✅ |

### Data Layer
All product data is **static** (no backend calls yet). Five datasets are normalised in `src/Data/productRegistry.js`:

| Prefix | Dataset | Gender | URL slug |
|---|---|---|---|
| `mk-N` | Men's Kurta | `men` | `kurtas` |
| `ms-N` | Men's Shirt | `men` | `shirts` |
| `msh-N` | Men's Shoes | `men` | `shoes` |
| `ws-N` | Women's Saree | `women` | `sarees` |
| `wd-N` | Women's Dress | `women` | `dresses` |

Filtering is driven by a `SLUG_TO_CATEGORY` map in `Product.jsx` — add an entry here for any new dataset.

### Redux Store
Six slices wired up and ready — all thunks are written but fire against a backend that is not yet running:

```
auth    → register, login, getUser, logout
product → findProducts, findProductById
cart    → getCart, addItemToCart, removeCartItem, updateCartItem
order   → createOrder, getOrderById, getOrderHistory
review  → createReview/Rating, getAllReviews/Ratings
payment → createPayment (Stripe-ready), updatePayment
```

`getUser` is dispatched on every app mount (`App.js`). It will silently fail until the backend is running.

### Axios API Client
`src/config/api.js` — JWT token read from `localStorage` on every request via interceptor. Base URL from `REACT_APP_API_BASE_URL` (default `http://localhost:5454`).

---

## Pending Tasks

### High priority
- [ ] **Auth modal** — Sign-in / sign-up UI. The `authSlice` thunks (`register`, `login`, `getUser`) are ready; just need the modal component wired to Redux. Navigation has `{true ? <Avatar> : <Button>Signin</Button>}` hardcoded — replace `true` with `Boolean(auth.user)` once auth is built.
- [ ] **Cart page** — Route `/cart` is commented out in `CustomerRoutes.jsx`. `cartSlice` is fully written. Need the cart UI component.
- [ ] **Backend connection** — Set `REACT_APP_API_BASE_URL` in `.env.local` to the running Spring Boot URL and replace `findProductById` calls in `ProductDetails.jsx` with the Redux thunk from `productSlice`.

### Medium priority
- [ ] **Checkout flow** — Route `/checkout` commented out. Needs address form, order summary, Stripe payment element.
- [ ] **Stripe payment** — Backend `PaymentController` was adapted from Razorpay; needs updating. Frontend `paymentSlice` is Stripe-ready but untested.
- [ ] **Orders pages** — Routes `/account/order` and `/account/order/:orderId` commented out. `orderSlice` is written.
- [ ] **Product filter wiring** — The sidebar filter UI in `Product.jsx` (checkboxes, radio price range) is rendered but does NOT filter the product list. Needs `handleFilter` / `handleRadioFilterChange` to actually apply to `filteredProducts`.
- [ ] **Sort wiring** — Sort dropdown (Price: Low to High / High to Low) renders but does nothing.

### Low priority / future
- [ ] **Admin panel** — Route `/admin/*` commented out in `App.js`; blocked on auth.
- [ ] **Brand pages** — Currently show a "coming soon" placeholder. Once backend is connected, filter products by brand name.
- [ ] **Categories with no data** — Many nav items (Tops, Jeans, Sweaters, Jackets, Watches, Bags, etc.) show an empty state. Add data files + registry entries to populate them.
- [ ] **Deployment** — Vercel (frontend) + Railway (backend). Add env vars in both dashboards.
- [ ] **Currency banner** — Navbar shows `EUR`; the flag image points to a Tailwind UI Finland flag that may 404. Replace with a local asset or remove.
- [ ] **"Sign in" link in mobile drawer** — Currently links to `/signin` which has no route. Wire to auth modal when built.

---

## Known Issues

| Issue | Location | Notes |
|---|---|---|
| Product filter sidebar not wired | `Product.jsx` | UI renders; `handleFilter` updates URL params but `filteredProducts` ignores them |
| Sort dropdown does nothing | `Product.jsx` | `sortOptions` array exists; no sort logic applied to `filteredProducts` |
| Auth state hardcoded `true` | `Navigation.jsx` line ~170 | Avatar always shows; Sign-in button never shows |
| Cart count hardcoded `2` | `Navigation.jsx` | Badge is static; needs `cart.cartItems.length` from Redux |
| `console.log("includes")` left in | `Product.jsx` | Debug log in `handleFilter`; harmless but should be removed |
| No error boundaries | App-wide | A crash in any component brings down the whole page |
| `mens_shoes` / `womens_saree` use `image` not `imageUrl` | Data files | Handled in `productRegistry.js` normalize; raw files inconsistent |
| Prices are INR amounts displayed as EUR | All product data | Source data is in ₹; values are reused as € placeholder amounts |

---

## How to Add a New Product Category

1. **Add a data file** in `src/Data/` (JS or JSON, matching the existing schema)
2. **Register it** in `productRegistry.js` — add a `normalize()` call with the correct `category` string and `gender`
3. **Add the nav item** in `navigationData.js` with `href: '/collections/:gender/:slug'`
4. **Add a slug mapping** in `Product.jsx`'s `SLUG_TO_CATEGORY` object: `'gender:slug': 'thirdLavelCategory'`
5. No new route needed — `/collections/:gender/:category` already handles it

---

## Development

```powershell
# Install
npm install

# Run dev server (http://localhost:3000)
npm start

# Production build
npm run build

# Tests
npm test
```

**Environment variables** — create `.env.local` (git-ignored):
```
REACT_APP_API_BASE_URL=http://localhost:5454
```

---

## File Map — Key Files to Know

| File | Why you'd touch it |
|---|---|
| `src/customer/components/Navigation/navigationData.js` | Add/rename nav items or change their routes |
| `src/Data/productRegistry.js` | Add a new dataset or change normalisation |
| `src/customer/components/Product/Product.jsx` | Add slug mappings, wire filters/sort |
| `src/Routers/CustomerRoutes.jsx` | Add or uncomment routes |
| `src/Redux/Auth/authSlice.js` | Auth logic |
| `src/Redux/Customers/cartSlice.js` | Cart logic |
| `src/config/api.js` | Axios base URL and JWT interceptor |
| `src/App.js` | App-level effects (getUser on mount) |
