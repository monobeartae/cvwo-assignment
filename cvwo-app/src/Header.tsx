import React, { useState } from 'react'
import './pages/HomePage.css'
import profileIcon from './media/profile-icon.png'
import { Link } from 'react-router-dom'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Avatar, Box, Popover, Button, IconButton, createTheme, ThemeProvider } from '@mui/material'
import { blueGrey, grey } from '@mui/material/colors';


const theme = createTheme({
    palette: {
        primary: blueGrey,
    },
})

const Header = () => {

    const [anchorE1, setAnchorE1] = useState<HTMLButtonElement | null>(null);

    const showAccountOverlay = Boolean(anchorE1);
    const id = showAccountOverlay ? 'account-popover' : undefined;

    return (
        <ThemeProvider theme={theme}>
            <header className='sticky-top'>
                <Box className='profile-icon'>
                    <IconButton
                        aria-describedby={id}
                        aria-haspopup='true'
                        onClick={(e) => setAnchorE1(e?.currentTarget)}>
                        <AccountCircleIcon />
                    </IconButton>
                </Box>

            </header>
            <Popover id={id}
                open={showAccountOverlay}
                onClose={() => setAnchorE1(null)}
                anchorEl={anchorE1}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right'
                }}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right'
                }}>

                <Link to='/'>
                    <Button variant='outlined' color='primary'>Log Out</Button>
                </Link>

            </Popover>

        </ThemeProvider>

    )
}

export default Header