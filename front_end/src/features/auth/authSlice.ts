import { createSlice } from "@reduxjs/toolkit";
import { userLogin } from "./authActions";
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
        builder.addCase(userLogin.pending, (state) => {
            state.loading = true;
        })
            .addCase(userLogin.fulfilled, (state, action) => {
                state.loading = false
                state.userInfo = action.payload
                state.success = true
            })
            .addCase(userLogin.rejected, (state, action) => {
                state.loading = false
                state.error = action.payload as string
            })
    }
})

export default authSlice.reducer;