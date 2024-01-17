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
type AddCommentProps = {

}
type FetchCommentProps = {
    id: number
}
type UpdateThreadProps = {
    id: number,
}
type DeleteThreadProps = {

}

export type { AddThreadProps, AddCommentProps, FetchCommentProps, UpdateThreadProps, DeleteThreadProps }

type ReducerAction = {
    type: THREAD_ACTIONS.FETCH_COMMENTS,
    payload: FetchCommentProps
} | {
    type: THREAD_ACTIONS.ADD_THREAD,
    payload: AddThreadProps
} | {
    type: THREAD_ACTIONS.ADD_COMMENT,
    payload: AddCommentProps
} | {
    type: THREAD_ACTIONS.UPDATE_THREAD,
    payload: UpdateThreadProps
} | {
    type: THREAD_ACTIONS.DELETE_THREAD,
    payload: DeleteThreadProps
}

// pretend this is from database
const all_replies: CommentData[] = [
    { id: 100, root_id: 0, target_id: 0, author: 'donut', children: 'wow very cool' },
    { id: 101, root_id: 0, target_id: 0, author: 'zhongli241', children: 'ehhhhhhhh nani deska lorem ipsum aa aa aaaaaa aaa zzz overflow lets go  whee whee whee need more spam tes test test test test i want to sleep ngl bed looking very soft rn' },
    { id: 102, root_id: 0, target_id: 101, author: 'chicken_riCe', children: '.....' },
    { id: 103, root_id: 1, target_id: 1, author: 'danHengsAss', children: 'wow very cool' },
    { id: 104, root_id: 3, target_id: 3, author: 'cookieCAt', children: 'sadsge' },
    { id: 105, root_id: 0, target_id: 0, author: 'k1mchi', children: '>--|-o' }
];
function setReplies(id: number, CommentData: CommentData[]): Comment[] | null {
    var temp: Comment[] = CommentData.filter(r => r.target_id === id)
        .map<Comment>(rd => {
            return { id: rd.id, author: rd.author, children: rd.children, replies: null };
        });
    if (temp.length == 0)
        return null;
    temp.forEach(x => x.replies = setReplies(x.id, CommentData));
    return temp;
}

const reducer = (state: ThreadsState, action: ReducerAction): ThreadsState => {
    switch (action.type) {
        case THREAD_ACTIONS.ADD_THREAD:
            var newThreads: Thread[] = [...state.threads];
            newThreads.push(action.payload.thread);
            return { threads: newThreads };
        case THREAD_ACTIONS.FETCH_COMMENTS:
            console.log("fetching comments");
            const replies = all_replies.filter(r => r.root_id === action.payload.id);
            var newThreads: Thread[] = [...state.threads];
            newThreads.filter(thread => thread.id === action.payload.id).forEach(x => x.replies = setReplies(Number(x.id), replies));
            return { threads: newThreads };
        case THREAD_ACTIONS.UPDATE_THREAD:
            return { ...state };
        case THREAD_ACTIONS.DELETE_THREAD:
            return { ...state };
        default:
            throw new Error("Cannot find ThreadActionType");
    }
}

type UseThreadContextType = {
    state: ThreadsState,
    addThread: (props: AddThreadProps) => void,
    addComment: (props: AddCommentProps) => void,
    fetchComments: (props: FetchCommentProps) => void,
    updateThread: (props: UpdateThreadProps) => void,
    deleteThread: (props: DeleteThreadProps) => void

}

const initThreads: ThreadsState = {
    threads: []
}

const useThreadContext = (initState: ThreadsState): UseThreadContextType => {
    const [state, dispatch] = useReducer(reducer, initState)

    const addThread = useCallback((props: AddThreadProps) => {
        dispatch({ type: THREAD_ACTIONS.ADD_THREAD, payload: props })
        // TBC
    }, [])
    const addComment = useCallback((props: AddCommentProps) => {
        dispatch({ type: THREAD_ACTIONS.ADD_COMMENT, payload: props })
        // TBC
    }, [])
    const fetchComments = useCallback((props: FetchCommentProps) => {
        dispatch({ type: THREAD_ACTIONS.FETCH_COMMENTS, payload: props })
        // TBC
    }, [])
    const updateThread = useCallback((props: UpdateThreadProps) => {
        dispatch({ type: THREAD_ACTIONS.UPDATE_THREAD, payload: props })
        // TBC
    }, [])
    const deleteThread = useCallback((props: DeleteThreadProps) => {
        dispatch({ type: THREAD_ACTIONS.DELETE_THREAD, payload: props })
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

type ChildrenProps = {
    children?: ReactElement
}
export const ThreadProvider = ({ children, ...initThreadsState }: ChildrenProps & ThreadsState): ReactElement => {
    return (
        <ThreadContext.Provider value={useThreadContext(initThreadsState)}>
            {children}
        </ThreadContext.Provider>
    )
}
