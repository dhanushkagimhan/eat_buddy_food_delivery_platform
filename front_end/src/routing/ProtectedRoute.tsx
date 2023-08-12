import { Outlet } from "react-router-dom"
import { useAppSelector } from "../app/hooks"

export default function ProtectedRoute() {

    const { userInfo } = useAppSelector((state) => state.auth)

    if (!userInfo) {
        return (
            <h1>Unathurized :(</h1>
        )
    }

    return <Outlet />
}