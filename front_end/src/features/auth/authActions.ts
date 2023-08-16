import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { AsyncThunkRejectError, RefreshToken, UserCredential, UserInterface } from "../../common/interfaces";
import HeaderConfig from "../commonFunctions/headerConfig";
import { RootState } from "../../app/store";

const backendURl = process.env.REACT_APP_BACKEND_URL;

export const userLogIn = createAsyncThunk<
    UserInterface,
    UserCredential,
    {
        rejectValue: AsyncThunkRejectError
    }
>(
    'auth/login',
    async (userData, { rejectWithValue }) => {
        try {
            console.log('user data ', userData)
            const response = await axios.post(
                `${backendURl}/v1/user/login`,
                {
                    email: userData.email,
                    password: userData.password
                },
                HeaderConfig()
            )
            return response.data
        } catch (error) {
            if (axios.isAxiosError(error)) {
                console.log('login data fetch error ', error)
                if (error.response?.data) {
                    return rejectWithValue({ message: error.response?.data.message })
                }
                else {
                    return rejectWithValue({ message: error.message })
                }
            }
            else {
                console.log('Unexpected error: ', error)
                return rejectWithValue({ message: "unknown error" })
            }
        }
    }
)

export const userSignUp = createAsyncThunk<
    UserInterface,
    UserInterface,
    {
        rejectValue: AsyncThunkRejectError
    }
>(
    'auth/signup',
    async (userData, { rejectWithValue }) => {
        try {
            console.log('user data ', userData)
            const response = await axios.post(
                `${backendURl}/v1/user/register`,
                {
                    email: userData.email,
                    first_name: userData.first_name,
                    last_name: userData.last_name,
                    password: userData.password
                },
                HeaderConfig()
            )

            return response.data
        } catch (error) {
            if (axios.isAxiosError(error)) {
                console.log('signup data fetch error ', error)
                if (error.response?.data) {
                    return rejectWithValue({ message: error.response?.data.message })
                }
                else {
                    return rejectWithValue({ message: error.message })
                }
            }
            else {
                console.log('Unexpected error: ', error)
                return rejectWithValue({ message: "unknown error" })
            }
        }
    }
)

export const refreshToken = createAsyncThunk<
    RefreshToken,
    void,
    {
        rejectValue: AsyncThunkRejectError,
        state: RootState
    }
>(
    'auth/refresh_token',
    async (_, { rejectWithValue }) => {

        try {
            const response = await axios.post(
                `${backendURl}/v1/user/auth-refresh`,
                {
                    refresh_token: localStorage.getItem('refreshToken')
                },
                HeaderConfig()
            )

            return response.data
        } catch (error) {

            if (!axios.isAxiosError(error)) {
                console.log('Unexpected error: ', error)
                return rejectWithValue({ message: "unknown error" })
            }

            console.log('refresh token data fetch error ', error)

            if (!error.response?.data) {
                return rejectWithValue({ message: error.message })
            }

            return rejectWithValue({ message: error.response?.data.message })
        }
    }
)