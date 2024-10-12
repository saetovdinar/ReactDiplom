
import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {getTopSales} from '@/api/app_api';

export const fetchTopSales = createAsyncThunk(
    'get/fetchTopSales',
    async () => {
        const response = await getTopSales();
        return response
    }
);



interface initialState {
  sales: [],
  isLoading: boolean
}


const initState: initialState = {
    sales : [],
    isLoading: true,
}

export const topSalesSlice = createSlice({
    name: 'topSales',
    initialState: initState,
    reducers: {
    },
    extraReducers: (builder) => {
      builder
        .addCase(fetchTopSales.fulfilled, (state, action ) => {
         
          state.sales = action.payload;
          state.isLoading = true;
         
        })
        .addCase(fetchTopSales.pending, (state) => {
          state.isLoading = false;
        })
        .addCase(fetchTopSales.rejected, (state) => {
          state.isLoading = false;
        });
      

    }
  });



export default topSalesSlice.reducer;