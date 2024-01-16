import React from 'react'
import { Link } from 'react-router-dom'
import { Button, createTheme, ThemeProvider } from '@mui/material'
import { blueGrey, grey } from '@mui/material/colors';

import './pages/HomePage.css'
const theme = createTheme({
    palette: {
        primary: {
            main: '#ffffff',
        },
    },
})
const NavBar = () => {
    return (
        <ThemeProvider theme={theme}>
            <ul>
                <Link to='/home' className='stretch'>
                    <Button variant="text" color='primary' className='stretch'>
                        Home</Button>
                </Link>
                <Link to='/home' className='stretch'>
                    <Button variant="text" color='primary' className='stretch' style={{
                        justifyContent: 'left'
                    }}>
                        My</Button>
                </Link>
            </ul>
        </ThemeProvider>

    )
}

export default NavBar