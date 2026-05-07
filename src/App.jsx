function App() {
  return (
    <div className="bg-[#0f0f0f] text-white min-h-screen">

      {/* Navbar */}
      <nav className="flex items-center justify-between px-8 py-5 border-b border-gray-800">
        <h1 className="text-2xl font-bold text-purple-500">
          ZYRO
        </h1>

        <ul className="flex gap-6 text-sm">
          <li className="hover:text-purple-400 cursor-pointer">Home</li>
          <li className="hover:text-purple-400 cursor-pointer">Products</li>
          <li className="hover:text-purple-400 cursor-pointer">Contact</li>
        </ul>
      </nav>

      {/* Hero */}
      <section className="flex flex-col items-center justify-center text-center py-32 px-6">

        <p className="text-purple-400 mb-4">
          FUTURE STREETWEAR
        </p>

        <h2 className="text-6xl font-bold max-w-4xl leading-tight">
          Discover The Next Generation Sneakers
        </h2>

        <p className="text-gray-400 mt-6 max-w-xl">
          Modern sneaker marketplace built with React, Tailwind, and Firebase.
        </p>

        <button className="mt-8 bg-purple-600 hover:bg-purple-700 px-8 py-3 rounded-xl font-semibold transition">
          Shop Now
        </button>
      </section>
      {/* Products */}
<section className="px-8 pb-20">

  <h3 className="text-3xl font-bold mb-10">
    Featured Products
  </h3>

  <div className="grid md:grid-cols-3 gap-8">

    {/* Card 1 */}
    <div className="bg-[#1a1a1a] rounded-2xl overflow-hidden border border-gray-800 hover:border-purple-500 transition">

      <img
        src="https://images.unsplash.com/photo-1542291026-7eec264c27ff"
        alt="shoe"
        className="w-full h-64 object-cover"
      />

      <div className="p-5">
        <h4 className="text-xl font-semibold">
          Zyro Runner X
        </h4>

        <p className="text-gray-400 mt-2">
          Premium futuristic sneakers.
        </p>

        <div className="flex items-center justify-between mt-5">
          <span className="text-purple-400 font-bold">
            $120
          </span>

          <button className="bg-purple-600 px-4 py-2 rounded-lg hover:bg-purple-700">
            Buy
          </button>
        </div>
      </div>

    </div>

    {/* Card 2 */}
    <div className="bg-[#1a1a1a] rounded-2xl overflow-hidden border border-gray-800 hover:border-purple-500 transition">

      <img
        src="https://images.unsplash.com/photo-1600185365483-26d7a4cc7519"
        alt="shoe"
        className="w-full h-64 object-cover"
      />

      <div className="p-5">
        <h4 className="text-xl font-semibold">
          Neon Street
        </h4>

        <p className="text-gray-400 mt-2">
          Urban style with comfort.
        </p>

        <div className="flex items-center justify-between mt-5">
          <span className="text-purple-400 font-bold">
            $150
          </span>

          <button className="bg-purple-600 px-4 py-2 rounded-lg hover:bg-purple-700">
            Buy
          </button>
        </div>
      </div>

    </div>

    {/* Card 3 */}
    <div className="bg-[#1a1a1a] rounded-2xl overflow-hidden border border-gray-800 hover:border-purple-500 transition">

      <img
        src="https://images.unsplash.com/photo-1608231387042-66d1773070a5"
        alt="shoe"
        className="w-full h-64 object-cover"
      />

      <div className="p-5">
        <h4 className="text-xl font-semibold">
          Velocity Pro
        </h4>

        <p className="text-gray-400 mt-2">
          Built for next-gen movement.
        </p>

        <div className="flex items-center justify-between mt-5">
          <span className="text-purple-400 font-bold">
            $180
          </span>

          <button className="bg-purple-600 px-4 py-2 rounded-lg hover:bg-purple-700">
            Buy
          </button>
        </div>
      </div>

    </div>

  </div>

</section>
{/* Footer */}
<footer className="border-t border-gray-800 py-8 text-center text-gray-500">
  <p>
    © 2026 Zyro Store. All rights reserved.
  </p>
</footer>

    </div>
  )
}

export default App