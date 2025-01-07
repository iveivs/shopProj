import { createAsyncThunk } from "@reduxjs/toolkit";
import { getPizzasHasMore, getPizzasLoading, getPizzasPage } from "../selectors/pizzasSelectors";
import { pizzasActions } from "../slice/pizzasSlice";

export const fetchNextPizzasPage = createAsyncThunk(
    "pizzas/fetchPizzas",
    async (_, thunkAPI) => {
        const { dispatch, getState } = thunkAPI

        const page = getPizzasPage(getState())
        const hasMore = getPizzasHasMore (getState())
        const loading = getPizzasLoading(getState())

        if(hasMore && !loading) {
            dispatch(pizzasActions.setPage(page + 1))
            dispatch(fetchPizzas)
        }

    }
)
