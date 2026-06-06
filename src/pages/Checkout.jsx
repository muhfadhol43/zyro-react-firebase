import { useState, useContext } from "react"
import { CartContext } from "../context/CartContext"

import {
  collection,
  addDoc,
  serverTimestamp,
} from "firebase/firestore"

import { db } from "../firebase/config"

import toast from "react-hot-toast"
import { useNavigate } from "react-router-dom"

function Checkout() {
  const navigate = useNavigate()

  const {
    cartItems,
    clearCart,
  } = useContext(CartContext)

  const [name, setName] = useState("")
  const [email, setEmail] =
    useState("")
  const [address, setAddress] =
    useState("")
  const [loading, setLoading] =
    useState(false)

  const total = cartItems.reduce(
    (acc, item) =>
      acc +
      item.price *
        (item.quantity || 1),
    0
  )

  const handleOrder =
    async (e) => {
      e.preventDefault()

      if (
        !name ||
        !email ||
        !address
      ) {
        toast.error(
          "Please fill all fields"
        )
        return
      }

      try {
        setLoading(true)

        await addDoc(
          collection(db, "orders"),
          {
            customerName: name,
            email,
            address,
            items: cartItems,
            total,
            createdAt:
              serverTimestamp(),
          }
        )

        toast.success(
          "Order placed successfully!"
        )

        clearCart()

        navigate("/")
      } catch (error) {
        console.error(error)

        toast.error(
          "Failed to place order"
        )
      } finally {
        setLoading(false)
      }
    }

  return (
    <section className="px-6 py-20 max-w-5xl mx-auto">
      <h1 className="text-5xl font-bold mb-10">
        Checkout
      </h1>

      <div className="grid md:grid-cols-2 gap-10">
        <form
          onSubmit={handleOrder}
          className="space-y-5"
        >
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) =>
              setName(
                e.target.value
              )
            }
            className="w-full bg-zinc-900 border border-zinc-800 px-5 py-4 rounded-2xl"
          />

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) =>
              setEmail(
                e.target.value
              )
            }
            className="w-full bg-zinc-900 border border-zinc-800 px-5 py-4 rounded-2xl"
          />

          <textarea
            placeholder="Address"
            value={address}
            onChange={(e) =>
              setAddress(
                e.target.value
              )
            }
            rows="5"
            className="w-full bg-zinc-900 border border-zinc-800 px-5 py-4 rounded-2xl"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-purple-600 hover:bg-purple-700 py-4 rounded-2xl font-semibold"
          >
            {loading
              ? "Processing..."
              : "Place Order"}
          </button>
        </form>

        <div className="bg-zinc-900 p-6 rounded-3xl">
          <h2 className="text-2xl font-bold mb-6">
            Order Summary
          </h2>

          <div className="space-y-4">
            {cartItems.map(
              (item) => (
                <div
                  key={item.id}
                  className="flex justify-between"
                >
                  <span>
                    {item.name} x{" "}
                    {item.quantity ||
                      1}
                  </span>

                  <span>
                    $
                    {item.price *
                      (item.quantity ||
                        1)}
                  </span>
                </div>
              )
            )}
          </div>

          <div className="border-t border-zinc-700 mt-6 pt-6 flex justify-between text-xl font-bold">
            <span>Total</span>
            <span>
              ${total}
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Checkout