// features/productSlice.ts
import { ICategory } from "@/models/Category";
import { IProduct } from "@/models/Product";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ProductState {
  products: IProduct[];
  filteredProducts: IProduct[];
  activeCategory: string;
  productCategories:string[]
}

const initialState: ProductState = {
  products: [],
  filteredProducts: [],
  activeCategory: "all",
  productCategories: []
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts: (state, action: PayloadAction<any[]>) => {
      state.products = action.payload;
      state.filteredProducts = action.payload;
      state.productCategories = Array.from(
        new Set([
          "all",
          ...state.products
            .map((p: any) => p?.category?.name)
            .filter((category) => category),
        ])
      );
    },
    filterProducts: (state, action: PayloadAction<string>) => {
      const category = action.payload;
      state.activeCategory = category;
      if (state.activeCategory === "all")
        state.filteredProducts = state.products;
      else
        state.filteredProducts = state.products.filter(
          (product) => (product?.category as ICategory)?.name === category
          // (product) => product?.category?._id === category
        );
    },
    resetFilter: (state) => {
      state.filteredProducts = [];
    },
    setActiveCategory: (state, action: PayloadAction<string>) => {
      state.activeCategory = action.payload;
    },
  },
});

export const { filterProducts, resetFilter, setProducts, setActiveCategory } =
  productSlice.actions;
export default productSlice.reducer;
