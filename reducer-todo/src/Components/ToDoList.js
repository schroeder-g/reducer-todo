import React from 'react'
import ToDoCard from './ToDoCard'

const ToDoList = (props) => {
   console.log(props)
    return (
        <div className="todo-list">
            {
                props.todos.map( todo => {
                    return <ToDoCard todo={todo} key={todo.id}/>
                })
            }
        </div>
    )
}

export default ToDoList