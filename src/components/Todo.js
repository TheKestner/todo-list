import React from "react";
import CloseButton from 'react-bootstrap/CloseButton'
import { ListGroup, ListGroupItem } from "react-bootstrap";

export default function Todo() {
    return(
        <>
       <div> 
    <ListGroup>
        <ListGroup.Item>test Todo </ListGroup.Item>
    </ListGroup>
       </div>
        </>
    );
}

//<li className="todo">Pass text here?</li> 
// <CloseButton />