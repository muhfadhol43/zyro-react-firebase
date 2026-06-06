import {
  useContext,
  useEffect,
} from "react"

import { CartContext } from "../context/CartContext"

import toast from "react-hot-toast"

import { motion } from "framer-motion"

function CartSidebar() {
  const {
    cartItems,
    removeFromCart,
    increaseQty,
    decreaseQty,
    clearCart,
    isCartOpen,
    setIsCartOpen,
  } = useContext(CartContext)

  const subtotal =
    cartItems.reduce(
      (total, item) =>
        total +
        item.price *
          (item.quantity || 1),
      0
    )

  const tax = subtotal * 0.1

  const total = subtotal + tax

  const totalItems =
    cartItems.reduce(
      (total, item) =>
        total +
        (item.quantity || 1),
      0
    )

  const handleCheckout = () => {
    toast.success(
      "🎉 Order placed successfully!"
    )

    clearCart()

    setIsCartOpen(false)
  }

  useEffect(() => {
    if (
      cartItems.length === 0 &&
      isCartOpen
    ) {
      setIsCartOpen(false)
    }
  }, [
    cartItems,
    isCartOpen,
    setIsCartOpen,
  ])

  return (
    <>
      {isCartOpen && (
        <div
          onClick={() =>
            setIsCartOpen(false)
          }
          className="fixed inset-0 bg-black/60 z-40"
        />
      )}

      <motion.div
        initial={{ x: 400 }}
        animate={{
          x: isCartOpen
            ? 0
            : 400,
        }}
        transition={{
          duration: 0.3,
        }}
        className="fixed top-0 right-0 w-80 h-screen bg-zinc-900 border-l border-zinc-800 p-6 overflow-y-auto z-50"
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
          {cartItems.length ===
            0 && (
            <div className="bg-black p-8 rounded-2xl text-center">
              <div className="text-5xl mb-3">
                🛒
              </div>

              <p className="text-gray-400">
                Your cart is empty
              </p>
            </div>
          )}

          {cartItems.map(
            (item, index) => (
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
                        removeFromCart(
                          index
                        )
                      }
                      className="text-red-500 text-sm"
                    >
                      ✕
                    </button>
                  </div>

                  <p className="text-purple-400 mt-1">
                    $
                    {item.price}
                  </p>

                  <div className="flex items-center gap-3 mt-3">
                    <button
                      onClick={() =>
                        decreaseQty(
                          item.id
                        )
                      }
                      className="bg-zinc-800 w-7 h-7 rounded-lg"
                    >
                      -
                    </button>

                    <p className="text-sm">
                      {item.quantity ||
                        1}
                    </p>

                    <button
                      onClick={() =>
                        increaseQty(
                          item.id
                        )
                      }
                      className="bg-zinc-800 w-7 h-7 rounded-lg"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            )
          )}
        </div>

        <div className="mt-6 border-t border-zinc-800 pt-4">
          <div className="flex justify-between mb-2">
            <span className="text-gray-400">
              Items
            </span>

            <span>
              {totalItems}
            </span>
          </div>

          <div className="flex justify-between mb-2">
            <span className="text-gray-400">
              Subtotal
            </span>

            <span>
              $
              {subtotal.toFixed(
                2
              )}
            </span>
          </div>

          <div className="flex justify-between mb-2">
            <span className="text-gray-400">
              Tax (10%)
            </span>

            <span>
              $
              {tax.toFixed(2)}
            </span>
          </div>

          <div className="flex justify-between text-xl font-bold mt-4">
            <span>Total</span>

            <span className="text-purple-400">
              $
              {total.toFixed(
                2
              )}
            </span>
          </div>
        </div>

        <button
          onClick={clearCart}
          disabled={
            cartItems.length === 0
          }
          className={`mt-6 w-full py-3 rounded-xl font-semibold transition ${
            cartItems.length ===
            0
              ? "bg-zinc-700 cursor-not-allowed"
              : "bg-red-500 hover:bg-red-600"
          }`}
        >
          Clear Cart
        </button>

        <button
          onClick={
            handleCheckout
          }
          disabled={
            cartItems.length === 0
          }
          className={`mt-4 w-full py-3 rounded-xl font-semibold transition ${
            cartItems.length ===
            0
              ? "bg-zinc-700 cursor-not-allowed"
              : "bg-purple-600 hover:bg-purple-700"
          }`}
        >
          Checkout
        </button>
      </motion.div>
    </>
  )
}

export default CartSidebar