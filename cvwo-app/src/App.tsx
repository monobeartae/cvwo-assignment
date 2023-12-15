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


  return (
    <>
      <Thread title={"mono."} />
      <Comment>10/10 tiddies</Comment>
      <ExampleCounter setCount={setCount}>count is {count}</ExampleCounter>
      <ExampleGeneric items={["chinjin, chinjin, chinjin, satonu"]} render={(item: string) => <span>{item}</span>} />
      <Hooks />
    </>

  );
}

export default App;
