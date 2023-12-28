import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css';

import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';

import { Thread } from './contexts/ThreadContext';
import { User } from './contexts/UserContext';


function App() {
  const invalidUser = { id: -1, name: 'null' }
  const [user, setUser] = useState<User>(invalidUser);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage setUser={setUser} />} />
          <Route path="/home/*" element={<HomePage user={user} />} />
        </Routes>
      </BrowserRouter>
    </>

  );
}

export default App;
