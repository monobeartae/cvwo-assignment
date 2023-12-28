import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { blue } from '@mui/material/colors'

import './HomePage.css'

import Header from '../Header'
import Footer from '../Footer'
import { useThreads } from '../hooks/ThreadHooks'
import { User } from '../contexts/UserContext'
import ThreadsView from '../components/ThreadsView'
import ThreadFullView from '../components/ThreadFullView'

type HomeProps = {
    user: User
}

const HomePage = ({ user }: HomeProps) => {

    const { threads } = useThreads();

    return (
        <>
            <Header />
            <div className='threads'>
                <Routes>
                    <Route path={"/thread/:id"} element={
                        <ThreadFullView />
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