import React, { useReducer } from 'react'

const ToDoCard = ({ todo, id, dispatch}) => {
    return (
        <div 
            className={ !todo.completed? "todo-card" : "todo-card completed"}
            onClick={() => dispatch({type: "TOGGLE_COMPLETED", payload: id })}

        >
            <h3>{todo.task}</h3>
        </div>
    )
}

export default ToDoCard