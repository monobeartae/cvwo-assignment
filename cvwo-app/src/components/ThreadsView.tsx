import ThreadItem from "./ThreadItem";
import { Thread } from "../data/Thread";
import { FlatList, View } from "react-native";

type ThreadsViewProps = {
    threads: Thread[]
}
const ThreadsView = ({ threads }: ThreadsViewProps) => {
    return (
        <>
            <h2>Threads</h2>
            <FlatList data={threads}
                renderItem={
                    ({ item }) =>
                        <ThreadItem key={item.id} id={item.id} title={item.title} author={item.author} replies={item.replies}>
                            {item.children}
                        </ThreadItem>}
                keyExtractor={(item) => item.id.toString()} ItemSeparatorComponent={() => <View style={{ height: 4 }} />} />
        </>
    )

}

export default ThreadsView