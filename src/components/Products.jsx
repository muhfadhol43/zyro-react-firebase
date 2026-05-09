import {
  useEffect,
  useState,
  useContext,
} from "react"

import {
  collection,
  getDocs,
} from "firebase/firestore"

import { db } from "../firebase/config"

import { CartContext } from "../context/CartContext"

import toast from "react-hot-toast"

import { Link } from "react-router-dom"

import { motion } from "framer-motion"

function Products() {
  const [products, setProducts] = useState([])

  const [loading, setLoading] =
    useState(true)

  const [search, setSearch] =
    useState("")

  const { addToCart } =
    useContext(CartContext)

  useEffect(() => {
    const fetchProducts = async () => {
      const querySnapshot = await getDocs(
        collection(db, "products")
      )

      const data = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }))

      setProducts(data)

      setLoading(false)
    }

    fetchProducts()
  }, [])

  const filteredProducts =
    products.filter((product) =>
      product.name
        .toLowerCase()
        .includes(search.toLowerCase())
    )

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

      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-10">

        <h2 className="text-5xl font-bold">
          Featured Products
        </h2>

        <input
          type="text"
          placeholder="Search sneakers..."
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
          className="bg-zinc-900 border border-zinc-800 px-5 py-3 rounded-2xl outline-none focus:border-purple-500"
        />

      </div>

      <div className="grid md:grid-cols-3 gap-8">

        {filteredProducts.length === 0 && (
          <div className="col-span-full bg-zinc-900 p-10 rounded-3xl text-center">

            <p className="text-gray-400 text-lg">
              No sneakers found.
            </p>

          </div>
        )}

        {filteredProducts.map((product) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{
              y: -10,
              scale: 1.02,
            }}
            transition={{ duration: 0.4 }}
          >

            <Link
              to={`/product/${product.id}`}
              className="bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-800 hover:border-purple-500 transition block"
            >

              <img
                src={product.image}
                alt={product.name}
                className="h-72 w-full object-cover"
              />

              <div className="p-5">

                <h3 className="text-2xl font-semibold">
                  {product.name}
                </h3>

                <p className="text-purple-400 mt-2 text-lg">
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

    </section>
  )
}

export default Products