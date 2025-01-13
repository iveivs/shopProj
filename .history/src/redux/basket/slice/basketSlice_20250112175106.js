import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    items: [],
    error: undefined,
    isLoading: false,
    totalPrice: 0,
}

export const basketSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        
    },
})

export const { actions: basketActions } = basketSlice
export const { reducer: basketReducer } = basketSlice