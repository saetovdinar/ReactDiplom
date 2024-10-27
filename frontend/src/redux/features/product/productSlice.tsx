'use client';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getProductByID } from '@/api/app_api';

export const fetchProductById = createAsyncThunk(
  'product/axiosGetProduct',
  async (id: number) => {
    const response = await getProductByID(id);
    return response;
  },
);

export interface ProductData {
  id: number;
  category: number;
  title: string;
  images: string[];
  sku: string;
  manufacturer: string;
  color: string;
  material: string;
  reason: string;
  season: string;
  heelSize: string;
  price: number;
  sizes: {
    size: string;
    available: boolean;
  }[];
}
interface initialState {
  product: ProductData;
  isLoading: boolean;
  quantity: number;
  choosenSize: string;
  isSelected: boolean;
}

const initState: initialState = {
  product: {
    id: 0,
    category: 0,
    title: '',
    images: [''],
    sku: '',
    manufacturer: '',
    color: '',
    material: '',
    reason: '',
    season: '',
    heelSize: '',
    price: 0,
    sizes: [{ size: '', available: true }],
  },
  isSelected: false,
  isLoading: true,
  quantity: 1,
  choosenSize: '',
};

export const productSlice = createSlice({
  name: 'product',
  initialState: initState,
  reducers: {
    incrementQuantity: (state) => {
      if (state.quantity === 10) return;
      state.quantity += 1;
    },
    decrementQuantity: (state) => {
      if (state.quantity === 1) return;
      state.quantity -= 1;
    },
    setSize: (state, action) => {
      state.choosenSize = action.payload;
    },
    setQuantity: (state) => {
      state.quantity = 1;
    },
    setIsSelectedSlice: (state, action) => {
      state.isSelected = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(
        fetchProductById.fulfilled,
        (state, action: { payload: ProductData }) => {
          state.product = action.payload;

          state.isLoading = true;
        },
      )
      .addCase(fetchProductById.pending, (state) => {
        state.isLoading = false;
      })
      .addCase(fetchProductById.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export default productSlice.reducer;
export const {
  setIsSelectedSlice,
  setQuantity,
  setSize,
  incrementQuantity,
  decrementQuantity,
} = productSlice.actions;
