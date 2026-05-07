import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Products from "./components/Products"
import Footer from "./components/Footer"

function App() {
  return (
    <div className="bg-[#0f0f0f] text-white min-h-screen">
      <Navbar />
      <Hero />
      <Products />
      <Footer />
    </div>
  )
}

export default App