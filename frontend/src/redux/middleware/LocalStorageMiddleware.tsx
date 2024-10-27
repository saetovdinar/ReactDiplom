'use client';
import { Middleware } from '@reduxjs/toolkit';
import {
  setProductToBasket,
  deleteProductFromBasket,
} from '../features/basket/basketSlice';

const localStorageMiddleware: Middleware = (store) => (next) => (action) => {
  const result = next(action);

  if (
    (action as unknown as { type: string }).type === setProductToBasket.type ||
    (action as unknown as { type: string }).type ===
      deleteProductFromBasket.type
  ) {
    const state = store.getState();
    const basket = state.basket.basket;
    localStorage.setItem('basket', JSON.stringify(basket));
  }

  return result;
};

export default localStorageMiddleware;
