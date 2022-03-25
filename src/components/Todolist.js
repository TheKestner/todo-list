import React from "react";
import {Container, Button, Row, Col, NavItem} from 'react-bootstrap'

export default function Todolist({todos, text, setTodos}) {

  const gottaDelete = () => {
    setTodos(todos.filter(todo => todo.id !== todo.id))
  }
    
    return(
        <Container fluid="md">
        <Row>
          <Col> {text} </Col>
        </Row>
        <Button variant="success">Complete</Button>{' '}
        <Button onClick={gottaDelete} type="submit" variant="danger">Remove</Button>{' '}
      </Container>
    );
}

// onClick={HandleDelete}

{/* <div> 
       <li> {text} </li> 
       </div>
       <button>Completed</button>
       <button>Danger</button> */}