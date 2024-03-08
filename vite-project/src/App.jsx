import React from 'react';
import './App.css';
import AddTodo from './components/addTodo';
import Todos from './components/Todos';

function App() {
  return (
    <>
      <h1>React Redux Toolkit</h1>
      <AddTodo />
      <br />
      <Todos />
    </>
  );
}

export default App;