import React from "react";
import {ProductCard} from "./ProductCard";

export default function ProductsSection() {

    
        const products = [
            {
              title: "Brake Pads",
              description: "High-performance brake pads for improved stopping power.",
              image: "/assets/TEXTAR BRAKE DISC.jpg",
            },
            {
              title: "Air Filter",
              description: "High-performance air filter for improved engine efficiency.",
              image: "/assets/TEXTAR BRAKE LINNINGS.jpg",
            },
            {
              title: "Oil Filter",
              description: "Premium oil filter for improved engine protection.",
              image: "/assets/TEXTAR BRAKE DISC.jpg",
            },
            {
              title: "Spark Plugs",
              description: "High-quality spark plugs for improved engine performance.",
              image: "/assets/TEXTAR BRAKE PADS.jpg",
            },
          ];
          
    
  return (
    <div className="container px-4 md:px-6 py-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">Featured Products</h2>
        <a
          className="text-primary hover:underline"
          href="#"
        >
          View All
        </a>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {
            products.map((product, index)=><ProductCard key={index} {...product} />)
        }
      </div>
    </div>
  );
}
