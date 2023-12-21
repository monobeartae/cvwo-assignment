import React from 'react'
import { useParams, Link } from 'react-router-dom'
import ThreadItem from './ThreadItem'
import { Thread } from '../data/Thread'
import { Button, createTheme, ThemeProvider } from '@mui/material'
import { blueGrey, grey } from '@mui/material/colors';

const theme = createTheme({
    palette: {
        primary: blueGrey,
    },
})

type ThreadListProps = {
    threads: Thread[]
}
const ThreadFullView = ({ threads }: ThreadListProps) => {
    const { id } = useParams();

    const thread = threads.find((thread) =>
        thread.id.toString() === id);
    return (
        <ThemeProvider theme={theme}>
            <Link to='/home'>
                <Button variant="outlined" color='primary'>back</Button>
            </Link>
            {thread &&
                <>
                    <h2> {thread.title}</h2>
                    <p>by {thread.author}</p>
                    <p>{thread.children}</p>
                </>

            }

        </ThemeProvider>

    )

}

export default ThreadFullView