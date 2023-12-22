import React from 'react'
import { useParams, Link } from 'react-router-dom'
import ThreadItem from './ThreadItem'
import { Thread, ReplyData, Reply } from '../data/Thread'
import ReplyItem from './ReplyItem'
import { Button, createTheme, ThemeProvider } from '@mui/material'
import { blueGrey, grey } from '@mui/material/colors';
import { FlatList, View } from 'react-native'

const theme = createTheme({
    palette: {
        primary: blueGrey,
    },
})

type ThreadListProps = {
    threads: Thread[],
    setThreads: React.Dispatch<React.SetStateAction<Thread[]>>
}

function setReplies(id: number, replyData: ReplyData[]): Reply[] | null {
    console.log(`---setting replies for post id ${id}`);
    var temp: Reply[] = replyData.filter(r => r.target_id === id)
        .map<Reply>(rd => {
            return { id: rd.id, author: rd.author, children: rd.children, replies: null };
        });
    if (temp.length == 0)
        return null;
    temp.forEach(x => x.replies = setReplies(x.id, replyData));
    return temp;
}

const ThreadFullView = ({ threads, setThreads }: ThreadListProps) => {
    const { id } = useParams();

    console.log(`fetching thread info for ${id}`);
    // pretend this is from database
    const all_replies: ReplyData[] = [
        { id: 100, root_id: 0, target_id: 0, author: 'donut', children: 'wow very cool' },
        { id: 101, root_id: 0, target_id: 0, author: 'zhongli241', children: 'ehhhhhhhh' },
        { id: 102, root_id: 0, target_id: 101, author: 'chicken_riCe', children: '.....' },
        { id: 103, root_id: 1, target_id: 1, author: 'danHengsAss', children: 'wow very cool' },
        { id: 104, root_id: 3, target_id: 3, author: 'cookieCAt', children: 'sadsge' },
    ];
    // fetch from db server
    const replies = all_replies.filter(r => r.root_id.toString() === id);
    console.log(`filtered root ids`);

    var thread = threads.find(x => x.id.toString() === id);
    if (!thread) {
    } else if (thread.replies == null) {
        var newThreads: Thread[] = [...threads];
        newThreads.filter(thread => thread.id.toString() === id).forEach(x => x.replies = setReplies(Number(x.id), replies));
        setThreads(newThreads);
        thread = newThreads.find((thread) =>
            thread.id.toString() === id);
        console.log(`set replies`);
    }
    console.log(`rendering`);
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
                        <ReplyItem id={item.id} author={item.author} replies={item.replies}>{item.children}</ReplyItem>
                }
                    keyExtractor={(item) => item.id.toString()} ItemSeparatorComponent={() => <View style={{ height: 2 }} />} />}
        </>

    )

}

export default ThreadFullView