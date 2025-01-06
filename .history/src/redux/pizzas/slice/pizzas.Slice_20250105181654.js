import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    pizzas: [],
    isLoading: false,
    errors: null,
}

export const counterSlice = createSlice({
    name: 'pizzas',
    initialState,
    reducers: {},
})

// Action creators are generated for each case reducer function
// export const { increment, decrement, incrementByAmount } = counterSlice.actions
export const { actions: counterActions } = counterSlice

// export default counterSlice.reducer
export const { reducer: counterReducer } = counterSlice