"use client";
import Image from "next/image";
import { useState } from "react";
import Hero from "./components/Hero";
import SearchBar from "./components/SearchBar";
import ProductCard from "./components/ProductCard";
import Footer from "./components/Footer";
import ProductDetails from "./components/ProductDetails";
import { motion } from "framer-motion";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const filteredProducts = ProductDetails.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Decide which products to show
  const productsToShow = searchTerm ? filteredProducts : ProductDetails;

  return (
    <>
      <Hero />
      <SearchBar onSearchChange={setSearchTerm} />

      {productsToShow.length > 0 ? (
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-10 p-6 mx-60 my-10"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.15 } },
          }}
        >
          {productsToShow.map(product => (
            <ProductCard key={product.id} item={product} />
          ))}
        </motion.div>
      ) : (
        <div className="text-center text-gray-500 mt-10">
          No products found matching your search.
        </div>
      )}

      <Footer />
    </>
  );
}
