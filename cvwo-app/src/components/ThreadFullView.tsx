import React from 'react'
import { useParams, Link } from 'react-router-dom'
import ThreadItem from './ThreadItem'
import { Thread, CommentData, Comment } from '../contexts/ThreadContext'
import { useThreads } from '../hooks/ThreadHooks'
import CommentItem from './ReplyItem'
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

function setReplies(id: number, CommentData: CommentData[]): Comment[] | null {
    console.log(`---setting replies for post id ${id}`);
    var temp: Comment[] = CommentData.filter(r => r.target_id === id)
        .map<Comment>(rd => {
            return { id: rd.id, author: rd.author, children: rd.children, replies: null };
        });
    if (temp.length == 0)
        return null;
    temp.forEach(x => x.replies = setReplies(x.id, CommentData));
    return temp;
}

const ThreadFullView = ({ }: ThreadListProps) => {
    const { id } = useParams();
    const threadData = useThreads();

    // pretend this is from database
    const all_replies: CommentData[] = [
        { id: 100, root_id: 0, target_id: 0, author: 'donut', children: 'wow very cool' },
        { id: 101, root_id: 0, target_id: 0, author: 'zhongli241', children: 'ehhhhhhhh' },
        { id: 102, root_id: 0, target_id: 101, author: 'chicken_riCe', children: '.....' },
        { id: 103, root_id: 1, target_id: 1, author: 'danHengsAss', children: 'wow very cool' },
        { id: 104, root_id: 3, target_id: 3, author: 'cookieCAt', children: 'sadsge' },
    ];
    // fetch from db server
    const replies = all_replies.filter(r => r.root_id.toString() === id);

    var thread = threadData.threads.find(x => x.id.toString() === id);
    if (!thread) {
    } else if (thread.replies == null) {
        threadData.fetchComments({ id: thread.id });
        // MOVE TO THREADCONTEXT
        var newThreads: Thread[] = [...threadData.threads];
        newThreads.filter(thread => thread.id.toString() === id).forEach(x => x.replies = setReplies(Number(x.id), replies));
        thread = newThreads.find((thread) =>
            thread.id.toString() === id);
    }

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