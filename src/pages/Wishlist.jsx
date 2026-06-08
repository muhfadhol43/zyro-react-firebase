import { useContext } from "react";
import { WishlistContext } from "../context/WishlistContext";
import { CartContext } from "../context/CartContext";
import { Heart, ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";

function Wishlist() {
  const {
    wishlist,
    removeFromWishlist,
  } = useContext(WishlistContext);

  const { addToCart } =
    useContext(CartContext);

  if (wishlist.length === 0) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-6">
        <Heart
          size={60}
          className="text-purple-500 mb-4"
        />

        <h2 className="text-3xl font-bold">
          Wishlist is Empty
        </h2>

        <p className="text-gray-400 mt-3">
          Save your favorite sneakers here.
        </p>

        <Link
          to="/"
          className="mt-6 bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-xl transition"
        >
          Browse Products
        </Link>
      </div>
    );
  }

  return (
    <section className="max-w-7xl mx-auto px-6 py-16">

      <h1 className="text-4xl font-bold mb-10">
        ❤️ My Wishlist
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

        {wishlist.map((product) => (
          <div
            key={product.id}
            className="bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden hover:border-purple-500 transition"
          >

            <img
              src={product.image}
              alt={product.title}
              className="h-64 w-full object-cover"
            />

            <div className="p-5">

              <h3 className="font-semibold text-lg">
                {product.title}
              </h3>

              <p className="text-purple-400 mt-2 text-xl font-bold">
                ${product.price}
              </p>

              <div className="flex gap-3 mt-5">

                <button
                  onClick={() =>
                    addToCart(product)
                  }
                  className="flex-1 bg-purple-600 hover:bg-purple-700 py-3 rounded-xl flex items-center justify-center gap-2 transition"
                >
                  <ShoppingCart size={18} />
                  Add To Cart
                </button>

                <button
                  onClick={() =>
                    removeFromWishlist(
                      product.id
                    )
                  }
                  className="px-4 bg-red-500/10 border border-red-500/20 rounded-xl hover:bg-red-500/20 transition"
                >
                  Remove
                </button>

              </div>

            </div>

          </div>
        ))}

      </div>
    </section>
  );
}

export default Wishlist;