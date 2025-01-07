import { createAsyncThunk } from "@reduxjs/toolkit";
import { getOthersHasMore, getOthersLoading, getOthersPage, getRollsHasMore, getRollsLoading, getRollsPage } from "../selectors/rollsSelectors";
import { rollsActions } from "../slice/othersSlice";
import { fetchRolls } from "./fetchOthers";

export const fetchNextOthersPage = createAsyncThunk(
    "others/fetchNextOthersPage",
    async (_, thunkAPI) => {
        const { dispatch, getState } = thunkAPI

        const page = getOthersPage(getState())
        const hasMore = getOthersHasMore(getState())
        const loading = getOthersLoading(getState())

        if (hasMore && !loading) {
            dispatch(rollsActions.setPage(page + 1))
            dispatch(fetchRolls())
        }

    }
)
