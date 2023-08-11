import { Box, Button, Grid, Link } from '@mui/material';
import './Header.scss';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Header = () => {
    const [isLogin, setIsLogin] = useState<boolean>(false)
    const navigate = useNavigate()
    return (
        <div className='header'>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid xs={9}>
                        <Link className='mainPageBtn' component="button" underline='none' onClick={() => navigate('/')}>Eat Buddy</Link>
                    </Grid>
                    {isLogin ? <div>user name</div> :
                        <>
                            <Grid xs={1}>
                                <Button onClick={() => navigate('/login')}>Login</Button>
                            </Grid><Grid xs={2}>
                                <Button onClick={() => navigate('/register')}>Register</Button>
                            </Grid>
                        </>
                    }
                </Grid>
            </Box>
        </div>
    )
}

export default Header;