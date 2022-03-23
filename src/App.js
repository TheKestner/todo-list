import React, {useState} from 'react';
import './App.css';
import axios from 'axios';
import Input from './components/Input';
import Status from './components/Statusbtn';
import Todo from './components/Todo';
import "bootstrap/dist/css/bootstrap.css";

export default function App() {

  // maybe need SUM STATE?
  // [inputText, setInputText] = useState("");
  // [todos, setTodos] = useState([]);
  // [status, setStatus] = useState([]);
  const [todos, setTodos] = useState([]);

 
  function addTodo(){
    //this can't be right.  There should be a way to get the info directly from the input field
    let newState = todos;
    const newID = Date.now();
    //the goal is to get the text from the text box into the text field.
    //it also should generate a unique ID that should greatest ID+1
    //status should be active by default this is probably fine to leave as a string
    newState.push({text:"example todo", id:[newID], status:'active'})
    setTodos(newState)
    //setLocalStorage should probably happen here.
    console.log(todos)
  }

  return (
    <div className="App">
      <header>
      <h1>Todo Lists</h1>
      </header>
      <button onClick={addTodo}>
        TEST ME
      </button>
      <Input addTodo={addTodo}/>
      <Todo />
      <Status />
    
    </div>
  );
}



//.  function addTodo(){
//   //this can't be right.  There should be a way to get the info directly from the input field
//   let newState = toDos;
//   //the goal is to get the text from the text box into the text field.
//   //it also should generate a unique ID that should greatest ID+1
//   //status should be active by default this is probably fine to leave as a string
//   newState.push({text:"example todo", id:'0', status:'active'})
//   setToDos(newState)
//   //setLocalStorage should probably happen here.
//   console.log(toDos)
// }/

// {text: 'do laundry',
// id: '0',
// status:'active'},
// {text: 'do something',
// id: '1',
// status:'active'
// }
