import { useContext } from "react";
import { Thread, AddThreadProps, FetchCommentProps, UpdateThreadProps, ThreadContext } from "../contexts/ThreadContext";

type UseThreadHookType = {
    threads: Thread[],
    addThread: (props: AddThreadProps) => void,
    //addComment: () => void,
    fetchComments: (props: FetchCommentProps) => void,
    updateThread: (props: UpdateThreadProps) => void,
    deleteThread: () => void

}

export const useThreads = (): UseThreadHookType => {
    const { state: { threads }, addThread, fetchComments, updateThread, deleteThread } = useContext(ThreadContext)

    return { threads, addThread, fetchComments, updateThread, deleteThread }
}