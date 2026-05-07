function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center text-center py-32 px-6 overflow-hidden">

      {/* Glow Effect */}
      <div className="absolute w-96 h-96 bg-purple-600/20 blur-3xl rounded-full"></div>

      <p className="text-purple-400 mb-4 relative z-10">
        FUTURE STREETWEAR
      </p>

      <h2 className="text-6xl font-bold max-w-4xl leading-tight relative z-10">
        Discover The Next Generation Sneakers
      </h2>

      <p className="text-gray-400 mt-6 max-w-xl relative z-10">
        Modern sneaker marketplace built with React, Tailwind, and Firebase.
      </p>

      <button className="mt-8 bg-purple-600 hover:bg-purple-700 px-8 py-3 rounded-xl font-semibold transition relative z-10">
        Shop Now
      </button>

    </section>
  )
}

export default Hero