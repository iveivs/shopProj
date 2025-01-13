import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    items: [],
    error: undefined,
    isLoading: false,
    totalPrice: 0,
}

export const basketSlice = createSlice({
    name: 'basket',
    initialState,
    reducers: {
        addItem(state, action) {
            state.items.push()
        }
    },
})

export const { actions: basketActions } = basketSlice
export const { reducer: basketReducer } = basketSlice