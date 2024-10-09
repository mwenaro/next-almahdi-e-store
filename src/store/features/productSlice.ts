// features/productSlice.ts
import { IProduct } from '@/models/Product';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';



interface ProductState {
  products: IProduct[];
  filteredProducts: IProduct[];
}

const initialState: ProductState = {
  products: [
   
  ],
  filteredProducts: [],
};

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts: (state, action: PayloadAction<any[]>) => {
    state.products = action.payload 
    state.filteredProducts = action.payload 
    },
    filterProducts: (state, action: PayloadAction<string>) => {
      const category = action.payload;
      state.filteredProducts = state.products.filter(
        (product) => product?.category?._id === category
      );
    },
    resetFilter: (state) => {
      state.filteredProducts = [];
    },
  },
});

export const { filterProducts, resetFilter, setProducts } = productSlice.actions;
export default productSlice.reducer;
