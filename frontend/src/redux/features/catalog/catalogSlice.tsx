
import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {getItems, getItemsBySearch } from '@/api/app_api';

interface fetchCatalogItemsProps {
    category: number,
    offset: number
}
interface searchCatalogItemsProps extends fetchCatalogItemsProps {
    q: string
    
}
export const fetchCatalogItems = createAsyncThunk(
    'catalog1/fetchCatalogItems',
    async ({category, offset}: fetchCatalogItemsProps) => {
        const response = await getItems(category, offset);
        return response
    }
);

export const fetchGetItemByCatalog = createAsyncThunk(
    'catalog2/fetchGetItemByCatalog',
    async ({category, offset}: fetchCatalogItemsProps) => {
        const response = await getItems(category, offset);
        return response
    }
);

export const fetchSearchItem = createAsyncThunk(
    'catalog3/fetchSearch',
    async ({category, offset, q}: searchCatalogItemsProps) => {
        const response = await getItemsBySearch(category, offset, q);
        console.log(response)
        return response
    }
);


interface initialState {
    catalog: [],
    categoryId: number,
    isLoading: boolean,
    offset: number,
    searchText: string
  }
 


const initState: initialState = {
    catalog: [],
    categoryId: 0,
    offset: 6,
    isLoading: false,
    searchText: '',
}

export const catalogSlice = createSlice({
    name: 'catalog',
    initialState: initState,
    reducers: {
        setCategoryId: (state, action) => {
            state.categoryId = action.payload
            
        },
        incrementOffset: (state) => {
            state.offset += 6;
            
        },
        setOffset: (state) => {
            state.offset = 6;
        },
        setSaerchText: (state, action) => {
            state.searchText = action.payload
        },
        setCatalog: (state, action) => {
            state.catalog = action.payload
        }
    },
    extraReducers: (builder) => {
      builder
        .addCase(fetchCatalogItems.fulfilled, (state, action: {payload: []}) => {
            state.catalog = action.payload;
       
            state.isLoading = true;
        })
        .addCase(fetchCatalogItems.pending, (state) => {
            state.isLoading = false;
        })
        .addCase(fetchCatalogItems.rejected, (state) => {
            state.isLoading = false;
        })
        .addCase(fetchGetItemByCatalog.fulfilled, (state, action: {payload: []}) => {
            state.catalog = [...state.catalog, ...action.payload];
            state.isLoading = true;
        })
        .addCase(fetchGetItemByCatalog.pending, (state) => {
            state.isLoading = false;
        
        })
        .addCase(fetchGetItemByCatalog.rejected, (state) => {
            state.isLoading = false;
        })
        .addCase(fetchSearchItem.fulfilled, (state, action: {payload: []}) => {
            state.catalog = [...state.catalog, ...action.payload];
 
            state.isLoading = true;
        })
        .addCase(fetchSearchItem.pending, (state) => {
            state.isLoading = false;
        })
        .addCase(fetchSearchItem.rejected, (state) => {
            state.isLoading = false;
        })
       
    },
    
      

  })


export const {setCategoryId, setCatalog, setSaerchText, incrementOffset, setOffset} = catalogSlice.actions
export default catalogSlice.reducer;