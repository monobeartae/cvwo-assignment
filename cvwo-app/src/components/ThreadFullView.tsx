import React, { useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import ThreadItem from './ThreadItem'
import { Thread, CommentData, Comment } from '../contexts/ThreadContext'
import { useThreads } from '../hooks/ThreadHooks'
import CommentItem from './CommentItem'
import { Button, createTheme, ThemeProvider } from '@mui/material'
import { blueGrey, grey } from '@mui/material/colors';
import { FlatList, View } from 'react-native'

const theme = createTheme({
    palette: {
        primary: blueGrey,
    },
})

type ThreadListProps = {
    // threads: Thread[],
    // setThreads: React.Dispatch<React.SetStateAction<Thread[]>>
}

const ThreadFullView = ({ }: ThreadListProps) => {
    const { id } = useParams();
    const threadData = useThreads();


    var thread = threadData.threads.find(x => x.id.toString() === id);

    useEffect(() => {
        thread && thread.replies == null && threadData.fetchComments({ id: thread.id })
    }, []);

    return (
        <>
            <ThemeProvider theme={theme}>
                <Link to='/home'>
                    <Button variant="outlined" color='primary'>back</Button>
                </Link>
            </ThemeProvider>
            {thread &&
                <>
                    <h2> {thread.title}</h2>
                    <p>by {thread.author}</p>
                    <p>{thread.children}</p>
                    <hr></hr>
                </>}
            {thread &&
                <FlatList data={thread.replies} renderItem={
                    ({ item }) =>
                        <CommentItem id={item.id} author={item.author} replies={item.replies}>{item.children}</CommentItem>
                }
                    keyExtractor={(item) => item.id.toString()} ItemSeparatorComponent={() => <View style={{ height: 2 }} />} />}
        </>

    )

}

export default ThreadFullView