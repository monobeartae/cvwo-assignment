import React from 'react'
type ThreadProps = { title: string }

const Thread = ({ title }: ThreadProps) => {
    return (
        <div>Thread {title}</div>
    )
}

export default Thread