import ProductDetails from "./ProductDetails";
import Image from "next/image";

export default function ProductCard() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-10 p-6 mx-60 my-10">
            {ProductDetails.map((item) => (
                <section key={item.id} 
                    className="bg-white border border-[#4a8b71] border-[0.8px] shadow-[4px_4px_10px_0px_rgba(0,0,0,0.2)] rounded-lg overflow-hidden flex flex-col hover:scale-105 transition-transform duration-300"
                >
                    <div className="w-full">
                        <Image
                            src={item.image}
                            alt={item.alt}
                            width={400}
                            height={250}
                            className="w-full h-64 object-cover rounded-lg"
                        />
                    </div>
                    <div className="p-4 flex flex-col flex-grow">
                        <a className="font-[sans-serif] text-[15px] font-bold text-[#333333] mb-2">{item.name}</a>
                        <p className="text-sm text-gray-500 mb-2">{item.category}</p>
                        <div className="flex justify-center items-center">
                            <button className="text-center bg-[#f1cf69] text-[#333333] w-50 h-10 rounded-[10px] hover:bg-[#e0b95c]">
                                Know More
                            </button>
                        </div>
                    </div>
                </section>
            ))}
        </div>
    );
}
