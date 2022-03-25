import React from "react";
import CloseButton from 'react-bootstrap/CloseButton'
import { ListGroup, ListGroupItem } from "react-bootstrap";
import Todolist from "./Todolist";

export default function Todo({todos, setTodos}) {
    
    return(
        <>
       <div> 
    <ListGroup>
        <ListGroup.Item> 
        {todos.map((todo) => <Todolist key={todo.id} text={todo.text} todos={todos} setTodos={setTodos}/> )}
        </ListGroup.Item>
    </ListGroup>
       </div>
        </>
    );
}

//<li className="todo">Pass text here?</li> 
// <CloseButton />
// may need to map for text ex: todos.map((todo) => ( <Todo key={todo.id} text={todo.text />}))
//

// {todos.map((todo) => <Todo key={todo.id} text={todo.text} /> )}

//{todos.map((todo) => <Todo key={todo.id} text={todo.text} /> )}