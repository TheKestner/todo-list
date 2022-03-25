import React from "react";
import { Button, ButtonGroup } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Status({todos, setTodos}) {
  let len = todos.length;

  const gottaDelete = () => {
    setTodos(todos.filter(todo => todo.id !== todo.id))
  }


  return(
      <>
      <ButtonGroup aria-label="Basic example">
        {`total count: ${len}`}
        <Button variant="secondary">All</Button>
        <Button variant="secondary">Active</Button>
        <Button variant="secondary">Completed</Button>
        <Button onClick={gottaDelete} variant="secondary">DELETE ALL</Button>
        </ButtonGroup>
     </>
   
 
  );
 }
