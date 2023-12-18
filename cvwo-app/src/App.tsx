import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import logo from './logo.svg';
import ThreadPreview from './components/ThreadPreview';
import Comment from './components/Comment';
import ExampleCounter from './examples/ExampleCounter';
import ExampleGeneric from './examples/ExampleGeneric';
import './App.css';
import Hooks from './examples/Hooks';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import ThreadFull from './components/ThreadFull';

type Thread = {
  id: number,
  title: string,
  children: string,
  author: string
}

function App() {
  const [threads, setThreads] = useState<Thread[]>([
    { id: 0, title: 'Thread1', children: 'aaa', author: 'mono.' }
  ]);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/home" element={<HomePage />} />
          {/* <Route path="/home/thread" element={<ThreadFull />} /> */}
        </Routes>
      </BrowserRouter>
      {/*      
      <ExampleCounter setCount={setCount}>count is {count}</ExampleCounter>
      <ExampleGeneric items={["chinjin, chinjin, chinjin, satonu"]} render={(item: string) => <span>{item}</span>} /> */}
    </>

  );
}

export default App;
