import React from 'react';
import logo from './logo.svg';
import './App.css';

import ToDoList from './Components/ToDoList'
import {todoReducer, initialState }from './reducers/todoReducer'

class App extends React.Component {
  constructor(){
    super()
    this.state = {initialState}
  }

  render(){
    return (
      <div className="App">
        <ToDoList todos={this.state.initialState.todos}/>
      </div>
    );
  }
  }

export default App;
