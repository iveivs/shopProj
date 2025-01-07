import { createAsyncThunk } from "@reduxjs/toolkit";
import { getPizzasHasMore, getPizzasLoading, getPizzasPage, getRollsHasMore, getRollsLoading, getRollsPage } from "../selectors/rollsSelectors";
import { pizzasActions } from "../slice/pizzasSlice";
import { fetchPizzas } from "./fetchRolls";

export const fetchNextRollsPage = createAsyncThunk(
    "rolls/fetchNextRollsPage",
    async (_, thunkAPI) => {
        const { dispatch, getState } = thunkAPI

        const page = getRollsPage(getState())
        const hasMore = getRollsHasMore(getState())
        const loading = getRollsLoading(getState())

        if (hasMore && !loading) {
            dispatch(.setPage(page + 1))
            dispatch(fetchPizzas())
        }

    }
)
