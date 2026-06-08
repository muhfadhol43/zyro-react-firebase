import { signInWithGoogle } from "../firebase/auth";
import { ShoppingBag, Star } from "lucide-react";

function Hero() {
  return (
    <section className="relative min-h-[75vh] flex items-center overflow-hidden py-16">

      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-80 h-80 bg-purple-600/20 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-fuchsia-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT CONTENT */}
          <div>

            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300 text-sm mb-6">
              <Star size={14} />
              Future Streetwear Collection
            </span>

            <h1 className="text-5xl md:text-6xl xl:text-[5.5rem] font-black leading-[0.95]">
              Discover
              <span className="block bg-gradient-to-r from-purple-400 via-fuchsia-500 to-pink-500 bg-clip-text text-transparent">
                Premium Sneakers
              </span>
            </h1>

            <p className="text-gray-400 text-lg md:text-xl mt-6 max-w-2xl">
              Explore limited edition sneakers from the world's most iconic
              brands. Built with React, Firebase, and a premium shopping
              experience designed for sneaker enthusiasts.
            </p>

            {/* CTA */}
            <div className="flex flex-wrap gap-4 mt-10">

              <button
                onClick={() => {
                  document
                    .getElementById("products")
                    ?.scrollIntoView({
                      behavior: "smooth",
                    });
                }}
                className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 px-8 py-4 rounded-xl font-semibold transition shadow-lg shadow-purple-600/20"
              >
                <ShoppingBag size={18} />
                Shop Collection
              </button>

              <button
                onClick={signInWithGoogle}
                className="border border-zinc-700 hover:border-purple-500 hover:bg-zinc-900 px-8 py-4 rounded-xl transition"
              >
                Login with Google
              </button>

            </div>

            {/* STATS */}
            <div className="grid grid-cols-3 gap-4 mt-12 max-w-xl">

              <div className="bg-zinc-900/80 border border-zinc-800 rounded-2xl p-5 hover:border-purple-500 transition">
                <h3 className="text-3xl font-bold text-purple-400">
                  50+
                </h3>
                <p className="text-gray-500 text-sm">
                  Products
                </p>
              </div>

              <div className="bg-zinc-900/80 border border-zinc-800 rounded-2xl p-5 hover:border-purple-500 transition">
                <h3 className="text-3xl font-bold text-purple-400">
                  500+
                </h3>
                <p className="text-gray-500 text-sm">
                  Orders
                </p>
              </div>

              <div className="bg-zinc-900/80 border border-zinc-800 rounded-2xl p-5 hover:border-purple-500 transition">
                <h3 className="text-3xl font-bold text-purple-400">
                  4.9★
                </h3>
                <p className="text-gray-500 text-sm">
                  Rating
                </p>
              </div>

            </div>

            {/* BRANDS */}
            <div className="flex flex-wrap items-center gap-6 mt-10 text-zinc-500 font-semibold tracking-widest uppercase text-sm">
              <span>Nike</span>
              <span>Adidas</span>
              <span>Jordan</span>
              <span>Puma</span>
              <span>New Balance</span>
            </div>

          </div>

          {/* RIGHT CONTENT */}
          <div className="relative hidden lg:flex items-center justify-center">

            <div className="relative p-10 rounded-[40px] border border-zinc-800 bg-zinc-900/20 backdrop-blur-sm">

              {/* Trending Card */}
              <div className="absolute -top-6 -left-8 bg-zinc-900/90 border border-zinc-800 rounded-2xl px-5 py-3 backdrop-blur-lg shadow-xl z-20">
                <p className="text-xs text-gray-500">
                  Trending
                </p>

                <p className="font-semibold text-white">
                  Nike Air Max
                </p>
              </div>

              {/* Best Seller Card */}
              <div className="absolute -bottom-6 -right-8 bg-zinc-900/90 border border-zinc-800 rounded-2xl px-5 py-3 backdrop-blur-lg shadow-xl z-20">
                <p className="text-xs text-gray-500">
                  Best Seller
                </p>

                <p className="font-semibold text-white">
                  Jordan Retro
                </p>
              </div>

              {/* Glow */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-[350px] h-[350px] rounded-full bg-purple-600/30 blur-[120px]" />
              </div>

              {/* Product Image */}
              <img
                src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=1000"
                alt="Sneaker"
                className="
                  relative
                  z-10
                  w-full
                  max-w-[420px]
                  rounded-3xl
                  object-cover
                  transition-all
                  duration-500
                  hover:scale-105
                  drop-shadow-[0_25px_60px_rgba(168,85,247,0.45)]
                "
              />

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;