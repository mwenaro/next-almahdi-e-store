"use client";
// ProductList.tsx
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
// import { RootState } from './store';
// import { filterProducts, resetFilter } from './store/features/productSlice';
import { RootState } from "@/store/store";
import { addToCart } from "@/store/features/cartSlice";
import {
  filterProducts,
  resetFilter,
  setProducts,
  setActiveCategory,
} from "@/store/features/productSlice";
import { IProduct } from "@/models/Product";
import { ProductCard } from "./ProductCard";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
// import { addToCart } from './features/cartSlice';
interface ProductListProps {
  defaultProducts?: IProduct[];
}

export const ProductList: React.FC<ProductListProps> = ({
  defaultProducts = [],
}) => {
  const dispatch = useDispatch();
  const { activeCategory, products, filteredProducts } = useSelector(
    (state: RootState) => state.products
  );

  useEffect(() => {
    if (!products.length) dispatch(setProducts(defaultProducts));
  }, []);

  useEffect(() => {}, [setActiveCategory]);
  const handleSetActiveCategory = (category: string) => {
    dispatch(setActiveCategory(category));
  };

  const handleAddToCart = (product: any) => {
    dispatch(addToCart(product));
    console.log({ product });
  };
  filteredProducts;
  const handleFilter = (category: string) => {
    dispatch(filterProducts(category));
  };
  const categories = Array.from(
    new Set([
      "all",
      ...defaultProducts.map((p: any) => p?.category?.name || "textar"),
    ])
  );
  return (
    <div>
      <div className="p-5 gap-2 flex">
        {categories.map((category: string) => {
          // if (category === "all")
          //   return (
          //     <Button
          //       onClick={() => dispatch(resetFilter())}
          //       className={cn(
          //         activeCategory === category ? "bg-red-600 text-white" : "",
          //         "capitalize bg-slate-200"
          //       )}
          //     >
          //       All
          //     </Button>
          //   );
          return (
            <Button
            key={category}
              onClick={() => handleFilter(category)}
              className={cn(
                "capitalize bg-slate-200 text-blue-600",
                activeCategory == category ? "bg-red-600 text-white" : ""
              )}
            >
              {category}
            </Button>
          );
        })}
      </div>

      <h2>Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {(filteredProducts.length > 0 ? filteredProducts : products).map(
          (prod: IProduct, index) => (
            <ProductCard
              onClick={() => handleAddToCart(prod)}
              key={index}
              image={prod.imgUrl}
              name={prod.name}
              price={prod.price}
              description={prod.description!}
            />
          )
        )}
      </div>
    </div>
  );
};
