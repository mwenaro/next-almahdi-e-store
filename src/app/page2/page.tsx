import Carousel2 from "@/components/pages/Carousel2";
import CategorySection from "@/components/pages/CategorySection";
import Header2 from "@/components/pages/Header2";
import ProductsSection from "@/components/pages/ProductsSection";
import React from "react";

export default function Home2() {
  return (
    <div>
      <Header2 />
      <Carousel2 images={[]} />
      <main className="flex-1 bg-white">
        {/* categories */}
        <CategorySection />
        {/* products */}
        <ProductsSection />
      </main>
    </div>
  );
}
