import { createContext, useReducer, useCallback, ReactElement } from "react"

type Thread = {
    id: number,
    title: string,
    children: string,
    author: string,
    replies: Comment[] | null
}
type ThreadsState = {
    threads: Thread[]
}
// change author from string to id and number when set up
type Comment = {
    id: number,
    author: string,
    children: string,
    replies: Comment[] | null
}

// TEMP BUT ONLY FOR MYSQL TABLE
type CommentData = {
    id: number,
    root_id: number,
    target_id: number,
    author: string,
    children: string
}

export type { Thread, ThreadsState, Comment, CommentData }

const enum THREAD_ACTIONS {
    ADD_THREAD,
    ADD_COMMENT,
    FETCH_COMMENTS,
    UPDATE_THREAD,
    DELETE_THREAD
}

type AddThreadProps = {
    thread: Thread
}
type FetchCommentProps = {
    id: number
}
type UpdateThreadProps = {
    id: number,

}

export type { AddThreadProps, FetchCommentProps, UpdateThreadProps }

type ReducerAction = {
    type: THREAD_ACTIONS,
    payload?: FetchCommentProps | AddThreadProps | UpdateThreadProps // check on diff/multiple input
}

const reducer = (state: ThreadsState, action: ReducerAction): ThreadsState => {
    switch (action.type) {
        case THREAD_ACTIONS.ADD_THREAD:
            return { ...state };
        case THREAD_ACTIONS.FETCH_COMMENTS:
            console.log("fetching comments");
            return { ...state };
        case THREAD_ACTIONS.UPDATE_THREAD:
            return { ...state };
        case THREAD_ACTIONS.DELETE_THREAD:
            return { ...state };
        default:
            throw new Error("Cannot find ThreadActionType: " + action.type);
    }
}

type UseThreadContextType = {
    state: ThreadsState,
    addThread: (props: AddThreadProps) => void,
    addComment: () => void,
    fetchComments: (props: FetchCommentProps) => void,
    updateThread: (props: UpdateThreadProps) => void,
    deleteThread: () => void

}

const initThreads: ThreadsState = {
    threads: []
}

const useThreadContext = (initState: ThreadsState): UseThreadContextType => {
    const [state, dispatch] = useReducer(reducer, initState)

    const addThread = useCallback(() => {
        dispatch({ type: THREAD_ACTIONS.ADD_THREAD })
        // TBC
    }, [])
    const addComment = useCallback(() => {
        dispatch({ type: THREAD_ACTIONS.ADD_COMMENT })
        // TBC
    }, [])
    const fetchComments = useCallback(() => {
        dispatch({ type: THREAD_ACTIONS.FETCH_COMMENTS })
        // TBC
    }, [])
    const updateThread = useCallback(() => {
        dispatch({ type: THREAD_ACTIONS.UPDATE_THREAD })
        // TBC
    }, [])
    const deleteThread = useCallback(() => {
        dispatch({ type: THREAD_ACTIONS.DELETE_THREAD })
        // TBC
    }, [])

    return { state, addThread, addComment, fetchComments, updateThread, deleteThread }
}

const initThreadContextState: UseThreadContextType = {
    state: initThreads,
    addThread: (props: AddThreadProps) => { },
    addComment: () => { },
    fetchComments: (props: FetchCommentProps) => { },
    updateThread: (props: UpdateThreadProps) => { },
    deleteThread: () => { }
}

export const ThreadContext = createContext<UseThreadContextType>(initThreadContextState)

export const ThreadProvider = (initThreadsState: ThreadsState): ReactElement => {
    return (
        <ThreadContext.Provider value={useThreadContext(initThreadsState)}>
        </ThreadContext.Provider>
    )
}
