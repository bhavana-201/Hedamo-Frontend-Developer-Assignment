// "use client";
// // import ProductDetails from "./ProductDetails";
// import ProductModalView from "./ProductModalView";
// import Image from "next/image";
// import {useState, useEffect} from "react";
// import { motion } from "framer-motion";
// export default function ProductCard({item}) {
//     //to store user actions
//     const [isModalOpen, setIsModalOpen] = useState(false);
//     const [selectedProduct, setSelectedProduct] = useState("");

//     //function to handle the button click
//     function handleBtnClick(item){
//         setSelectedProduct(item);
//         setIsModalOpen(true);
//     }
//     useEffect( () => {
//         if(isModalOpen){
//             document.body.style.overflow = 'hidden';
//         }else{
//             document.body.style.overflow = 'auto';
//         }
//         return () => {
//             document.body.style.overflow = 'auto';
//         };
//     }, [isModalOpen]);
//     return (
//     <>
//        <motion.section key={item.id} 
//                     className="bg-white border border-[#4a8b71] border-[0.8px] shadow-[4px_4px_10px_0px_rgba(0,0,0,0.2)] rounded-lg overflow-hidden flex flex-col hover:scale-105 transition-transform duration-300"
//                     variants={{
//                         hidden:{y:50, opacity:0},
//                         visible:{y:0, opacity:1}
//                     }}
//                     transition={{duration:0.4,ease:"easeOut"}}
//                 >
//                     <div className="w-full">
//                         <Image
//                             src={item.image}
//                             alt={item.alt}
//                             width={400}
//                             height={250}
//                             className="w-full h-64 object-cover rounded-lg"
//                         />
//                     </div>
//                     <div className="p-4 flex flex-col flex-grow">
//                         <a className="font-[sans-serif] text-[15px] font-bold text-[#333333] mb-2">{item.name}</a>
//                         <p className="text-sm text-gray-500 mb-2">{item.category}</p>
//                         <div className="flex justify-center items-center">
//                             <button className="text-center bg-[#f1cf69] text-[#333333] w-50 h-10 rounded-[10px] hover:bg-[#e0b95c]"
//                                     onClick={() => handleBtnClick(item)}    
//                             >
//                                 Know More
//                             </button>
//                         </div>
//                     </div>
//         </motion.section>
//         {/* Modal for displaying product details */}
//         {isModalOpen && (
//                  <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-white/35">
//                     <ProductModalView product={selectedProduct} onClose={() => setIsModalOpen(false)} />
//                 </div>
//             )}
//     </>
//     );
// }


"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import ProductModalView from "./ProductModalView";

export default function ProductCard({ item }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isModalOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isModalOpen]);

  return (
    <>
      <motion.section
        className="bg-white border border-[#4a8b71] border-[0.8px] shadow-[4px_4px_10px_0px_rgba(0,0,0,0.2)] rounded-lg overflow-hidden flex flex-col hover:scale-105 transition-transform duration-300"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
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
          <a className="font-[sans-serif] text-[15px] font-bold text-[#333333] mb-2">
            {item.name}
          </a>
          <p className="text-sm text-gray-500 mb-2">{item.category}</p>
          <div className="flex justify-center items-center">
            <button
              className="text-center bg-[#f1cf69] text-[#333333] w-50 h-10 rounded-[10px] hover:bg-[#e0b95c]"
              onClick={() => setIsModalOpen(true)}
            >
              Know More
            </button>
          </div>
        </div>
      </motion.section>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-white/35">
          <ProductModalView product={item} onClose={() => setIsModalOpen(false)} />
        </div>
      )}
    </>
  );
}
