import React, { useReducer} from 'react'
import ToDoCard from './ToDoCard'

import {todoReducer, initialState} from '../reducers/todoReducer'


const ToDoList = (props) => {
    return (
        <div className="todo-list">
            {
                props.state.todos.map( todo => {
                    return <ToDoCard todo={todo} key={todo.id} id={todo.id} dispatch={props.dispatch}/>
                })
            }
        </div>
    )
}

export default ToDoList