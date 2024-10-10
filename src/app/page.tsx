// src/pages/HomePage.tsx
import React from "react";

import Header from "@/components/pages/Header";

import ProductsSection from "@/components/pages/ProductsSection";
import CategorySection from "@/components/pages/CategorySection";
import Carousel2 from "@/components/pages/Carousel2";
// import { ProductList } from "@/components/pages/ProductList";

const HomePage: React.FC = () => {
  const images = ["/assets/banner-default.jpg", "/assets/banner-default.jpg"];

  return (
    <div className="flex flex-col gap-2 md:gap-4 ">
      <Header />
      {/* <Carousel images={images} /> */}
      <Carousel2 images={images} />
      <main className="flex-1 bg-white ">
        
        {/* Categoty Section */}
        <CategorySection />

        {/* products */}
        <ProductsSection />
        
      </main>
    </div>
  );
};

export default HomePage;
