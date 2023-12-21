import ThreadItem from "./ThreadItem";
import { Thread } from "../data/Thread";

type ThreadsViewProps = {
    threads: Thread[]
}
const ThreadsView = ({ threads }: ThreadsViewProps) => {
    return (
        <>
            <h2>Threads</h2>
            {threads.map(thread => (
                <ThreadItem key={thread.id} id={thread.id} title={thread.title} author={thread.author}>
                    {thread.children}
                </ThreadItem>
            ))}
        </>
    )

}

export default ThreadsView