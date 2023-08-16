import { Alert, Avatar, Box, Button, Checkbox, Container, CssBaseline, FormControlLabel, TextField, ThemeProvider, Typography, createTheme } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import './SignUp.scss'
import { UserInterface } from '../../../common/interfaces';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { userSignUp } from '../../../features/auth/authActions';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

const defaultTheme = createTheme();

export default function SignUp() {

    const dispatch = useAppDispatch()
    const navigate = useNavigate();
    const { userInfo, success, error } = useAppSelector((state) => state.auth)
    const [errorMessage, setErrorMessage] = useState('')

    useEffect(() => {
        console.log(userInfo)
        if (success) {
            navigate('/home')
        }
        if (error) {
            setErrorMessage(error)
        }
    }, [success, error])

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {

        event.preventDefault();

        const data = new FormData(event.currentTarget);
        const password = data.get('password') as string
        const rePaassword = data.get('re_password') as string

        if (password === rePaassword) {

            const newUser: UserInterface = {
                email: data.get('email') as string,
                first_name: data.get('first_name') as string,
                last_name: data.get('last_name') as string,
                password: password
            }

            console.log(newUser)
            dispatch(userSignUp(newUser))
        }
        else {
            console.log('password not match')
            setErrorMessage('Input passwords are not match!')
        }
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
                        Sign up
                    </Typography>
                    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                        {errorMessage && <Alert severity="error">{errorMessage}</Alert>}
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
                            id="first_name"
                            label="First Name"
                            name="first_name"
                            autoComplete="first_name"
                            autoFocus
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="last_name"
                            label="Last Name"
                            name="last_name"
                            autoComplete="last_name"
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
                            autoComplete="current_password"
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="re_password"
                            label="Retype Password"
                            type="password"
                            id="re_password"
                            autoComplete="re_current_password"
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
                            Sign Up
                        </Button>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    )
}