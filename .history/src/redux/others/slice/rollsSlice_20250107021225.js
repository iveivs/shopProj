import { createSlice } from '@reduxjs/toolkit'
import { fetchRolls } from '../services/fetchOthers'

const initialState = {
    others: [],
    isLoading: false,
    errors: null,
    page: 0,
    limit: 4,
    hasMore: true,
}

export const othersSlice = createSlice({
    name: 'others',
    initialState,
    reducers: {
        setPage: (state, action) => {
            state.page = action.payload
        }
    },

    extraReducers: (builder) => {
        builder.addCase(fetchO.pending, (state) => {
            state.errors = null;
            state.isLoading = true;
        })
        builder.addCase(fetchRolls.fulfilled, (state, action) => {
            state.isLoading = false;
            state.others = [...state.others, ...action.payload];
            state.hasMore = action.payload.length >= state.limit
        })
        builder.addCase(fetchRolls.rejected, (state, action) => {
            state.isLoading = false;
            state.errors = action.payload;
        })
    }
})


export const { actions: othersActions } = othersSlice

export const { reducer: othersReducer } = othersSlice
