import { createAsyncThunk } from "@reduxjs/toolkit";
import { getPizzasHasMore, getPizzasLimit, getPizzasPage } from "../selectors/pizzasSelectors";

export const fetchPizzas = createAsyncThunk(
    "pizzas/fetchPizzas",
    async (_, thunkAPI) => {
        const { rejectWithValue, getState } = thunkAPI

        const page = getPizzasPage(getState())
        const hasMore = getPizzasHasMore (getState())

    }
)
