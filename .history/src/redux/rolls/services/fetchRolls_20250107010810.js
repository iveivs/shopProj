import { $api } from "@/api/api";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { getPizzasLimit, getPizzasPage, getRollsLimit, getRollsPage } from "../selectors/rollsSelectors";

export const fetchRolls = createAsyncThunk(
    "rolls/fetchRolls",
    async (_, thunkAPI) => {
        const { rejectWithValue, getState } = thunkAPI

        const page = getRollsPage (getState())
        const limit = getRollsLimit (getState())
        try {
            const response = await $api.get(`/rolls`, {
                params: {
                    _limit: limit,
                    _page: page,
                }
            })
            return response.data;
        } catch (error) {
            return rejectWithValue("Роллы не были получины...");
            // return rejectWithValue(error.message);
        }
    }
)
