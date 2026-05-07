function Products() {
  return (
    <section className="px-8 pb-20">

      <h3 className="text-3xl font-bold mb-10">
        Featured Products
      </h3>

      <div className="grid md:grid-cols-3 gap-8">

        {/* Card 1 */}
        <div className="bg-[#1a1a1a] rounded-2xl overflow-hidden border border-gray-800">

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

              <button className="bg-purple-600 px-4 py-2 rounded-lg">
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