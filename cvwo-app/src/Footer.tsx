import React from 'react'
import { Link } from 'react-router-dom'
import './pages/HomePage.css'
import { Button, createTheme, ThemeProvider } from '@mui/material'
import { blueGrey, grey } from '@mui/material/colors';


const theme = createTheme({
    palette: {
        primary: blueGrey,
    },
})

type FooterProps = {
    username: string
}
const Footer = ({ username }: FooterProps) => {
    return (
        <ThemeProvider theme={theme}>
            <footer className='fixed-bottom'>User: {username}
            </footer>
        </ThemeProvider>
    )
}

export default Footer