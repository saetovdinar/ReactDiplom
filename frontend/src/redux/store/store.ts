'use client';

import { configureStore } from '@reduxjs/toolkit';
import { topSalesSlice } from '@/redux/features/sale.hits/topSalesSlice';
import { catalogSlice } from '@/redux/features/catalog/catalogSlice';
import { categoriesSlice } from '@/redux/features/categories/categoriesSlice';
import { productSlice } from '@/redux/features/product/productSlice';
import { basketSlice } from '../features/basket/basketSlice';
import localStorageMiddleware from '@/redux/middleware/LocalStorageMiddleware';

export const store = configureStore({
  reducer: {
    topSales: topSalesSlice.reducer,
    catalog: catalogSlice.reducer,
    categories: categoriesSlice.reducer,
    product: productSlice.reducer,
    basket: basketSlice.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(localStorageMiddleware),
});
console.log(store.getState);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
