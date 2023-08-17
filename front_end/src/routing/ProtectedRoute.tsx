import { Outlet, useNavigate } from "react-router-dom"
import { useAppSelector } from "../app/hooks"
import { Button } from "@mui/material"

export default function ProtectedRoute() {
    const navigate = useNavigate()
    const authState = useAppSelector((state) => state.auth)

    if (!authState.userInfo) {
        return (
            <>
                <h1>Unathurized :(</h1>
                <Button onClick={() => navigate('/login')}>Sign up or log in</Button>
            </>
        )
    }

    return <Outlet />
}