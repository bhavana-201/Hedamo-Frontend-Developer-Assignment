import Image from "next/image";
import { motion } from "framer-motion";
export default function ProductModalView({ product, onClose }) {
  return (
    <motion.div className="flex flex-col gap-4 p-6 
                    bg-white/30
                    w-[800px] max-h-[80vh] overflow-y-auto text-[#333333] 
                    rounded-2xl shadow-xl relative"
                initial={{y: 300, opacity: 0}}
                animate={{y: 0, opacity: 1}}
                transition={{duration: 0.4}}
              >
      
      {/* Top Section / Main Product Card */}
      <section className="flex flex-col md:flex-row gap-6 
                          p-8 bg-white/40 backdrop-blur-sm border border-white/30 
                          rounded-lg shadow-md">
        <div className="flex-shrink-1">
          <Image
            src={product.image}
            alt={product.alt}
            width={250}
            height={250}
            className="rounded-lg object-cover"
          />
        </div>

        <div className="hidden md:block w-[1.5px] h-64 bg-gray-300"></div>

        <div className="flex flex-col">
          <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
          <p className="text-gray-700 mb-4">{product.longDescription}</p>

          {/* Features as Tags */}
          <h2 className="font-bold text-xl mb-2">Features</h2>
          <div className="flex flex-wrap gap-2 mt-2">
            {product.features.map((feature, i) => (
              <span
                key={i}
                className="px-3 py-1 bg-[#f1cf69] text-gray-800 text-sm font-medium 
                           rounded-full shadow-sm border border-yellow-300"
              >
                {feature}
              </span>
            ))}
          </div>
        </div>

        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-4xl text-gray-500 hover:text-gray-800"
        >
          &times;
        </button>
      </section>

      {/* Features & Nutrition side-by-side */}
      <section className="flex flex-col md:flex-row gap-4">
        {/* Features Card */}
        <div className="p-6 rounded-lg flex-1 shadow-md 
                        bg-white/40 backdrop-blur-sm border border-white/30">
          <h2 className="font-bold text-xl mb-2">Key Features</h2>
          <div className="flex flex-wrap gap-2">
            {product.features.map((feature, i) => (
              <span
                key={i}
                className="px-3 py-1 bg-[#f1cf69] text-gray-800 text-sm font-medium 
                           rounded-full shadow-sm border border-yellow-300"
              >
                {feature}
              </span>
            ))}
          </div>
        </div>

        {/* Nutrition Card */}
        <div className="p-6 rounded-lg flex-1 shadow-md 
                        bg-white/40 backdrop-blur-sm border border-white/30">
          <h2 className="font-bold text-xl mb-2">Nutrition Facts</h2>
          <p>Calories: {product.nutrition.calories}</p>
          <p>Sugar: {product.nutrition.sugar || "N/A"}</p>
        </div>
      </section>

      {/* Pricing Card */}
      {product.price && (
        <section className="p-6 rounded-lg shadow-md flex justify-between items-center 
                            bg-white/40 backdrop-blur-sm border border-white/30">
          <span className="text-lg font-bold">₹{product.price}</span>
          <button className="bg-[#4A8B71] text-white px-4 py-2 rounded-lg cursor-pointer hover:shadow-lg">
            Add to Cart
          </button>
        </section>
      )}

      {/* Traceability Card */}
      <section className="p-6 rounded-lg shadow-md 
                          bg-white/40 backdrop-blur-sm border border-white/30">
        <h2 className="font-bold text-xl mb-2">Traceability</h2>
        <p className="text-sm text-gray-700">{product.traceability.farm}</p>
      </section>

      {/* Reviews Card */}
      {product.reviews && product.reviews.length > 0 && (
        <section className="p-6 rounded-lg shadow-md 
                            bg-white/40 backdrop-blur-sm border border-white/30">
          <h2 className="font-bold text-xl mb-2">User Reviews</h2>
          {product.reviews.map((review, index) => (
            <div key={index} className="border-b py-2">
              <p className="font-medium">{review.user}</p>
              <p className="text-gray-700 text-sm">{review.comment}</p>
            </div>
          ))}
        </section>
      )}
    </motion.div>
  );
}