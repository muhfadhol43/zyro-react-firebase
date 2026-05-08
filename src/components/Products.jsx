import { useEffect, useState } from "react"
import { collection, getDocs } from "firebase/firestore"
import { db } from "../firebase/config"

function Products() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    const fetchProducts = async () => {
      const querySnapshot = await getDocs(collection(db, "products"))

      const data = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }))

      setProducts(data)
    }

    fetchProducts()
  }, [])

  return (
    <section className="px-6 py-20">
      <div className="flex justify-between items-center mb-10">
        <h2 className="text-5xl font-bold">
          Featured Products
        </h2>

        <button className="text-purple-400">
          View All
        </button>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-800 hover:border-purple-500 transition"
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
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Products