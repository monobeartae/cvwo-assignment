type Thread = {
    id: number,
    title: string,
    children: string,
    author: string,
    replies: Reply[] | null
}
// change author from string to id and number when set up
type Reply = {
    id: number,
    author: string,
    children: string,
    replies: Reply[] | null
}


// TEMP BUT ONLY FOR MYSQL TABLE
type ReplyData = {
    id: number,
    root_id: number,
    target_id: number,
    author: string,
    children: string
}

export type { Thread, Reply, ReplyData }