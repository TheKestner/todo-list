import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Form, Button, FormGroup, FormControl, ControlLabel, InputGroup} from "react-bootstrap";




export default function Input({addTodo, setInputText, inputText}) {

  const keyDownHandler = (event) => {
    if (event.key === 'Enter') {
      addTodo(event.target.value)
      setInputText("");
    }
  }

 return(
     <>
       <InputGroup className="mb-3">
       <FormControl 
      onKeyDown={(e) => keyDownHandler(e)}
      value={inputText}
      onChange={(e) => setInputText(e.target.value)}
      placeholder="Enter Todos"
      aria-label="Enter Todos"
      aria-describedby="basic-addon2"
    />
  </InputGroup>
  </>

 );
}



