import React, { ReactNode } from 'react'
type CommentProps = {
    title?: string,
    children: ReactNode
}

const Comment = ({ title = "taisei tiddies", children }: CommentProps) => {
    return (
        <section>
            <h2>{title}</h2>
            <p>{children}</p>

        </section>
    )
}

export default Comment