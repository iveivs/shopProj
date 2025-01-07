import { $api } from "@/api/api";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { getRollsLimit, getRollsPage } from "../selectors/rollsSelectors";

export const fetchOthers = createAsyncThunk(
    "others/fetchOthers",
    async (_, thunkAPI) => {
        const { rejectWithValue, getState } = thunkAPI

        const page = getRollsPage(getState())
        const limit = getRollsLimit(getState())
        try {
            const response = await $api.get(`/other`, {
                params: {
                    _limit: limit,
                    _page: page,
                }
            })
            return response.data;
        } catch (error) {
            return rejectWithValue(" не были получины...");
            // return rejectWithValue(error.message);
        }
    }
)
