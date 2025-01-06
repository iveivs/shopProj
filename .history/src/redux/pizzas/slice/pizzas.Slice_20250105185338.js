import { createSlice } from '@reduxjs/toolkit'
import { fetchPizzas } from '../services/fetchPizzas'

const initialState = {
    pizzas: [],
    isLoading: false,
    errors: null,
}

export const pizzasSlice = createSlice({
    name: 'pizzas',
    initialState,
    reducers: {},

    extraReducers: (builder) => {
        builder.addCase(fetchPizzas.pending, (state) => {
            state.errors = null;
            state.isLoading = true;
        })
        builder.addCase(fetchPizzas.fulfilled, (state, action) => {
            state.isLoading = false;
            state.pizzas = ;
        })
        builder.addCase(fetchPizzas.rejected, (state) => {
            state.errors = null;
            state.isLoading = true;
        })
    }
})


export const { actions: pizzasActions } = pizzasSlice

export const { reducer: pizzasReducer } = pizzasSlice