import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css';

import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';

import { Thread } from './data/Thread';
import { User } from './data/User';


function App() {
  const [user, setUser] = useState<User | null>(null);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/home" element={<HomePage />} />
          {/* <Route path="/home/thread" element={<ThreadFull />} /> */}
        </Routes>
      </BrowserRouter>
    </>

  );
}

export default App;
