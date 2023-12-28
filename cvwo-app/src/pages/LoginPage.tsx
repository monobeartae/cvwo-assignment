import React, { SetStateAction } from 'react'
import './LoginPage.css'
import { Button, createTheme, TextField, ThemeProvider } from "@mui/material";
import { Link } from 'react-router-dom'
import { blueGrey, grey } from '@mui/material/colors';
import { User } from '../contexts/UserContext';


const theme = createTheme({
    palette: {
        primary: blueGrey,
    },
})

type LoginProps = {
    setUser: React.Dispatch<React.SetStateAction<User>>
}


const LoginPage = ({ setUser }: LoginProps) => {
    var input = "";
    return (
        <>

            <ThemeProvider theme={theme}>
                <h1>Welcome to mono.'s forum!</h1>
                <form>
                    <TextField required label='Enter a name to get started' variant='filled' size='small' onChange={(e) =>
                        input = e.target.value}></TextField>
                    <Link to='/home'>
                        <Button variant="outlined" color='primary'
                            onClick={() => {
                                console.log(input);
                                const user = { id: 1, name: input };
                                setUser(user);
                            }}>Enter</Button>
                    </Link>
                </form>
            </ThemeProvider>


        </>


    )
}

export default LoginPage