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
                <Grid container>
                    <Grid item xs={4}>
                        <Link className='logoName' component="button" underline='none' onClick={() => navigate('/')}>Eat Buddy</Link>
                    </Grid>
                    <Grid item xs={4}>

                    </Grid>
                    {authState.success ?
                        <>
                            <Grid item xs={2}>
                                <Button>Account</Button>
                            </Grid>
                            <Grid item xs={2}>
                                <Button variant="outlined" className='headerBtn' onClick={() => dispatch(logOut())}>Log out</Button>
                            </Grid>
                        </>

                        :
                        <>
                            <Grid item xs={2}>
                                <Button variant="outlined" className='headerBtn' onClick={() => navigate('/login')}>Sign up or log in</Button>
                            </Grid>
                            <Grid item xs={2}>
                                <Button variant="outlined" className='headerBtn'>Account</Button>
                            </Grid>
                        </>
                    }
                </Grid>
            </Box>
        </div>
    )
}
