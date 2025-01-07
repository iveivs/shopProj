import { createAsyncThunk } from "@reduxjs/toolkit";
import { getPizzasHasMore, getPizzasLimit, getPizzasLoading, getPizzasPage } from "../selectors/pizzasSelectors";
import { pizzasActions } from "../slice/pizzasSlice";

export const fetchPizzas = createAsyncThunk(
    "pizzas/fetchPizzas",
    async (_, thunkAPI) => {
        const { dispatch, getState } = thunkAPI

        const page = getPizzasPage(getState())
        const hasMore = getPizzasHasMore (getState())
        const loading = getPizzasLoading(getState())

        if(hasMore && !loading) {
            dispatch(pizzasActions.setPage(page + 1))
            dispatch
        }

    }
)
