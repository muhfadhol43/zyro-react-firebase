import {
  useEffect,
  useState,
  useContext,
} from "react"

import {
  doc,
  getDoc,
} from "firebase/firestore"

import {
  useParams,
  useNavigate,
} from "react-router-dom"

import { db } from "../firebase/config"

import { CartContext } from "../context/CartContext"

import toast from "react-hot-toast"

import { motion } from "framer-motion"

function ProductDetail() {

  const { id } = useParams()

  const navigate = useNavigate()

  const [product, setProduct] =
    useState(null)

  const [quantity, setQuantity] =
    useState(1)

  const { addToCart } =
    useContext(CartContext)

  useEffect(() => {

    const fetchProduct = async () => {

      const docRef = doc(
        db,
        "products",
        id
      )

      const docSnap =
        await getDoc(docRef)

      if (docSnap.exists()) {
        setProduct({
          id: docSnap.id,
          ...docSnap.data(),
        })
      }
    }

    fetchProduct()

  }, [id])

  if (!product) {
    return (
      <div className="px-8 py-20">

        <div className="grid md:grid-cols-2 gap-12 items-center animate-pulse">

          <div className="h-[500px] bg-zinc-900 rounded-3xl"></div>

          <div>

            <div className="h-12 bg-zinc-900 rounded w-2/3"></div>

            <div className="h-8 bg-zinc-900 rounded w-1/3 mt-6"></div>

            <div className="h-24 bg-zinc-900 rounded mt-8"></div>

            <div className="h-14 bg-zinc-900 rounded-2xl mt-10"></div>

          </div>

        </div>

      </div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="px-8 py-20"
    >

      <button
        onClick={() => navigate(-1)}
        className="mb-10 bg-zinc-900 hover:bg-zinc-800 px-6 py-3 rounded-2xl transition"
      >
        ← Back
      </button>

      <div className="grid md:grid-cols-2 gap-12 items-center">

        <motion.img
          src={product.image}
          alt={product.name}
          className="w-full rounded-3xl"
          whileHover={{
            scale: 1.05,
          }}
          transition={{
            duration: 0.3,
          }}
        />

        <div>

          <h1 className="text-6xl font-bold">
            {product.name}
          </h1>

          <p className="text-purple-400 text-3xl mt-6">
            ${product.price}
          </p>

          <p className="text-gray-400 mt-6 leading-relaxed">
            Premium futuristic sneakers built for comfort and modern streetwear style.
          </p>

          <div className="flex items-center gap-4 mt-10">

            <button
              onClick={() =>
                setQuantity((prev) =>
                  prev > 1 ? prev - 1 : 1
                )
              }
              className="bg-zinc-900 w-12 h-12 rounded-xl text-xl"
            >
              -
            </button>

            <p className="text-2xl font-semibold">
              {quantity}
            </p>

            <button
              onClick={() =>
                setQuantity((prev) => prev + 1)
              }
              className="bg-zinc-900 w-12 h-12 rounded-xl text-xl"
            >
              +
            </button>

          </div>

          <button
            onClick={() => {
              addToCart({
                ...product,
                quantity,
              })

              toast.success(
                `${product.name} added to cart`
              )
            }}
            className="mt-10 bg-purple-600 hover:bg-purple-700 px-8 py-4 rounded-2xl font-semibold transition"
          >
            Add To Cart
          </button>

        </div>

      </div>

    </motion.div>
  )
}

export default ProductDetail