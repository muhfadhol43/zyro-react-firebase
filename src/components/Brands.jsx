import {
  Footprints,
  Flame,
  Trophy,
  Star,
  Zap,
} from "lucide-react";

const brands = [
  {
    name: "Nike",
    desc: "Running",
    icon: <Zap size={28} />,
  },
  {
    name: "Adidas",
    desc: "Performance",
    icon: <Star size={28} />,
  },
  {
    name: "Jordan",
    desc: "Basketball",
    icon: <Trophy size={28} />,
  },
  {
    name: "Puma",
    desc: "Lifestyle",
    icon: <Flame size={28} />,
  },
  {
    name: "New Balance",
    desc: "Classic",
    icon: <Footprints size={28} />,
  },
];

function Brands() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">

      <div className="text-center mb-12">

        <p className="text-purple-400 uppercase tracking-widest text-sm">
          Shop By Brand
        </p>

        <h2 className="text-4xl font-bold mt-3">
          Featured Brands
        </h2>

      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">

        {brands.map((brand) => (
          <div
            key={brand.name}
            className="group bg-zinc-900 border border-zinc-800 rounded-3xl p-8 text-center hover:border-purple-500 hover:-translate-y-2 transition-all duration-300 cursor-pointer"
          >
            <div className="w-16 h-16 mx-auto rounded-2xl bg-purple-500/10 text-purple-400 flex items-center justify-center group-hover:bg-purple-500 group-hover:text-white transition">
              {brand.icon}
            </div>

            <h3 className="mt-5 font-bold text-lg">
              {brand.name}
            </h3>

            <p className="text-gray-500 text-sm mt-1">
              {brand.desc}
            </p>
          </div>
        ))}

      </div>
    </section>
  );
}

export default Brands;