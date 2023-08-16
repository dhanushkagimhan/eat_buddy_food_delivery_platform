import { createSlice } from "@reduxjs/toolkit";
import { ResturantInterface } from "../../common/interfaces";
import { getResturants } from "./resturantAction";

interface ResturantState {
    loading: boolean;
    resturantInfo?: ResturantInterface | ResturantInterface[];
    success: boolean;
    error?: string;
}

const initialState: ResturantState = {
    loading: false,
    resturantInfo: undefined,
    success: false,
    error: undefined
}

const resturantSlice = createSlice({
    name: 'resturant',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(getResturants.pending, (state) => {
                state.loading = true
            })
            .addCase(getResturants.fulfilled, (state, action) => {
                state.loading = false
                state.resturantInfo = action.payload
                state.success = true
            })
            .addCase(getResturants.rejected, (state, action) => {
                state.loading = false
                state.error = action.payload?.message
            })
    }
})

export default resturantSlice.reducer;