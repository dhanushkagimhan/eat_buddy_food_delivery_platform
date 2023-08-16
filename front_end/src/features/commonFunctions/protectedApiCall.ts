import axios, { AxiosRequestConfig } from "axios";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { refreshToken } from "../auth/authActions";

enum apiMethods {
    POST = 'POST',
    GET = 'GET',
    PATCH = 'PATCH',
    DELETE = 'DELETE'
}

export default async function ProtectedApiCall<DataT, ResponseT>(subUrl: string, apiMethod: apiMethods, bodyData: DataT): Promise<ResponseT> {
    const backendURl = process.env.REACT_APP_BACKEND_URL;

    const dispatch = useAppDispatch()
    const authState = useAppSelector((state) => state.auth)

    if (!authState.userInfo?.access_token) {
        throw new Error('User is not authenticated')
    }

    const config: AxiosRequestConfig<DataT> = {
        url: `${backendURl}/subUrl`,
        method: apiMethod,
        data: bodyData,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${authState.userInfo.access_token}`
        }
    }

    try {
        const response = await axios(config)

        const resposeData: ResponseT = response.data as ResponseT;
        return resposeData;
    } catch (error) {
        console.log('Error in 1 st ProtectedApiCall : ', error)
        haddlingError(error)

        dispatch(refreshToken())

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

    if ((error.response?.data.message !== 'Please authenticate') || (error.response?.data.status !== 201)) {
        throw new Error("unknown error")
    }
}