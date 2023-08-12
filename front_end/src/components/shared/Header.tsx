import { Box, Button, Grid, Link } from '@mui/material';
import './Header.scss';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function Header() {
    const [isLogin, setIsLogin] = useState<boolean>(false)
    const navigate = useNavigate()
    return (
        <div className='header'>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid item xs={8}>
                        <Link className='mainPageBtn' component="button" underline='none' onClick={() => navigate('/')}>Eat Buddy</Link>
                    </Grid>
                    {isLogin ? <div>user name</div> :
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
