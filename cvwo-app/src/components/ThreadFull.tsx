import React from 'react'
import ThreadPreview from './ThreadPreview'

type ThreadProps = {
    id: number,
    title: string,
    children: string
}

const ThreadFull = ({ id, title, children }: ThreadProps) => {
    return (
        <ThreadPreview id={id} title={title}>
            {children}
        </ThreadPreview>
    )
}

export default ThreadFull