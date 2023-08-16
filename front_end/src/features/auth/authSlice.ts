import { createSlice } from "@reduxjs/toolkit";
import { userLogIn, userSignUp, refreshToken } from "./authActions";
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
                localStorage.setItem('accessToken', action.payload.access_token as string)
                localStorage.setItem('refreshToken', action.payload.refresh_token as string)
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
                localStorage.setItem('accessToken', action.payload.access_token as string)
                localStorage.setItem('refreshToken', action.payload.refresh_token as string)
                state.success = true;
            })
            .addCase(userSignUp.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload?.message;
            })

            .addCase(refreshToken.pending, (state) => {
                state.loading = true;
            })
            .addCase(refreshToken.fulfilled, (state, action) => {
                state.loading = false
                localStorage.setItem('accessToken', action.payload.access_token)
                localStorage.setItem('refreshToken', action.payload.refresh_token)
                state.success = true

                if (state.userInfo) {
                    state.userInfo.access_token = action.payload.access_token
                    state.userInfo.refresh_token = action.payload.refresh_token                    
                }
            })
            .addCase(refreshToken.rejected, (state, action) => {
                state.loading = false
                state.success = false
                state.error = action.payload?.message
            })
    }
})

export default authSlice.reducer;