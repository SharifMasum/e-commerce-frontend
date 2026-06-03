import { Route, Routes } from "react-router-dom";
import Navigation from "../customer/components/Navigation/Navigation";
import Footer from "../customer/components/Footer/Footer";
import HomePage from "../customer/components/pages/HomePage/HomePage";
import Product from "../customer/components/Product/Product";
import ProductDetails from "../customer/components/Product/ProductDetails";
import CompanyPage from "../customer/components/pages/CompanyPage/CompanyPage";
import StoresPage from "../customer/components/pages/StoresPage/StoresPage";
import NotFound from "../Pages/NotFound";

const CustomerRoutes = () => {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />

        {/* Product listing: /:category/:section/:item  e.g. /men/clothing/kurtas */}
        <Route path="/:levelOne/:levelTwo/:levelThree" element={<Product />} />

        <Route path="/product/:productId" element={<ProductDetails />} />
        <Route path="/company" element={<CompanyPage />} />
        <Route path="/stores" element={<StoresPage />} />
        {/* <Route path="/cart" element={<Cart />} /> */}
        {/* <Route path="/checkout" element={<Checkout />} /> */}
        {/* <Route path="/account/order" element={<Order />} /> */}
        {/* <Route path="/account/order/:orderId" element={<OrderDetails />} /> */}
        {/* <Route path="/account/rate/:productId" element={<RateProduct />} /> */}
        {/* <Route path="/payment/:orderId" element={<PaymentSuccess />} /> */}

        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default CustomerRoutes;
