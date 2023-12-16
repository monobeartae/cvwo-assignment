import React from 'react'
type ThreadProps = { title: string }

const Thread = ({ title }: ThreadProps) => {
    return (
        <div> {title}</div>
    )
}

export default Thread