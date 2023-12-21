import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from '../Header'
import Footer from '../Footer'
import { Thread } from '../data/Thread'
import { User } from '../data/User'
import ThreadsView from '../components/ThreadsView'
import ThreadFullView from '../components/ThreadFullView'

type HomeProps = {
    user: User
}

const HomePage = ({ user }: HomeProps) => {
    const [threads, setThreads] = useState<Thread[]>([
        { id: 0, title: 'Thread1', children: 'aaa', author: 'taisei_tiddies' },
        { id: 1, title: 'Thread2', children: 'bruhurbruhefsiu', author: 'mono.' },
        { id: 2, title: 'Thread3', children: 'meow meow meow meow meow meow meow', author: 'manchi' }
    ]);

    return (
        <>
            <Header />
            <Routes>
                <Route path={"/thread/:id"} element={
                    <ThreadFullView threads={threads} />
                } />
                <Route path="/" element={
                    <ThreadsView threads={threads} />
                } />
                <Route path="*" element={
                    <p>page not found</p>
                } />
            </Routes>
            <Footer username={user.name}></Footer>
        </>

    )
}

export default HomePage