import React, { useState } from 'react'
import './pages/HomePage.css'
import profileIcon from './media/profile-icon.png'
import { Link } from 'react-router-dom'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Avatar, Popover, Button, IconButton, createTheme, ThemeProvider } from '@mui/material'
import { blueGrey, grey } from '@mui/material/colors';


const theme = createTheme({
    palette: {
        primary: blueGrey,
    },
})

const Header = () => {
    const [showAccountOverlay, setShowAccountOverlay] = useState<boolean>(false);

    return (
        <ThemeProvider theme={theme}>
            <header className='sticky-top'>
                mono.'s forum
                <IconButton
                    aria-owns={showAccountOverlay ? 'account-popover' : undefined}
                    aria-haspopup='true'>
                    <AccountCircleIcon />
                </IconButton>
            </header>
            {/* <Popover id='account-popover'
                open={showAccountOverlay}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right'
                }}>
                <div className='account-overlay'>
                    <Link to='/'>
                        <Button variant='outlined' color='primary'>Log Out</Button>
                    </Link>
                </div>
            </Popover> */}

        </ThemeProvider>

    )
}

export default Header