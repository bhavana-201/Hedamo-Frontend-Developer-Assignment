"use client";
import { Search } from "lucide-react"; 
import { useState } from "react";
export default function SearchBar() {

  const [searchTerm, setSearchTerm] = useState("");

  return (
    <section className="flex justify-center items-center ">
        <div className="flex justify-center items-center w-128 h-10 px-3 bg-gray-100 rounded-full shadow-sm hover:shadow-lg">
        <Search className="w-4 h-4 text-gray-500 mr-2" />
        <input
            type="search"
            placeholder="Search..."
            className="flex-1 bg-transparent outline-none text-sm text-gray-700 placeholder-gray-400"
        />
        </div>
    </section>
  );
}
// bg-tranparent-[#4a8b71]