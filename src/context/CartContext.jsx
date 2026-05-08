import {
  createContext,
  useState,
  useEffect,
} from "react"

export const CartContext = createContext()

function CartProvider({ children }) {

  const [cartItems, setCartItems] =
    useState(() => {
      const savedCart =
        localStorage.getItem("cart")

      return savedCart
        ? JSON.parse(savedCart)
        : []
    })

  const [isCartOpen, setIsCartOpen] =
    useState(false)

  const addToCart = (product) => {

    const existingItem =
      cartItems.find(
        (item) => item.id === product.id
      )

    if (existingItem) {

      setCartItems((prev) =>
        prev.map((item) =>
          item.id === product.id
            ? {
                ...item,
                quantity:
                  (item.quantity || 1) + 1,
              }
            : item
        )
      )

    } else {

      setCartItems((prev) => [
        ...prev,
        {
          ...product,
          quantity: 1,
        },
      ])

    }
  }

  const removeFromCart = (index) => {
    setCartItems((prev) =>
      prev.filter((_, i) => i !== index)
    )
  }

  const increaseQty = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity:
                (item.quantity || 1) + 1,
            }
          : item
      )
    )
  }

  const decreaseQty = (id) => {
    setCartItems((prev) =>
      prev
        .map((item) =>
          item.id === id
            ? {
                ...item,
                quantity:
                  item.quantity - 1,
              }
            : item
        )
        .filter((item) => item.quantity > 0)
    )
  }

  useEffect(() => {
    localStorage.setItem(
      "cart",
      JSON.stringify(cartItems)
    )
  }, [cartItems])

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        increaseQty,
        decreaseQty,
        isCartOpen,
        setIsCartOpen,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider