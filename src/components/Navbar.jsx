import {
  useEffect,
  useState,
  useContext,
} from "react"

import {
  observeUser,
  logout,
} from "../firebase/auth"

import { CartContext } from "../context/CartContext"

function Navbar() {
  const [user, setUser] = useState(null)

  const [scrolled, setScrolled] =
    useState(false)

  const {
    cartItems,
    isCartOpen,
    setIsCartOpen,
  } = useContext(CartContext)

  const totalItems =
    cartItems.reduce(
      (total, item) =>
        total + item.quantity,
      0
    )

  useEffect(() => {
    observeUser((currentUser) => {
      setUser(currentUser)
    })
  }, [])

  useEffect(() => {

    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener(
      "scroll",
      handleScroll
    )

    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      )

  }, [])

  return (
    <nav
      className={`sticky top-0 z-50 backdrop-blur-md flex items-center justify-between px-8 py-5 border-b transition-all duration-300 ${
        scrolled
          ? "bg-black/90 border-zinc-800 shadow-2xl"
          : "bg-black/60 border-transparent"
      }`}
    >

      <h1 className="text-2xl font-bold text-purple-500">
        ZYRO
      </h1>

      <div className="flex items-center gap-4">

        <button
          onClick={() =>
            setIsCartOpen(!isCartOpen)
          }
          className="relative bg-purple-600 px-5 py-3 rounded-xl text-sm font-semibold hover:bg-purple-700 transition"
        >

          Cart

          {totalItems > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-6 h-6 rounded-full flex items-center justify-center">
              {totalItems}
            </span>
          )}

        </button>

        {user ? (
          <>
            <img
              src={user.photoURL}
              alt="user"
              className="w-10 h-10 rounded-full border border-purple-500"
            />

            <p className="text-sm">
              {user.displayName}
            </p>

            <button
              onClick={logout}
              className="bg-red-500 px-4 py-2 rounded-lg text-sm"
            >
              Logout
            </button>
          </>
        ) : (
          <p className="text-gray-400 text-sm">
            Guest
          </p>
        )}

      </div>

    </nav>
  )
}

export default Navbar