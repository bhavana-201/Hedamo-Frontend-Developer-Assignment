import Image from "next/image";
import Hero from "./components/Hero";
import SearchBar from "./components/SearchBar";
import ProductCard from "./components/ProductCard";
import Footer from "./components/Footer";
export default function Home() {
  return (
    <>
      <Hero />
      <SearchBar />
      <ProductCard />
      <Footer />
    </>
  );
}
