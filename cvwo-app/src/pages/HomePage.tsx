import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { blue } from '@mui/material/colors'

import './HomePage.css'

import Header from '../Header'
import Footer from '../Footer'
import NavBar from '../NavBar'
import CreateThread from '../CreateThread'
import { useThreads } from '../hooks/ThreadHooks'
import { User } from '../contexts/UserContext'
import ThreadsView from '../components/ThreadsView'
import ThreadFullView from '../components/ThreadFullView'
import { Thread, ThreadProvider } from '../contexts/ThreadContext'
import { IconButton } from '@mui/material';

type HomeProps = {
    user: User
}

const HomePage = ({ user }: HomeProps) => {

    // pretend this is from database
    const threads: Thread[] = [
        { id: 0, title: 'Thread1', children: 'aaa', author: 'taisei_tiddies', replies: null },
        { id: 1, title: 'Thread2', children: 'bruhurbruhefsiu', author: 'mono.', replies: null },
        { id: 2, title: 'Thread3', children: 'meow meow meow meow meow meow meow', author: 'manchi', replies: null },
        { id: 3, title: 'screwed my cs2030s finals and feeling like shit', children: 'anyone else\?', author: 'mono.', replies: null },
        { id: 4, title: 'Thread4', children: 'meow meow meow meow meow meow meow', author: 'manchi', replies: null },
        { id: 5, title: 'running out of ideas', children: 'fml n pray', author: '>--|-o', replies: null }
    ];

    return (
        <ThreadProvider threads={threads}>
            <>

                <Header />
                <NavBar />
                <div className='threads'>
                    <Routes>
                        <Route path={"/thread/:id"} element={
                            <ThreadFullView />
                        } />
                        <Route path="/" element={
                            <ThreadsView />
                        } />
                        <Route path="*" element={
                            <p>page not found</p>
                        } />
                    </Routes>
                </div>
                <CreateThread />
                <Footer username={user.name} />
            </>
        </ThreadProvider>

    )
}

export default HomePage