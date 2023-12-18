import React from 'react'
import './LoginPage.css'
import { Button, createTheme, ThemeProvider } from "@mui/material";
import { Link } from 'react-router-dom'
import { blueGrey, grey } from '@mui/material/colors';


const theme = createTheme({
    palette: {
        primary: blueGrey,
    },
})

const LoginPage = () => {
    return (
        <ThemeProvider theme={theme}>
            <h1>Welcome to mono.'s forum!</h1>
            <input></input>
            <Link to='/home'>
                <Button variant="outlined" color='primary'>Enter</Button>
            </Link>
        </ThemeProvider>

    )
}

export default LoginPage