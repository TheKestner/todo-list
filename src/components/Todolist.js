import React from "react";
import {Container, Button, Row, Col, NavItem} from 'react-bootstrap'

export default function Todolist({todos, text, setTodos, todo}) {

  const gottaDelete = () => {
    setTodos(todos.filter(todo => todo.id !== todo.id))
  }

  const markStatus = () => {
    if(todo.status === true){
      todo.status = false;
    } else if (todo.status === false){
      todo.status = true;
    }
  }
    
    return(
        <Container fluid="md">
        <Row>
          <Col> {text} </Col>
        </Row>
        <Button onClick={markStatus} variant="success">Complete</Button>{' '}
        <Button onClick={gottaDelete} type="submit" variant="danger">Remove</Button>{' '}
      </Container>
    );
}



{/* <div> 
       <li> {text} </li> 
       </div>
       <button>Completed</button>
       <button>Danger</button> */}