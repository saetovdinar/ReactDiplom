'use client';
import { createSlice } from '@reduxjs/toolkit';

interface basketData {
  quantity: number;
  title: string;
  size: string;
  price: number;
  id: number;
}

interface initialState {
  basket: basketData[];
  isLoading: boolean;
}

const initState: initialState = {
  basket: [],
  isLoading: true,
};

export const basketSlice = createSlice({
  name: 'basket',
  initialState: initState,
  reducers: {
    setProductToBasket: (state, action) => {
      if (state.basket.some((product) => product.id === action.payload.id)) {
        state.basket.forEach((product) => {
          if (
            product.id === action.payload.id &&
            product.size === action.payload.size
          ) {
            product.quantity += action.payload.quantity;
          }
        });
      } else {
        state.basket = [...state.basket, action.payload];
      }
    },
    setBasket: (state, action) => {
      state.basket = action.payload;
    },

    deleteProductFromBasket: (state, action) => {
      state.basket = state.basket.filter(
        (product) => product.id !== action.payload,
      );
    },
  },
});

export default basketSlice.reducer;
export const { setBasket, deleteProductFromBasket, setProductToBasket } =
  basketSlice.actions;
