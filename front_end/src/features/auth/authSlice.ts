import { createSlice } from "@reduxjs/toolkit";
import { userLogIn, userSignUp } from "./authActions";
import { UserInterface } from "../../common/interfaces";

interface AuthState {
    loading: boolean;
    userInfo?: UserInterface;
    error?: string;
    success: boolean;
}

const initialState: AuthState = {
    loading: false,
    userInfo: undefined,
    error: undefined,
    success: false
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(userLogIn.pending, (state) => {
                state.loading = true;
            })
            .addCase(userLogIn.fulfilled, (state, action) => {
                state.loading = false;
                state.userInfo = action.payload;
                state.success = true;
            })
            .addCase(userLogIn.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload?.message;
            })
            .addCase(userSignUp.pending, (state) => {
                state.loading = true;
            })
            .addCase(userSignUp.fulfilled, (state, action) => {
                state.loading = false;
                state.userInfo = action.payload;
                state.success = true;
            })
            .addCase(userSignUp.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload?.message;
            })
    }
})

export default authSlice.reducer;