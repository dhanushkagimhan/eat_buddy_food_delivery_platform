import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { AsyncThunkRejectError, UserCredential, UserInterface } from "../../common/interfaces";

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
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                },
            }
            console.log('user data ', userData)
            const response = await axios.post(
                `${backendURl}/v1/user/login`,
                {
                    email: userData.email,
                    password: userData.password
                },
                config
            )
            return response.data
        } catch (error) {
            if (axios.isAxiosError(error)) {
                console.log('login data fetch error ', error)
                if (error.response?.data) {
                    return rejectWithValue({ message: error.response?.data })
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
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                },
            }
            console.log('user data ', userData)
            const response = await axios.post(
                `${backendURl}/v1/user/register`,
                {
                    email: userData.email,
                    first_name: userData.first_name,
                    last_name: userData.last_name,
                    password: userData.password
                },
                config
            )

            return response.data
        } catch (error) {
            if (axios.isAxiosError(error)) {
                console.log('login data fetch error ', error)
                if (error.response?.data) {
                    return rejectWithValue({ message: error.response?.data })
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