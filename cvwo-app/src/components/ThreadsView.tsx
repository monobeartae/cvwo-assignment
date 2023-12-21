import ThreadItem from "./ThreadItem";
import { Thread } from "../data/Thread";
import { FlatList, View } from "react-native";

type ThreadsViewProps = {
    threads: Thread[]
}
const ThreadsView = ({ threads }: ThreadsViewProps) => {
    return (
        <div style={{
            overflowX: "hidden"
        }}>
            <h2>Threads</h2>
            {/* {threads &&
                threads.map((thread) => (
                    <ThreadItem key={thread.id} id={thread.id} title={thread.title} author={thread.author}>
                        {thread.children}
                    </ThreadItem>
                ))} */}
            <FlatList data={threads} renderItem={
                ({ item }) => <ThreadItem key={item.id} id={item.id} title={item.title} author={item.author}>
                    {item.children}
                </ThreadItem>} keyExtractor={(item) => item.id.toString()} />
            {/* <ThreadItem id={0} title={"aaa"} author={'esfr'}>
                adafaf
            </ThreadItem>
            <ThreadItem id={0} title={"aaa"} author={'esfr'}>
                adafaf
            </ThreadItem>
            <ThreadItem id={0} title={"aaa"} author={'esfr'}>
                adafaf
            </ThreadItem>
            <ThreadItem id={0} title={"aaa"} author={'esfr'}>
                adafaf
            </ThreadItem> */}

        </div>
    )

}

export default ThreadsView