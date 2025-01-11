import { createSlice } from '@reduxjs/toolkit'
import { fetchPizzas } from '../services/fetchPizzas'

const initialState = {
    product: [],
    isLoading: false,
    errors: null,
}

export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {

    },

    extraReducers: (builder) => {
        builder.addCase(.pending, (state) => {
            state.errors = null;
            state.isLoading = true;
        })
        builder.addCase(.fulfilled, (state, action) => {
            state.isLoading = false;
            state.product = action.payload;
        })
        builder.addCase(.rejected, (state, action) => {
            state.isLoading = false;
            state.errors = action.payload;
        })
    }
})


export const { actions: productActions } = productSlice

export const { reducer: productReducer } = productSlice
