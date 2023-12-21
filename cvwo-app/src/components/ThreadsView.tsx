import ThreadItem from "./ThreadItem";
import { Thread } from "../data/Thread";

type ThreadsViewProps = {
    threads: Thread[]
}
const ThreadsView = ({ threads }: ThreadsViewProps) => {
    return (
        <>
            {/* threads.map((thread) => {

            }) */}
            <ThreadItem id={0} title='My Thread' author='mono.'>aaaaaaaaaa</ThreadItem>
        </>
    )

}

export default ThreadsView