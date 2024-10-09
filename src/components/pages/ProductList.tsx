"use client";
// ProductList.tsx
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
// import { RootState } from './store';
// import { filterProducts, resetFilter } from './store/features/productSlice';
import { RootState } from "@/store/store";
import { addToCart } from "@/store/features/cartSlice";
import {
  filterProducts,
  resetFilter,
  setProducts,
} from "@/store/features/productSlice";
import { IProduct } from "@/models/Product";
import { ProductCard } from "./ProductCard";
// import { addToCart } from './features/cartSlice';
interface ProductListProps {
  defaultProducts?: IProduct[];
}

export const ProductList: React.FC<ProductListProps> = ({
  defaultProducts = [],
}) => {
  const dispatch = useDispatch();
  const { products, filteredProducts } = useSelector(
    (state: RootState) => state.products
  );

  useEffect(() => {
    if (!products.length) dispatch(setProducts(defaultProducts));
  }, []);
  
  const handleAddToCart = (product: any) => {
    dispatch(addToCart(product));
    console.log({ product });
  };
  filteredProducts;
  const handleFilter = (category: string) => {
    dispatch(filterProducts(category));
  };

  return (
    <div>
      <button onClick={() => handleFilter("Electronics")}>
        Filter Electronics
      </button>
      <button onClick={() => handleFilter("Clothing")}>Filter Clothing</button>
      <button onClick={() => dispatch(resetFilter())}>Reset Filter</button>

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
