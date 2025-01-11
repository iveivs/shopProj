import { $api } from "@/api/api";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchPizzas = createAsyncThunk(
    "pizzas/fetchPizzas",
    async (params, thunkAPI) => {
        const { rejectWithValue } = thunkAPI

        const {product, id } = p

        try {
            const response = await $api.get(`/pizzas`)
            return response.data;
        } catch (error) {
            return rejectWithValue("Error");
            // return rejectWithValue(error.message);
        }
    }
)
