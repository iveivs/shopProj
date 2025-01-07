import { createAsyncThunk } from "@reduxjs/toolkit";
import { getPizzasHasMore, getPizzasLoading, getPizzasPage, getRollsHasMore, getRollsPage } from "../selectors/rollsSelectors";
import { pizzasActions } from "../slice/pizzasSlice";
import { fetchPizzas } from "./fetchRolls";

export const fetchNextPizzasPage = createAsyncThunk(
    "pizzas/fetchNextPizzasPage",
    async (_, thunkAPI) => {
        const { dispatch, getState } = thunkAPI

        const page = getRollsPage(getState())
        const hasMore = getRollsHasMore(getState())
        const loading = get(getState())

        if (hasMore && !loading) {
            dispatch(pizzasActions.setPage(page + 1))
            dispatch(fetchPizzas())
        }

    }
)
