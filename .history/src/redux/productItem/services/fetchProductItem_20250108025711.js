import { $api } from "@/api/api";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchPizzas = createAsyncThunk(
    "pizzas/fetchPizzas",
    async (params, thunkAPI) => {
        const { rejectWithValue } = thunkAPI

        const {product, id } = params

        try {
            const response = await $api.get(`/${product}/${id}`)
            return response.data;
        } catch (error) {
            return rejectWithValue("Не удалось получить продукт");
            // return rejectWithValue(error.message);
        }
    }
)
