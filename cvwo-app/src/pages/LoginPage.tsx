import React, { SetStateAction } from 'react'
import './LoginPage.css'
import { Button, createTheme, TextField, ThemeProvider } from "@mui/material";
import { Link } from 'react-router-dom'
import { blueGrey, grey } from '@mui/material/colors';
import { User } from '../contexts/UserContext';
import { Thread, ThreadProvider } from '../contexts/ThreadContext'

const theme = createTheme({
    palette: {
        primary: blueGrey,
    },
})

type LoginProps = {
    setUser: React.Dispatch<React.SetStateAction<User>>
}

// pretend this is from database
const threads: Thread[] = [
    { id: 0, title: 'Thread1', children: 'aaa', author: 'taisei_tiddies', replies: null },
    { id: 1, title: 'Thread2', children: 'bruhurbruhefsiu', author: 'mono.', replies: null },
    { id: 2, title: 'Thread3', children: 'meow meow meow meow meow meow meow', author: 'manchi', replies: null },
    { id: 3, title: 'screwed my cs2030s finals and feeling like shit', children: 'anyone else\?', author: 'mono.', replies: null },
    { id: 4, title: 'Thread4', children: 'meow meow meow meow meow meow meow', author: 'manchi', replies: null },
    { id: 5, title: 'running out of ideas', children: 'fml n pray', author: '>--|-o', replies: null }
];

const LoginPage = ({ setUser }: LoginProps) => {
    var input = "";
    return (
        <>
            <ThreadProvider threads={threads} />
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