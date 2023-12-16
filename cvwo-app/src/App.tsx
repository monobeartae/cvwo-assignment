import React, { useState } from 'react';
import logo from './logo.svg';
import Thread from './components/Thread';
import Comment from './components/Comment';
import ExampleCounter from './examples/ExampleCounter';
import ExampleGeneric from './examples/ExampleGeneric';
import './App.css';
import Hooks from './examples/Hooks';


function App() {
  const [count, setCount] = useState<number>(0);
  const [name, setName] = useState<string>("icecream");

  return (
    <>
      <Thread title={name} />
      <Comment >10/10 tiddies</Comment>
      <ExampleCounter setCount={setCount}>count is {count}</ExampleCounter>
      <ExampleGeneric items={["chinjin, chinjin, chinjin, satonu"]} render={(item: string) => <span>{item}</span>} />
      <h1>h1</h1>
      <h2>h2</h2>
      <h3>h3</h3>
      <h4>h1</h4>
      <p>p</p>
      <Hooks />
    </>

  );
}

export default App;
