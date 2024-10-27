'use client';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getItems, getItemsBySearch } from '@/api/app_api';

interface fetchCatalogItemsProps {
  category: number;
  offset: number;
}
interface searchCatalogItemsProps extends fetchCatalogItemsProps {
  q: string;
}
export const fetchCatalogItems = createAsyncThunk(
  'catalog1/fetchCatalogItems',
  async ({ category, offset }: fetchCatalogItemsProps) => {
    const response = await getItems(category, offset);
    return response;
  },
);

export const fetchGetItemByCatalog = createAsyncThunk(
  'catalog2/fetchGetItemByCatalog',
  async ({ category, offset }: fetchCatalogItemsProps) => {
    const response = await getItems(category, offset);
    return response;
  },
);

export const fetchSearchItem = createAsyncThunk(
  'catalog3/fetchSearch',
  async ({ category, offset, q }: searchCatalogItemsProps) => {
    const response = await getItemsBySearch(category, offset, q);

    return response;
  },
);

interface initialState {
  catalog: [];
  categoryId: number;
  isLoading: boolean;
  offset: number;
  searchText: string;
  showMoreFlag: boolean;
}

const initState: initialState = {
  catalog: [],
  categoryId: 0,
  offset: 6,
  isLoading: false,
  searchText: '',
  showMoreFlag: true,
};

export const catalogSlice = createSlice({
  name: 'catalog',
  initialState: initState,
  reducers: {
    setCategoryId: (state, action) => {
      state.categoryId = action.payload;
    },
    incrementOffset: (state) => {
      state.offset += 6;
    },
    setShowMoreFlag: (state, action) => {
      state.showMoreFlag = action.payload;
    },
    setOffset: (state) => {
      state.offset = 6;
    },
    setSaerchText: (state, action) => {
      state.searchText = action.payload;
    },
    setCatalog: (state, action) => {
      state.catalog = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(
        fetchCatalogItems.fulfilled,
        (state, action: { payload: [] }) => {
          state.catalog = action.payload;

          state.isLoading = true;
          if (action.payload.length < 6) state.showMoreFlag = false;
        },
      )
      .addCase(fetchCatalogItems.pending, (state) => {
        state.isLoading = false;
      })
      .addCase(fetchCatalogItems.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(
        fetchGetItemByCatalog.fulfilled,
        (state, action: { payload: [] }) => {
          state.catalog = [...state.catalog, ...action.payload];
          state.isLoading = true;
          if (action.payload.length < 6) state.showMoreFlag = false;
        },
      )
      .addCase(fetchGetItemByCatalog.pending, (state) => {
        state.isLoading = false;
      })
      .addCase(fetchGetItemByCatalog.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(fetchSearchItem.fulfilled, (state, action: { payload: [] }) => {
        state.catalog = [...state.catalog, ...action.payload];
        if (action.payload.length < 6) state.showMoreFlag = false;
        state.isLoading = true;
      })
      .addCase(fetchSearchItem.pending, (state) => {
        state.isLoading = false;
      })
      .addCase(fetchSearchItem.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const {
  setShowMoreFlag,
  setCategoryId,
  setCatalog,
  setSaerchText,
  incrementOffset,
  setOffset,
} = catalogSlice.actions;
export default catalogSlice.reducer;
