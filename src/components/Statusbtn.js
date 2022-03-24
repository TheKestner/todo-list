import React from "react";
import { Button, ButtonGroup } from "react-bootstrap";


export default function Status() {
  return(
      <>
      <ButtonGroup aria-label="Basic example">
        <Button variant="secondary">All</Button>
        <Button variant="secondary">Active</Button>
        <Button variant="secondary">Completed</Button>
        </ButtonGroup>
     </>
   
 
  );
 }
