// src/pages/HomePage.tsx
import React from "react";

import Header from "@/components/pages/Header";
import Carousel from "@/components/pages/Carousel";
import Carousel3 from "@/components/pages/Carousel3";
import Category from "@/components/pages/Category";
import { categories } from "./data/category-data";
import Image from "next/image";
import ProductsSection from "@/components/pages/ProductsSection";
import CategorySection from "@/components/pages/CategorySection3";
import Carousel2 from "@/components/pages/Carousel2";

const HomePage: React.FC = () => {
  const images = ["/assets/banner-default.jpg", "/assets/banner-default.jpg"];

  return (
    <div className="flex flex-col gap-4 ">
      <Header />
      {/* <Carousel images={images} /> */}
      <Carousel2 images={images} />
      <main className="flex-1 bg-white">
        {/* <div className="container px-4 md:px-6 py-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">Shop by Category</h2>
            <a className="text-primary hover:underline" href="#">
              View All
            </a>
          </div>
          <div className="overflow-x-auto">
            <div className="flex gap-4 py-2">
              {categories.map(({ category, icon }, index) => (
                <Category
                  icon={
                    <Image src={icon} alt={category} width={50} height={50} />
                  }
                  label={category}
                  href="#"
                />
              ))}
            </div>
          </div>
        </div> */}
          {/* Categoty Section */}
          <CategorySection />

          {/* products */}
          <ProductsSection />
      </main>
    </div>
  );
};

export default HomePage;
