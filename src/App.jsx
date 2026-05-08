import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Products from "./components/Products"
import CartSidebar from "./components/CartSidebar"

function App() {
  return (
    <div className="bg-black min-h-screen text-white">
      <Navbar />
      <Hero />
      <Products />
      <CartSidebar />
    </div>
  )
}

export default App