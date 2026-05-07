function Footer() {
  return (
    <footer className="border-t border-gray-800 mt-20">

      <div className="max-w-7xl mx-auto px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-6">

        <div>
          <h2 className="text-2xl font-bold text-purple-500">
            ZYRO
          </h2>

          <p className="text-gray-500 mt-2 text-sm">
            Future streetwear ecommerce built with React & Tailwind.
          </p>
        </div>

        <ul className="flex gap-6 text-sm text-gray-400">
          <li className="hover:text-purple-400 cursor-pointer transition">
            Home
          </li>

          <li className="hover:text-purple-400 cursor-pointer transition">
            Products
          </li>

          <li className="hover:text-purple-400 cursor-pointer transition">
            Contact
          </li>
        </ul>

      </div>

      <div className="border-t border-gray-800 py-5 text-center text-gray-600 text-sm">
        © 2026 Zyro Store. All rights reserved.
      </div>

    </footer>
  )
}

export default Footer