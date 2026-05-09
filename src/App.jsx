import {
  Routes,
  Route,
  useLocation,
} from "react-router-dom"

import {
  AnimatePresence,
} from "framer-motion"

import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Products from "./components/Products"
import CartSidebar from "./components/CartSidebar"

import ProductDetail from "./pages/ProductDetail"

function HomePage() {
  return (
    <>
      <Hero />
      <Products />
    </>
  )
}

function App() {

  const location = useLocation()

  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-950 via-black to-zinc-900 text-white">

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

        </Routes>

      </AnimatePresence>

      <CartSidebar />

    </div>
  )
}

export default App