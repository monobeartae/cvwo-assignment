import React, { ReactNode, useState } from 'react'

type CounterProps = {
    setCount: React.Dispatch<React.SetStateAction<number>>,
    children: ReactNode
}
const ExampleCounter = ({ setCount, children }: CounterProps) => {

    return (
        <>
            <h1>{children}</h1>
            <button onClick={() => setCount(prev => prev + 1)}>add</button>
        </>
    )
}

export default ExampleCounter