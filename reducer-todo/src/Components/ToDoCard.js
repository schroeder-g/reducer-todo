import React from 'react'

const ToDoCard = (props) => {
    const { todo } = props
    return (
        <div>
            <h3>{todo.task}</h3>
        </div>
    )
}

export default ToDoCard