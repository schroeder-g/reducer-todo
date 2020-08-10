import React from 'react'

import { v4 as uuid } from 'uuid'

export const initialState = {
    todos: [
        {
            task: "get the bag",
            completed: false,
            id : uuid()
        },
        {
            task: "get several more bags",
            completed: false,
            id : uuid()
        }
    ]
}

export function todoReducer(state, action) {
    switch (action.type) {
        case 'TOGGLE_COMPLETED' :
            return { 
                ...state,
               todos: state.todos.map( todo => todo.id === action.payload ? {...todo, completed: !todo.completed }: todo )
            }
        case 'TODO_SUBMISSION' :
            const newTodo = {task: action.payload, completed: false, id: uuid()}
            console.log(newTodo)
            return {
                ...state, todos: [ ...state.todos, newTodo ]
            }
        case 'CLEAR_COMPLETED' :
            return {
                ...state, todos: state.todos.filter( todo => !todo.completed)
            }
        default : return state
    }
}
