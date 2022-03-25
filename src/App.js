import React, {useState} from 'react';
import './App.css';
import axios from 'axios';
import Input from './components/Input';
import Status from './components/Statusbtn';
import Todo from './components/Todo';
import "bootstrap/dist/css/bootstrap.css";

export default function App() {

  // maybe need SUM STATE?
  const [inputText, setInputText] = useState("");
  // [status, setStatus] = useState([]);
  const [todos, setTodos] = useState([]);
  
 
  function addTodo(text){
    // let newState = todos;
    // const newID = Date.now();
    // newState.push({text: text, id: newID, status:'active'})
    setTodos([...todos,
      {
        text: text, 
        id: Date.now(), 
        status: true
      }
    ])
  }
 

  //function test

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





// {text: 'do laundry',
// id: '0',
// status:'active'},
// {text: 'do something',
// id: '1',
// status:'active'
// }
