import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { blue } from '@mui/material/colors'

import './HomePage.css'

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
    // pretend this is from database
    const [threads, setThreads] = useState<Thread[]>([
        { id: 0, title: 'Thread1', children: 'aaa', author: 'taisei_tiddies', replies: null },
        { id: 1, title: 'Thread2', children: 'bruhurbruhefsiu', author: 'mono.', replies: null },
        { id: 2, title: 'Thread3', children: 'meow meow meow meow meow meow meow', author: 'manchi', replies: null },
        { id: 3, title: 'screwed my cs2030s finals and feeling like shit', children: 'anyone else\?', author: 'mono.', replies: null },
        { id: 4, title: 'Thread4', children: 'meow meow meow meow meow meow meow', author: 'manchi', replies: null },
        { id: 5, title: 'running out of ideas', children: 'fml n pray', author: '>--|-o', replies: null }
    ]);


    return (
        <>
            <Header />
            <div className='threads'>
                <Routes>
                    <Route path={"/thread/:id"} element={
                        <ThreadFullView threads={threads} setThreads={setThreads} />
                    } />
                    <Route path="/" element={
                        <ThreadsView threads={threads} />
                    } />
                    <Route path="*" element={
                        <p>page not found</p>
                    } />
                </Routes>
            </div>

            <Footer username={user.name} />
        </>

    )
}

export default HomePage