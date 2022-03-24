import React, {useState} from 'react';
import './App.css';
import axios from 'axios';
import Input from './components/Input';
import Status from './components/Statusbtn';
import Todo from './components/Todo';
import "bootstrap/dist/css/bootstrap.css";

export default function App() {

  // maybe need SUM STATE?
  // const [inputText, setInputText] = useState("");
  // [todos, setTodos] = useState([]);
  // [status, setStatus] = useState([]);
  const [todos, setTodos] = useState([]);

 
  function addTodo(text){
    let newState = todos;
    const newID = Date.now();
    //the goal is to get the text from the text box into the text field.
    newState.push({text: text, id: newID, status:'active'})
    setTodos([...newState])
    //setLocalStorage should probably happen here.
    console.log(todos)
  }

  //function test

  return (
    <div className="App">
      <header>
      <h1>Todo Lists</h1>
      </header>
      <Input addTodo={addTodo} todos={todos}/>
      <Todo addTodo={addTodo} todos={todos}/>
      <Status />
    
    </div>
  );
}


{/* <button onClick={addTodo}>
        TEST ME
      </button> */}
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
