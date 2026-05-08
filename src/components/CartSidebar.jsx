import { useContext } from "react"
import { CartContext } from "../context/CartContext"

function CartSidebar() {

  const {
    cartItems,
    removeFromCart,
    increaseQty,
    decreaseQty,
    isCartOpen,
    setIsCartOpen,
  } = useContext(CartContext)

  return (
    <>
      {/* Overlay */}
      {isCartOpen && (
        <div
          onClick={() =>
            setIsCartOpen(false)
          }
          className="fixed inset-0 bg-black/60 z-40"
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 w-80 h-screen bg-zinc-900 border-l border-zinc-800 p-6 transition duration-300 overflow-y-auto z-50 ${
          isCartOpen
            ? "translate-x-0"
            : "translate-x-full"
        }`}
      >

        <div className="flex items-center justify-between mb-6">

          <h2 className="text-3xl font-bold">
            Your Cart
          </h2>

          <button
            onClick={() =>
              setIsCartOpen(false)
            }
            className="text-gray-400 hover:text-white text-xl"
          >
            ✕
          </button>

        </div>

        <div className="space-y-4">

          {cartItems.length === 0 && (
            <div className="bg-black p-6 rounded-2xl text-center">

              <p className="text-gray-400">
                Your cart is empty
              </p>

            </div>
          )}

          {cartItems.map((item, index) => (
            <div
              key={index}
              className="bg-black p-4 rounded-2xl flex gap-4"
            >

              <img
                src={item.image}
                alt={item.name}
                className="w-20 h-20 object-cover rounded-xl"
              />

              <div className="flex-1">

                <div className="flex items-start justify-between">

                  <h3 className="font-semibold">
                    {item.name}
                  </h3>

                  <button
                    onClick={() =>
                      removeFromCart(index)
                    }
                    className="text-red-500 text-sm"
                  >
                    ✕
                  </button>

                </div>

                <div className="mt-2">

                  <p className="text-purple-400">
                    ${item.price}
                  </p>

                  <div className="flex items-center gap-3 mt-2">

                    <button
                      onClick={() =>
                        decreaseQty(item.id)
                      }
                      className="bg-zinc-800 w-7 h-7 rounded-lg"
                    >
                      -
                    </button>

                    <p className="text-sm text-gray-300">
                      {item.quantity || 1}
                    </p>

                    <button
                      onClick={() =>
                        increaseQty(item.id)
                      }
                      className="bg-zinc-800 w-7 h-7 rounded-lg"
                    >
                      +
                    </button>

                  </div>

                </div>

              </div>

            </div>
          ))}

        </div>

        <div className="mt-6 border-t border-zinc-800 pt-4">

          <div className="flex items-center justify-between text-lg font-semibold">

            <span>Total</span>

            <span className="text-purple-400">
              $
              {cartItems.reduce(
                (total, item) =>
                  total +
                  item.price *
                    (item.quantity || 1),
                0
              )}
            </span>

          </div>

        </div>

        <button
          disabled={cartItems.length === 0}
          className={`mt-6 w-full py-3 rounded-xl font-semibold transition ${
            cartItems.length === 0
              ? "bg-zinc-700 cursor-not-allowed"
              : "bg-purple-600 hover:bg-purple-700"
          }`}
        >
          Checkout
        </button>

      </div>
    </>
  )
}

export default CartSidebar