"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Carousel() {
  const cards = [
    { src: "/blueberries.jpg", alt: "blueberries image" },
    { src: "/clothess.jpg", alt: "clothes image" },
    { src: "/eggs.jpg", alt: "eggs image" },
    { src: "/honey.jpg", alt: "honey bottle" },
    { src: "/ketchup.jpg", alt: "ketchup bottle" },
    { src: "/lip.jpg", alt: "lip balm image" },
    { src: "/meat.jpg", alt: "red meat image" },
    { src: "/lipstick.jpg", alt: "pink lipstick image" },
    { src: "/milk.jpg", alt: "milk packet" },
    { src: "/nuts.jpg", alt: "packed nuts image" },
  ];

  const [index, setIndex] = useState(0);

  // Auto-rotate every 2s
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % cards.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [cards.length]);

  return (
    <div className="w-full h-[300px] flex items-center justify-center overflow-hidden relative">
      <div className="relative flex items-center justify-center">
        {cards.map((card, i) => {
          // Find relative position to active index
          const offset = (i - index + cards.length) % cards.length;

          // For smooth circular wrap-around
          let translateX = 0;
          let scale = 1;
          let opacity = 1;

          if (offset === 0) {
            // center image
            translateX = 0;
            scale = 1;
            opacity = 0.8;
          } else if (offset === 1 || offset === cards.length - 1) {
            // side images
            translateX = offset === 1 ? 300 : -300;
            scale = 0.8;
            opacity = 0.1;
          } else {
            // far images (fade out completely)
            translateX = offset < cards.length / 2 ? 500 : -500;
            scale = 0.6;
            opacity = 0;
          }

          return (
            <motion.div
              key={i}
              className="absolute w-[200px] h-[200px] sm:w-52 sm:h-52 flex items-center justify-center"
              animate={{ x: translateX, scale, opacity }}
              transition={{ duration: 1, ease: "easeInOut" }}
            >
              <Image
                src={card.src}
                alt={card.alt}
                fill
                className="rounded-xl object-cover border border-[#4a8b71]"
              />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}