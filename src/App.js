import React, {useState} from 'react';
import './App.css';
import axios from 'axios';
import Input from './components/Input';
import Status from './components/Status';
import Todo from './components/Todo';

export default function App() {

  // maybe need SUM STATE?
  // [inputText, setInputText] = useState("");
  // [todos, setTodos] = useState([]);
  // [status, setStatus] = useState([]);

  return (
    <div className="App">
      <header>
      <h1>Todo Lists</h1>
      </header>
      <Input />
      <Todo />
      <Status />
    
    </div>
  );
}



