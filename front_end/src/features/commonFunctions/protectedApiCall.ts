import axios, { AxiosRequestConfig } from "axios";
import { refreshToken } from "../auth/authActions";
import { AppDispatch, RootState } from "../../app/store";

export enum apiMethods {
    POST = 'POST',
    GET = 'GET',
    PATCH = 'PATCH',
    DELETE = 'DELETE'
}

export default async function ProtectedApiCall<DataT, ResponseT>(subUrl: string, apiMethod: apiMethods, dispatch: AppDispatch, state: RootState, bodyData: DataT): Promise<ResponseT> {
    const backendURl = process.env.REACT_APP_BACKEND_URL;

    const authState = state.auth;

    const config: AxiosRequestConfig<DataT> = {
        url: `${backendURl}/${subUrl}`,
        method: apiMethod,
        data: bodyData,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }

    try {
        const response = await axios(config)

        const resposeData: ResponseT = response.data as ResponseT;
        return resposeData;
    } catch (error) {
        console.log('Error in 1 st ProtectedApiCall : ', error)
        haddlingError(error)

        console.log('Before the dipathing step of refreshToken : ', authState.success)
        dispatch(refreshToken())

        console.log('pass the dipathing step of refreshToken : ', authState.success)

        if (!authState.success) {
            throw new Error(authState.error)
        }

        try {
            const response = await axios(config)

            const resposeData: ResponseT = response.data as ResponseT;
            return resposeData;
        } catch (err) {
            console.log('Error in 2 nd ProtectedApiCall : ', error)
            haddlingError(err)
            throw new Error("Access denied")
        }
    }

}

function haddlingError(error: unknown) {
    if (!axios.isAxiosError(error)) {
        throw new Error("unknown error")
    }

    if (!error.response?.data) {
        throw new Error(error.message)
    }

    console.log("wwwwwwwwwwwwwww ", error.response?.request.status)

    if ((error.response?.data.message !== 'Please authenticate') || (error.response?.request.status !== 401)) {
        console.log('eeeeeeeeeeeee ', (error.response?.request.status !== 401))
        throw new Error("unknown error")
    }
}