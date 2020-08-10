import React, { useState } from 'react'


 const ToDoForm = ({ dispatch }) => {
    
     const [formValues, setFormValues] = useState('')

    const handleChange = e => {
        e.persist()
        setFormValues(e.target.value)
    }
    const handleSubmit = e => {
        e.preventDefault()
        dispatch({ type: "TODO_SUBMISSION", payload: formValues})
        setFormValues('')
    }

    const handleClear = e => {
        e.preventDefault()
        dispatch({ type: "CLEAR_COMPLETED" })
    }

    return (
        <form 
        >
            <label htmlFor="newTodo">New Task</label>
            <input
                name="newTodo"
                placeholder="bake cookies"
                type="text"
                value={formValues}
                onChange={handleChange}
            ></input>
            <button
                type="submit"
                onClick={handleSubmit}
            >Add</button>
            <button 
                onClick={handleClear}
            >Clear</button>
        </form>
    )
}

export default ToDoForm