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
            state.errors = n
        })
    }
})


export const { actions: pizzasActions } = pizzasSlice

export const { reducer: pizzasReducer } = pizzasSlice