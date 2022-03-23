import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Form, Button, FormGroup, FormControl, ControlLabel, InputGroup} from "react-bootstrap";
import Todo from "./Todo";


// need state from setInputText,inputText
// Maybe need onSubmit/onKeyDown
// const InputKey = () => {
  const handleKeyDown = (event, addTodo) => {
    if (event.key === 'Enter') {
      console.log(addTodo)
    }
  }

//   return <input type="text" onKeyDown={handleKeyDown} />
// }



export default function Input() {
 return(
     <>
       <InputGroup className="mb-3">
       <FormControl 
      onKeyDown={(e) => handleKeyDown(e, addTodo)}
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