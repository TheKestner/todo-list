import React from "react";


export default function Todolist({addtodos,todos, text}) {
    
    return(
        <>
       <div> 
       <li> {text} </li> 
       </div>
       <button>Completed</button>
       <button>Remove</button>
        </>
    );
}