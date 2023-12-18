import React from 'react'
import ThreadPreview from './ThreadPreview'
import { Thread } from '../data/Thread'

const ThreadFull = ({ id, title, children, author }: Thread) => {
    return (
        <ThreadPreview id={id} title={title} author={author}>
            {children}
        </ThreadPreview>
    )
}

export default ThreadFull