import React from 'react'
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
        <ThemeProvider theme={theme}>
            <h1 style={{ color: 'gray', padding: 10, margin: 0, backgroundColor: 'lightgray' }}>mono.'s forum</h1>
            <Link to='/'>
                <Button variant='outlined' color='primary'>Log Out</Button>
            </Link>

        </ThemeProvider>

    )
}

export default Header