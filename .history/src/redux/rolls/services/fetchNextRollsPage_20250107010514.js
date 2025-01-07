import { createAsyncThunk } from "@reduxjs/toolkit";
import { getPizzasHasMore, getPizzasLoading, getPizzasPage } from "../selectors/rollsSelectors";
import { pizzasActions } from "../slice/pizzasSlice";
import { fetchPizzas } from "./fetchRolls";

export const fetchNextPizzasPage = createAsyncThunk(
    "pizzas/fetchNextPizzasPage",
    async (_, thunkAPI) => {
        const { dispatch, getState } = thunkAPI

        const page = getPizzasPage(getState())
        const hasMore = getPizzasHasMore(getState())
        const loading = getPizzasLoading(getState())

        if (hasMore && !loading) {
            dispatch(pizzasActions.setPage(page + 1))
            dispatch(fetchPizzas())
        }

    }
)
