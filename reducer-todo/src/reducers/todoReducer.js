import React from 'react'

import { v4 as uuid } from 'uuid'

export const initialState = {
    todos: [
        {
            task: "get the bag",
            completed: false,
            id : uuid()
        }
    ]
}

export function todoReducer(state, action) {
    switch (action.type) {
        case 'TOGGLE_COMPLETED' :
            return state.todos
        default : return state
    }
}
