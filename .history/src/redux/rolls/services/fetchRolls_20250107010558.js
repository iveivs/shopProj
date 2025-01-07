import { $api } from "@/api/api";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { getPizzasLimit, getPizzasPage } from "../selectors/rollsSelectors";

export const fetchPizzas = createAsyncThunk(
    "pizzas/fetchPizzas",
    async (_, thunkAPI) => {
        const { rejectWithValue, getState } = thunkAPI

        const page = getRollsPage(getState())
        const limit = getPizzasLimit(getState())
        try {
            const response = await $api.get(`/pizzas`, {
                params: {
                    _limit: limit,
                    _page: page,
                }
            })
            return response.data;
        } catch (error) {
            return rejectWithValue("Пиццы не были получины...");
            // return rejectWithValue(error.message);
        }
    }
)
