import React, { useReducer} from 'react';
import './App.css';

import TodoForm from './Components/ToDoForm'
import ToDoList from './Components/ToDoList'

import { initialState, todoReducer } from './reducers/todoReducer'

function App (){
  const [state, dispatch] = useReducer(todoReducer, initialState)

    return (
      <div className="App">
        <TodoForm  dispatch={dispatch} />
        <ToDoList state={state} dispatch={dispatch}/>
      </div>
    );
  }

export default App;
