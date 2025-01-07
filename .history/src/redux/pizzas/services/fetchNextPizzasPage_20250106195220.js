import { createAsyncThunk } from "@reduxjs/toolkit";
import { getPizzasHasMore, getPizzasLimit, getPizzasLoading, getPizzasPage } from "../selectors/pizzasSelectors";

export const fetchPizzas = createAsyncThunk(
    "pizzas/fetchPizzas",
    async (_, thunkAPI) => {
        const { dis, getState } = thunkAPI

        const page = getPizzasPage(getState())
        const hasMore = getPizzasHasMore (getState())
        const loading = getPizzasLoading(getState())

        if(hasMore && !loading) {

        }

    }
)
