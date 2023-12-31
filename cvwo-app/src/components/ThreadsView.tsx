import ThreadItem from "./ThreadItem";
import { Thread } from "../contexts/ThreadContext";
import { FlatList, View } from "react-native";
import { useThreads } from "../hooks/ThreadHooks";

type ThreadsViewProps = {
    //threads: Thread[]
}
const ThreadsView = ({ }: ThreadsViewProps) => {
    const { threads } = useThreads();
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