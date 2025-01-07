import { createAsyncThunk } from "@reduxjs/toolkit";
import { getOthersHasMore, getOthersLoading, getOthersPage } from "../selectors/rollsSelectors";
import { othersActions, rollsActions } from "../slice/othersSlice";
import { fetchOthers, fetchRolls } from "./fetchOthers";

export const fetchNextOthersPage = createAsyncThunk(
    "others/fetchNextOthersPage",
    async (_, thunkAPI) => {
        const { dispatch, getState } = thunkAPI

        const page = getOthersPage(getState())
        const hasMore = getOthersHasMore(getState())
        const loading = getOthersLoading(getState())

        if (hasMore && !loading) {
            dispatch(othersActions.setPage(page + 1))
            dispatch(fetchOthers())
        }

    }
)
