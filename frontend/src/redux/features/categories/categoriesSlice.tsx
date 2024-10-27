'use client';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getCategories } from '@/api/app_api';

export const fetchCategories = createAsyncThunk(
  'categories/fetchCategoriesItems',
  async () => {
    const response = await getCategories();
    return response;
  },
);
interface initialState {
  categories: [];
  isLoading: boolean;
}

const initState: initialState = {
  categories: [],

  isLoading: true,
};

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState: initState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategories.fulfilled, (state, action: { payload: [] }) => {
        state.categories = action.payload;
        state.isLoading = true;
      })
      .addCase(fetchCategories.pending, (state) => {
        state.isLoading = false;
      })
      .addCase(fetchCategories.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export default categoriesSlice.reducer;
