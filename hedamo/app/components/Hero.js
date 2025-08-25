"use client";
import { motion } from "framer-motion";
import Carousel from "./Carousel";
import Image from "next/image";
export default function Hero(){
    return(
        <>
            <header className="fixed top-0 left-0 w-full flex font-[Poppins] text-black justify-start items-center font-bold text-[20px] px-65 py-6 bg-white shadow-md z-20">
                <Image src= "/hedamo.png" alt="Hedamo Logo" width={100} height={50} />
            </header>
            <section className="relative w-full flex items-center justify-center overflow-hidden h-[550px]">
                <div className="absolute inset-0 z-0 flex items-center justify-center">
                    <Carousel />
                </div>

                <motion.h1 className="font-bold text-[10rem] text-[#F1CF69] text-center font-[Poppins] z-10 m-10 h-[250px]" 
                    // style={{ WebkitTextStroke: "1px #4a8b71"}}
                    initial={{ y: 150, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1, ease: "easeOut" }}> 
                        HEDAMO
                </motion.h1>
            </section>
        </>
    );
};




