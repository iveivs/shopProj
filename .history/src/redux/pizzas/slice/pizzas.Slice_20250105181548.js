import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    pizzas: 0,
    isLoading: 
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1
        },
        decrement: (state) => {
            state.value -= 1
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload
        },
    },
})

// Action creators are generated for each case reducer function
// export const { increment, decrement, incrementByAmount } = counterSlice.actions
export const { actions: counterActions } = counterSlice

// export default counterSlice.reducer
export const { reducer: counterReducer } = counterSlice