'use client';

import { configureStore } from "@reduxjs/toolkit";
import {topSalesSlice} from "@/redux/features/sale.hits/topSalesSlice";
import {catalogSlice} from "@/redux/features/catalog/catalogSlice";
import {categoriesSlice} from "@/redux/features/categories/categoriesSlice";
export const store = configureStore({
  reducer: {
    topSales: topSalesSlice.reducer,
    catalog: catalogSlice.reducer,
    categories: categoriesSlice.reducer,
    
  },
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;