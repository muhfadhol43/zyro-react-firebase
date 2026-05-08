import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Products from "./components/Products"

function App() {
  return (
    <div className="bg-black min-h-screen text-white">
      <Navbar />
      <Hero />
      <Products />
    </div>
  )
}

export default App