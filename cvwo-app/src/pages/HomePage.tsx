import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from '../Header'
import { Thread } from '../data/Thread'
import ThreadPreview from '../components/ThreadItem'

const HomePage = () => {
    const [threads, setThreads] = useState<Thread[]>([
        { id: 0, title: 'Thread1', children: 'aaa', author: 'mono.' }
    ]);

    return (
        <>
            <Header />
            <Routes>
                <Route>

                </Route>
            </Routes>
        </>

    )
}

export default HomePage