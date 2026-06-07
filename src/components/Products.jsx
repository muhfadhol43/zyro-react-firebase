import { useEffect, useState, useContext } from "react"
import { collection, getDocs } from "firebase/firestore"
import { db } from "../firebase/config"
import { CartContext } from "../context/CartContext"
import { WishlistContext } from "../context/WishlistContext"
import toast from "react-hot-toast"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"

function Products() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  const [search, setSearch] = useState("")
  const [category, setCategory] = useState("All")
  const [sortBy, setSortBy] = useState("default")

  const [visibleProducts, setVisibleProducts] =
    useState(6)

  const { addToCart } = useContext(CartContext)

const {
  addToWishlist,
  removeFromWishlist,
  isInWishlist,
} = useContext(WishlistContext)

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const querySnapshot = await getDocs(
          collection(db, "products")
        )

        const data = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }))

        setProducts(data)

        console.log("Products:", data)
      } catch (error) {
        console.error("Firestore Error:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchProducts()
  }, [])

  const categories = [
    "All",
    ...new Set(
      products
        .map((product) => product.category)
        .filter(Boolean)
    ),
  ]

  const filteredProducts = products
    .filter((product) => {
      const matchSearch = product.name
        ?.toLowerCase()
        .includes(search.toLowerCase())

      const matchCategory =
        category === "All"
          ? true
          : product.category === category

      return matchSearch && matchCategory
    })
    .sort((a, b) => {
      if (sortBy === "low") {
        return a.price - b.price
      }

      if (sortBy === "high") {
        return b.price - a.price
      }

      return 0
    })

  if (loading) {
    return (
      <section className="px-6 py-20">
        <div className="grid md:grid-cols-3 gap-8">
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="bg-zinc-900 rounded-2xl overflow-hidden animate-pulse"
            >
              <div className="h-72 bg-zinc-800"></div>

              <div className="p-5">
                <div className="h-6 bg-zinc-800 rounded w-2/3"></div>
                <div className="h-5 bg-zinc-800 rounded w-1/3 mt-4"></div>
                <div className="h-12 bg-zinc-800 rounded-xl mt-6"></div>
              </div>
            </div>
          ))}
        </div>
      </section>
    )
  }

  return (
    <section className="px-6 py-20">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-10">
        <div>
          <h2 className="text-5xl font-bold">
            Featured Products
          </h2>

          <p className="text-gray-400 mt-2">
            {filteredProducts.length} Products Found
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-4 w-full md:w-auto">
          <input
            type="text"
            placeholder="Search sneakers..."
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
            className="bg-zinc-900 border border-zinc-800 px-5 py-3 rounded-2xl outline-none focus:border-purple-500 min-w-[220px]"
          />

          <select
            value={category}
            onChange={(e) =>
              setCategory(e.target.value)
            }
            className="bg-zinc-900 border border-zinc-800 px-5 py-3 rounded-2xl outline-none"
          >
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>

          <select
            value={sortBy}
            onChange={(e) =>
              setSortBy(e.target.value)
            }
            className="bg-zinc-900 border border-zinc-800 px-5 py-3 rounded-2xl outline-none"
          >
            <option value="default">
              Sort By
            </option>

            <option value="low">
              Price: Low → High
            </option>

            <option value="high">
              Price: High → Low
            </option>
          </select>
        </div>
      </div>

      {filteredProducts.length === 0 ? (
        <div className="bg-zinc-900 rounded-3xl p-12 text-center border border-zinc-800">
          <h3 className="text-2xl font-semibold mb-2">
            No Products Found
          </h3>

          <p className="text-gray-400">
            Try changing your search or category.
          </p>
        </div>
      ) : (
        <>
          <div className="grid md:grid-cols-3 gap-8">
            {filteredProducts
              .slice(0, visibleProducts)
              .map((product) => (
                <motion.div
                  key={product.id}
                  initial={{
                    opacity: 0,
                    y: 40,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  whileHover={{
                    y: -10,
                    scale: 1.02,
                  }}
                  transition={{
                    duration: 0.4,
                  }}
                >
                  <Link
  to={`/product/${product.id}`}
  className="relative bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-800 hover:border-purple-500 transition block"
>
  <button
    onClick={(e) => {
      e.preventDefault()

      if (isInWishlist(product.id)) {
        removeFromWishlist(product.id)

        toast.success(
          `${product.name} removed from wishlist`
        )
      } else {
        addToWishlist(product)

        toast.success(
          `${product.name} added to wishlist`
        )
      }
    }}
    className="absolute top-3 right-3 z-20 w-10 h-10 rounded-full bg-black/70 flex items-center justify-center text-xl hover:scale-110 transition"
  >
    {isInWishlist(product.id)
      ? "❤️"
      : "🤍"}
  </button>
                    {product.featured && (
                      <div className="absolute top-3 left-3 bg-yellow-500 text-black px-3 py-1 rounded-full text-xs font-bold z-10">
                        🔥 Featured
                      </div>
                    )}

                    <img
                      src={product.image}
                      alt={product.name}
                      className="h-72 w-full object-cover"
                    />

                    <div className="p-5">
                      <h3 className="text-2xl font-semibold">
                        {product.name}
                      </h3>

                      <div className="flex justify-between items-center mt-2">
                        <span className="text-yellow-400">
                          ⭐ {product.rating || 5}
                        </span>

                        <span className="text-green-400 text-sm">
                          📦 {product.stock || 0} Stock
                        </span>
                      </div>

                      <p className="text-gray-400 text-sm mt-2">
                        {product.category}
                      </p>

                      <p className="text-purple-400 mt-3 text-lg font-semibold">
                        ${product.price}
                      </p>

                      <button
                        onClick={(e) => {
                          e.preventDefault()

                          addToCart(product)

                          toast.success(
                            `${product.name} added to cart`
                          )
                        }}
                        className="mt-5 w-full bg-purple-600 hover:bg-purple-700 py-3 rounded-xl font-semibold transition"
                      >
                        Add To Cart
                      </button>
                    </div>
                  </Link>
                </motion.div>
              ))}
          </div>

          {visibleProducts <
            filteredProducts.length && (
            <div className="flex justify-center mt-12">
              <button
                onClick={() =>
                  setVisibleProducts(
                    (prev) => prev + 6
                  )
                }
                className="px-8 py-3 bg-purple-600 hover:bg-purple-700 rounded-2xl font-semibold transition"
              >
                Load More
              </button>
            </div>
          )}
        </>
      )}
    </section>
  )
}

export default Products