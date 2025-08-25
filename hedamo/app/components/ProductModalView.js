import Image from "next/image";

export default function ProductModalView({product, onClose}){
    return(
        <div className="flex flex-col gap-4 p-6 bg-[#E9F1EE] w-[800px] max-h-[80vh] overflow-y-auto text-[#333333] rounded-lg">
            
            {/* Top Section / Main Product Card */}
            <section className="flex flex-col md:flex-row gap-6 bg-white p-8 rounded-lg shadow-md hide-scrollbar">
                <div className="flex-shrink-0">
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
                    <p className="text-gray-600 mb-4">{product.longDescription}</p>
                    {/* Add a close button here */}
                    <button onClick={onClose} className="absolute top-10 right-80 text-4xl text-gray-500 hover:text-gray-800">
                        &times;
                    </button>
                </div>
            </section>

            {/* Middle Section with side-by-side cards */}
            <section className="flex flex-col md:flex-row gap-4">
                {/* Features Card */}
                <div className="bg-white p-6 rounded-lg flex-1 shadow-md">
                    <h2 className="font-bold text-xl mb-2">Key Features</h2>
                    <ul>
                        {/* Map over the features array to display them as a list */}
                        {product.features.map((feature, index) => (
                            <li key={index} className="text-sm text-gray-600 list-disc ml-4">{feature}</li>
                        ))}
                    </ul>
                </div>
                
                {/* Nutrition Card */}
                <div className="bg-white p-6 rounded-lg flex-1 shadow-md">
                    <h2 className="font-bold text-xl mb-2">Nutrition Facts</h2>
                    <p>Calories: {product.nutrition.calories}</p>
                    <p>Sugar: {product.nutrition.sugar}</p>
                </div>
            </section>

            {/* Bottom Traceability Card */}
            <section className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="font-bold text-xl mb-2">Traceability</h2>
                <p className="text-sm text-gray-600">{product.traceability.farm}</p>
            </section>
        </div>
    );
}