import React, { useState, useReducer } from 'react';

import { myReducer, initialState } from './reducers/myReducer';

const App = () => {
  const [state, dispatch] = useReducer(myReducer, initialState);
  const [newTask, setNewTask] = useState();

  const handleChanges = e => {
    setNewTask(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault()
  }

  return (
    <div className="todo-list-holder">
      <div id="the-todo">
        <div className="header">
          <h2>A Reduced To-Do List</h2>
          {state.length > 0 ? <p></p> : <p>Add an item to your to-do list</p>}
        </div>

        <form className="todo-form" autoComplete="off" onSubmit={handleSubmit}>
          <input
            className="add-task"
            type="text" name="item"
            onChange={handleChanges}
            />
          <button className="add-btn" onClick={() => dispatch({ type: 'ADD_TASK', payload: newTask })}>Add</button>
        </form>

        {state.map(i => (
          <div className={`item${i.completed ? ' completed' : ''}`}
            key={i.id}
            onClick={() => dispatch({ type: 'TOGGLE_COMPLETE', payload: i.id })}
          >{i.item}</div>
        ))}

        <button 
          className="clear-btn"
          onClick={() => dispatch({ type: 'CLEAR_COMPLETE' })}
        >Clear Complete</button>
      </div>
    </div>
  )
}

export default App;