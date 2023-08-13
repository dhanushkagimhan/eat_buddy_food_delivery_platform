import { Alert, Avatar, Box, Button, Checkbox, Container, CssBaseline, FormControlLabel, Grid, Link, TextField, ThemeProvider, Typography, createTheme } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import './LogIn.scss';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { userLogIn } from '../../../features/auth/authActions';
import { UserCredential } from '../../../common/interfaces';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const defaultTheme = createTheme();

export default function LogIn() {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const { userInfo, success, error } = useAppSelector((state) => state.auth)

    useEffect(() => {
        console.log(userInfo)
        if (success) {
            navigate('/home')
        }
    }, [success])

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const inputData: UserCredential = {
            email: data.get('email') as string,
            password: data.get('password') as string,
        }
        console.log(inputData)
        dispatch(userLogIn(inputData))
    };

    return (
        <ThemeProvider theme={defaultTheme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign in
                    </Typography>
                    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                        {error && <Alert severity="error">{error}</Alert>}
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            autoFocus
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                        />
                        <FormControlLabel
                            control={<Checkbox value="remember" color="primary" />}
                            label="Remember me"
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Sign In
                        </Button>
                        <Grid container>
                            <Grid item xs>
                                <Link href="#" variant="body2">
                                    Forgot password?
                                </Link>
                            </Grid>
                            <Grid item>
                                <Link href="/signup" variant="body2">
                                    {"Don't have an account? Sign Up"}
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    );
}