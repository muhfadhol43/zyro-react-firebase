function Navbar() {
  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-black/70 flex items-center justify-between px-8 py-5 border-b border-gray-800">

      <h1 className="text-2xl font-bold text-purple-500">
        ZYRO
      </h1>

      <ul className="flex gap-6 text-sm">
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

    </nav>
  )
}

export default Navbar