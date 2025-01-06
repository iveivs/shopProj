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
})


export const { actions: counterActions } = counterSlice

export const { reducer: counterReducer } = counterSlice