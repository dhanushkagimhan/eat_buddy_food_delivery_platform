import { Box, Button, Grid, Link } from '@mui/material';
import './Header.scss';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { useEffect } from 'react';
import { getUserByRefreshToken } from '../../features/auth/authActions';
import { logOut } from '../../features/auth/authSlice';

export default function Header() {
    const authState = useAppSelector((state) => state.auth)
    const navigate = useNavigate()
    const dispatch = useAppDispatch()

    useEffect(() => {
        if (localStorage.getItem('refreshToken')) {
            dispatch(getUserByRefreshToken())
        }
    }, [])

    return (
        <div className='header'>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid item xs={8}>
                        <Link className='mainPageBtn' component="button" underline='none' onClick={() => navigate('/')}>Eat Buddy</Link>
                    </Grid>
                    {authState.success ?
                        <>
                            <Grid item xs={2}>
                                <Button>Account</Button>
                            </Grid>
                            <Grid item xs={2}>
                                <Button onClick={() => dispatch(logOut())}>Log out</Button>
                            </Grid>
                        </>

                        :
                        <>
                            <Grid item xs={2}>
                                <Button onClick={() => navigate('/login')}>Sign up or log in</Button>
                            </Grid>
                            <Grid item xs={2}>
                                <Button>Account</Button>
                            </Grid>
                        </>
                    }
                </Grid>
            </Box>
        </div>
    )
}
