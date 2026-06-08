import { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Brands from "./components/Brands";
import Products from "./components/Products";
import CartSidebar from "./components/CartSidebar";
import Footer from "./components/Footer";
import Loader from "./components/Loader";

import ProductDetail from "./pages/ProductDetail";
import Checkout from "./pages/Checkout";
import Wishlist from "./pages/Wishlist";
import NotFound from "./pages/NotFound";

function HomePage() {
  return (
    <>
      <Hero />
      <Brands />
      <Products />
    </>
  );
}

function App() {
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      <AnimatePresence mode="wait">
        <Routes
          location={location}
          key={location.pathname}
        >
          <Route
            path="/"
            element={<HomePage />}
          />

          <Route
            path="/product/:id"
            element={<ProductDetail />}
          />

          <Route
            path="/checkout"
            element={<Checkout />}
          />

          <Route
            path="/wishlist"
            element={<Wishlist />}
          />

          <Route
            path="*"
            element={<NotFound />}
          />
        </Routes>
      </AnimatePresence>

      <Footer />
      <CartSidebar />
    </div>
  );
}

export default App;