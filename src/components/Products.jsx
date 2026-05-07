function Products() {
  return (
    <section className="px-8 pb-20">

      <div className="flex items-center justify-between mb-10">
        <h3 className="text-3xl font-bold">
          Featured Products
        </h3>

        <button className="text-purple-400 hover:text-purple-300 transition">
          View All
        </button>
      </div>

      <div className="grid md:grid-cols-3 gap-8">

        {/* Card 1 */}
        <div className="bg-[#1a1a1a] rounded-2xl overflow-hidden border border-gray-800 hover:border-purple-500 hover:scale-105 transition duration-300">

          <img
            src="https://images.unsplash.com/photo-1542291026-7eec264c27ff"
            alt="shoe"
            className="w-full h-64 object-cover"
          />

          <div className="p-5">
            <h4 className="text-xl font-semibold">
              Zyro Runner X
            </h4>

            <p className="text-gray-400 mt-2">
              Premium futuristic sneakers.
            </p>

            <div className="flex items-center justify-between mt-5">
              <span className="text-purple-400 font-bold">
                $120
              </span>

              <button className="bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-lg transition">
                Buy
              </button>
            </div>
          </div>

        </div>

        {/* Card 2 */}
        <div className="bg-[#1a1a1a] rounded-2xl overflow-hidden border border-gray-800 hover:border-purple-500 hover:scale-105 transition duration-300">

          <img
            src="https://images.unsplash.com/photo-1600185365483-26d7a4cc7519"
            alt="shoe"
            className="w-full h-64 object-cover"
          />

          <div className="p-5">
            <h4 className="text-xl font-semibold">
              Neon Street
            </h4>

            <p className="text-gray-400 mt-2">
              Urban style with comfort.
            </p>

            <div className="flex items-center justify-between mt-5">
              <span className="text-purple-400 font-bold">
                $150
              </span>

              <button className="bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-lg transition">
                Buy
              </button>
            </div>
          </div>

        </div>

        {/* Card 3 */}
        <div className="bg-[#1a1a1a] rounded-2xl overflow-hidden border border-gray-800 hover:border-purple-500 hover:scale-105 transition duration-300">

          <img
            src="https://images.unsplash.com/photo-1608231387042-66d1773070a5"
            alt="shoe"
            className="w-full h-64 object-cover"
          />

          <div className="p-5">
            <h4 className="text-xl font-semibold">
              Velocity Pro
            </h4>

            <p className="text-gray-400 mt-2">
              Built for next-gen movement.
            </p>

            <div className="flex items-center justify-between mt-5">
              <span className="text-purple-400 font-bold">
                $180
              </span>

              <button className="bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-lg transition">
                Buy
              </button>
            </div>
          </div>

        </div>

      </div>

    </section>
  )
}

export default Products