import { createSlice } from '@reduxjs/toolkit'


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
        builder.addCase(fetchP.pending, (state) => {
            state.errors = null;
            state.isLoading = true;
        })
        builder.addCase(fetchPizzas.fulfilled, (state, action) => {
            state.isLoading = false;
            state.product = action.payload;
        })
        builder.addCase(fetchPizzas.rejected, (state, action) => {
            state.isLoading = false;
            state.errors = action.payload;
        })
    }
})


export const { actions: productActions } = productSlice

export const { reducer: productReducer } = productSlice
