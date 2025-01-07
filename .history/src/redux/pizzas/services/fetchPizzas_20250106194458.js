import { $api } from "@/api/api";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { getPizzasPage } from "../selectors/pizzasSelectors";

export const fetchPizzas = createAsyncThunk(
    "pizzas/fetchPizzas", 
    async (_, thunkAPI) => {
        const { rejectWithValue, getState } = thunkAPI

        const page = getPizzasPage(getState())
        const page = getPizzasPage (getState())
        try {
            const response = await $api.get(`/pizzas`, {
                params: {

                }
            })
            return response.data;
        } catch (error) {
            return rejectWithValue("Пиццы не были получины...");
            // return rejectWithValue(error.message);
        }
    }
)
