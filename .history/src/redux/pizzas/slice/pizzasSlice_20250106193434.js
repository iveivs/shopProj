import { createSlice } from '@reduxjs/toolkit'
import { fetchPizzas } from '../services/fetchPizzas'

const initialState = {
    pizzas: [],
    isLoading: false,
    errors: null,
    page: 1,
    limit: 4,
    hasMore: true,
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
            state.pizzas = [...state.pizzas, ];
            state.hasMore = action.payload.length >= state.limit
        })
        builder.addCase(fetchPizzas.rejected, (state, action) => {
            state.isLoading = false;
            state.errors = action.payload;
        })
    }
})


export const { actions: pizzasActions } = pizzasSlice

export const { reducer: pizzasReducer } = pizzasSlice
