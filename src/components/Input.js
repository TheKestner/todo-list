import React from "react";
import InputGroup from 'react-bootstrap/InputGroup'

export default function Input() {
 return(
     <div>
    <InputGroup className="mb-3">
    <FormControl
      placeholder="Recipient's username"
      aria-label="Recipient's username"
      aria-describedby="basic-addon2"
    />
    <InputGroup.Text id="basic-addon2">@example.com</InputGroup.Text>
  </InputGroup>
  </div>
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