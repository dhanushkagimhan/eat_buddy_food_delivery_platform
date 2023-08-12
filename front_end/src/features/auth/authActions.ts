import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { UserCredential, UserInterface } from "../../common/interfaces";

const backendURl = process.env.REACT_APP_BACKEND_URL;

export const userLogin = createAsyncThunk<
    UserInterface,
    UserCredential,
    {
        rejectValue: {}
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
            const { data } = await axios.post(
                `${backendURl}/v1/user/login`,
                {
                    email: userData.email,
                    password: userData.password
                },
                config
            )

            return data
        } catch (error) {
            console.log('login data fetch error ', error)
            if (error) {
                return rejectWithValue(error)
            }
        }
    }
)