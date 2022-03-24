import React from "react";
import { Button, ButtonGroup } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Status() {
  return(
      <>
      <ButtonGroup aria-label="Basic example">
        <Button variant="secondary">All</Button>
        <Button variant="secondary">Active</Button>
        <Button variant="secondary">Completed</Button>
        <Button variant="secondary">DELETE ALL</Button>
        </ButtonGroup>
     </>
   
 
  );
 }
