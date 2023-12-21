import React from 'react'
import './App.css'
import { Link } from 'react-router-dom'
import { Button, createTheme, ThemeProvider } from '@mui/material'
import { blueGrey, grey } from '@mui/material/colors';


const theme = createTheme({
    palette: {
        primary: blueGrey,
    },
})

const Header = () => {
    return (
        <>
            <header className='sticky-top'>mono.'s forum</header>
            <ThemeProvider theme={theme}>
                <Link to='/'>
                    <Button variant='outlined' color='primary'>Log Out</Button>
                </Link>
            </ThemeProvider>
        </>

    )
}

export default Header