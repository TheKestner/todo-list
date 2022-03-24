import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Form, Button, FormGroup, FormControl, ControlLabel, InputGroup} from "react-bootstrap";



// need state from setInputText,inputText
// Maybe need onSubmit/onKeyDown
// const InputKey = () => {

//   return <input type="text" onKeyDown={handleKeyDown} />
// }



export default function Input({addTodo, todos, setTodos}) {

  const keyDownHandler = (event) => {
    if (event.key === 'Enter') {
      addTodo(event.target.value)
    }
  }

 return(
     <>
       <InputGroup className="mb-3">
       <FormControl 
      onKeyDown={(e) => keyDownHandler(e)}
      placeholder="Enter Todos"
      aria-label="Enter Todos"
      aria-describedby="basic-addon2"
    />
  </InputGroup>
  </>

 );
}



// <InputGroup className="mb-3">
//     <FormControl
//       placeholder="Recipient's username"
//       aria-label="Recipient's username"
//       aria-describedby="basic-addon2"
//     />
//     <InputGroup.Text id="basic-addon2">@example.com</InputGroup.Text>
//   </InputGroup>