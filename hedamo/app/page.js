import Image from "next/image";
import Hero from "./components/Hero";
import SearchBar from "./components/SearchBar";
import ProductCard from "./components/ProductCard";
export default function Home() {
  return (
    <>
      <Hero />
      <SearchBar />
      <ProductCard />
    </>
  );
}
