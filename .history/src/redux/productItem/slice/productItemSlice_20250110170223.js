import { createSlice } from '@reduxjs/toolkit'
import { fetchProductItem } from '../services/fetchProductItem';


const initialState = {
    product: [],
    isLoading: false,
    errors: null,
    size: undefined,
    price: undefined,
    type: undefined,
    quantity: undefined,
}

export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        setSize(state, action){
            state.size = action.payload
        },
        setType(state, action){
            state.type = action.payload
        },
        setPrice(state, action){
            state.price = action.payload
        }
    },

    extraReducers: (builder) => {
        builder.addCase(fetchProductItem.pending, (state) => {
            state.errors = null;
            state.isLoading = true;
        })
        builder.addCase(fetchProductItem.fulfilled, (state, action) => {
            state.isLoading = false;
            state.product = action.payload;
        })
        builder.addCase(fetchProductItem.rejected, (state, action) => {
            state.isLoading = false;
            state.errors = action.payload;
        })
    }
})


export const { actions: productActions } = productSlice

export const { reducer: productReducer } = productSlice
