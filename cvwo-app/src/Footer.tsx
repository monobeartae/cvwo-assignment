import React from 'react'
import { Link } from 'react-router-dom'
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
            <p>footer</p>
            <p style={{ color: 'gray', padding: 10, margin: 0, textAlign: 'right' }}>{username}</p>
        </ThemeProvider>

    )
}

export default Footer