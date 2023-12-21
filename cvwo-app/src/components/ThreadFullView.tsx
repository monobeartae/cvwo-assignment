import React from 'react'
import ThreadItem from './ThreadItem'
import { Thread } from '../data/Thread'

const ThreadFullView = ({ id, title, children, author }: Thread) => {
    return (
        <ThreadItem id={id} title={title} author={author}>
            {children}
        </ThreadItem>
    )
}

export default ThreadFullView