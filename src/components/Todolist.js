import React from "react";
import {Container, Button, Row, Col} from 'react-bootstrap'

export default function Todolist({addtodos,todos, text}) {


    
    return(
        <Container fluid="md">
        <Row>
          <Col> {text} </Col>
        </Row>
        <Button variant="success">Complete</Button>{' '}
        <Button variant="danger">Remove</Button>{' '}
      </Container>
    );
}



{/* <div> 
       <li> {text} </li> 
       </div>
       <button>Completed</button>
       <button>Danger</button> */}