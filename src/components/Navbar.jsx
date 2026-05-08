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

  const {
    cartItems,
    isCartOpen,
    setIsCartOpen,
  } = useContext(CartContext)

  useEffect(() => {
    observeUser((currentUser) => {
      setUser(currentUser)
    })
  }, [])

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-black/70 flex items-center justify-between px-8 py-5 border-b border-gray-800">

      <h1 className="text-2xl font-bold text-purple-500">
        ZYRO
      </h1>

      <div className="flex items-center gap-4">

        <button
          onClick={() =>
            setIsCartOpen(!isCartOpen)
          }
          className="bg-purple-600 px-4 py-2 rounded-xl text-sm font-semibold hover:bg-purple-700 transition"
        >
          Cart: {cartItems.length}
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