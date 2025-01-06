import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    pizzas: [],
    isLoading: false,
    errors: null,
}

export const pizzasSlice = createSlice({
    name: 'pizzas',
    initialState,
    reducers: {},

    extra
})


export const { actions: pizzasActions } = pizzasSlice

export const { reducer: pizzasReducer } = pizzasSlice