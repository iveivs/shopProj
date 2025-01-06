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

// export default counterSlice.reducer
export const { reducer: counterReducer } = counterSlice