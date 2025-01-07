import { createAsyncThunk } from "@reduxjs/toolkit";
import { getRollsHasMore, getRollsLoading, getRollsPage } from "../selectors/rollsSelectors";
import { rollsActions } from "../slice/othersSlice";
import { fetchRolls } from "./fetchOthers";

export const fetchNextOthersPage = createAsyncThunk(
    "rolls/fetchNextRollsPage",
    async (_, thunkAPI) => {
        const { dispatch, getState } = thunkAPI

        const page = getRollsPage(getState())
        const hasMore = getRollsHasMore(getState())
        const loading = getRollsLoading(getState())

        if (hasMore && !loading) {
            dispatch(rollsActions.setPage(page + 1))
            dispatch(fetchRolls())
        }

    }
)
