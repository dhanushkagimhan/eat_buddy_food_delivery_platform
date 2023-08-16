import { Outlet } from "react-router-dom"
import { useAppSelector } from "../app/hooks"
import { useEffect } from "react"

export default function ProtectedRoute() {

    const { userInfo } = useAppSelector((state) => state.auth)

    useEffect(() => {
        console.log('hi')
    }, [])

    if (!userInfo) {
        return (
            <h1>Unathurized :(</h1>
        )
    }

    return <Outlet />
}