import React, {useState, useEffect} from 'react';
import './App.css';
import Input from './components/Input';
import Status from './components/Statusbtn';
import Todo from './components/Todo';
import "bootstrap/dist/css/bootstrap.css";

export default function App() {
  // maybe need SUM STATE?
  // [status, setStatus] = useState([]);
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    setTodos(JSON.parse(localStorage.getItem("text")));
  }, []);

  useEffect(() => {
    //storing input text
    localStorage.setItem("text", JSON.stringify(todos));
  }, [todos]);
  
 
  function addTodo(text){
    setTodos([...todos,
      {
        text: text, 
        id: Date.now(), 
        status: true
      }
    ])
  }
 

  return (
    <div className="App">
      <header>
      <h1>Todo Lists</h1>
      </header>
      <Input addTodo={addTodo} todos={todos} inputText={inputText} setInputText={setInputText}/>
      <Todo addTodo={addTodo} todos={todos} setTodos={setTodos}/>
      <Status addTodo={addTodo} todos={todos} setTodos={setTodos}/>
    
    </div>
  );
}

