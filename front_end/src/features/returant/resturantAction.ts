import { createAsyncThunk } from "@reduxjs/toolkit";
import { AsyncThunkRejectError, ResturantInterface } from "../../common/interfaces";
import ProtectedApiCall, { apiMethods } from "../commonFunctions/protectedApiCall";
import { AppDispatch, RootState } from "../../app/store";

export const getResturants = createAsyncThunk<
    ResturantInterface[],
    void,
    {
        rejectValue: AsyncThunkRejectError,
        state: RootState,
        dispatch: AppDispatch
    }
>(
    'getAllResturants',
    async (_, thunkAPI) => {
        try {
            const resturants: ResturantInterface[] = await ProtectedApiCall<undefined, ResturantInterface[]>(
                'v1/resturant/',
                apiMethods.GET,
                thunkAPI.dispatch,
                thunkAPI.getState(),
                undefined
            )

            return resturants
        } catch (error) {
            console.log('error when getAllResturants : ', error)
            if (error instanceof Error) {
                return thunkAPI.rejectWithValue({ message: error.message })
            }

            return thunkAPI.rejectWithValue({ message: 'Unknown error' })

        }
    }
)