import { createSlice } from "@reduxjs/toolkit";
import { userLogIn, userSignUp, refreshToken, getUserByRefreshToken } from "./authActions";
import { UserInterface } from "../../common/interfaces";

interface AuthState {
    loading: boolean;
    userInfo?: UserInterface;
    error?: string;
    success: boolean;
    backgroundRefreshError?: string
}

const initialState: AuthState = {
    loading: false,
    userInfo: undefined,
    error: undefined,
    success: false,
    backgroundRefreshError: undefined
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logOut: (state) => {
            state.loading = false;
            state.userInfo = undefined;
            state.error = undefined;
            state.success = false;
            state.backgroundRefreshError = undefined
            localStorage.removeItem('refreshToken')
            localStorage.removeItem('accessToken')
        }
    },
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
                state.backgroundRefreshError = action.payload?.message
            })

            .addCase(getUserByRefreshToken.pending, (state) => {
                state.loading = true
            })
            .addCase(getUserByRefreshToken.fulfilled, (state, action) => {
                state.loading = false;
                console.log('authSlice when get user by rt : ', action.payload)
                state.userInfo = action.payload;
                state.success = true;
            })
            .addCase(getUserByRefreshToken.rejected, (state, action) => {
                state.loading = false;
                state.success = false;
                state.backgroundRefreshError = action.payload?.message;
            })
    }
})

export const { logOut } = authSlice.actions;
export default authSlice.reducer;