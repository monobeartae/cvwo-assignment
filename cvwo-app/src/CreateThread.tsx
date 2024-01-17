import React, { useState } from 'react'

import './pages/HomePage.css'
import { Thread } from './contexts/ThreadContext';
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import { IconButton, Modal, Button, Box, TextField, createTheme, ThemeProvider } from '@mui/material';
import { blueGrey, grey } from '@mui/material/colors';

import { useThreads } from './hooks/ThreadHooks'

const boxStyle = {}

const menuStyle = {
    backgroundColor: 'aliceblue',
    position: 'fixed' as 'fixed',
    top: '30%',
    bottom: '30%',
    left: '20%',
    right: '20%',
    margin: 0,
    padding: 20
}
const theme = createTheme({
    palette: {
        primary: blueGrey,
    },
})

const CreateThread = () => {
    const [openMenu, setOpenMenu] = useState<boolean>(false);

    var title_input: string = "";
    var desc_input: string = "";

    const threadData = useThreads();

    const createThread = () => {
        if (title_input == "" || desc_input == "")
            return; // show warning text/control visibility of button ltr

        var t: Thread = {
            id: 10111,
            title: title_input,
            children: desc_input,
            author: 'temp',
            replies: null
        }
        threadData.addThread({ thread: t })

        handleCloseMenu();

    };
    const handleCloseMenu = () => {
        setOpenMenu(false);
        title_input = desc_input = "";
    }

    return (
        <ThemeProvider theme={theme}>
            <div className='float-bottom' style={{
                bottom: '2%',
                left: '2%'
            }}>
                <IconButton sx={{ padding: 0 }}
                    onClick={() => setOpenMenu(true)}>
                    <AddCircleRoundedIcon sx={{ fontSize: 64 }} />
                </IconButton>
                <Modal
                    open={openMenu}
                    onClose={handleCloseMenu}>
                    <Box sx={boxStyle}>
                        <div style={menuStyle}>
                            <h2>Create Tweet</h2>

                            <TextField required fullWidth
                                label='Enter Title'
                                variant='outlined'
                                size='small'
                                margin='normal'
                                color='primary' onChange={(e) => { title_input = e.target.value }}></TextField>
                            <br></br>
                            <TextField multiline required fullWidth
                                rows={4}
                                label='Enter Description...' variant='outlined'
                                size='medium'
                                color='primary' onChange={(e) => { desc_input = e.target.value }}></TextField>
                            <Button variant='contained' sx={{
                                position: 'absolute',
                                right: 20,
                                bottom: 20
                            }} onClick={createThread}>
                                POST
                            </Button>
                        </div>
                    </Box>
                </Modal>
            </div>
        </ThemeProvider>

    )
}

export default CreateThread