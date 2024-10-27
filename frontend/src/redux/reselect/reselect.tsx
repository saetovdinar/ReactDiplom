'use client';
import { createSelector } from 'reselect';
import { RootState } from '@/redux/store/store';

// Селектор для получения корзины из состояния
const selectBasket = (state: RootState) => state.basket.basket;

// Селектор для вычисления общей суммы
export const selectTotalPrice = createSelector([selectBasket], (basket) => {
  return basket.reduce((total, product) => {
    return total + product.price * product.quantity;
  }, 0);
});
// Селектор для вычисления общего количества
export const selectQuantity = createSelector([selectBasket], (basket) => {
  return basket.reduce((total, product) => {
    return total + product.quantity;
  }, 0);
});
