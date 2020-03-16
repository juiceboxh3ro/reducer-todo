import React from 'react'
import Todo from './Todo';

const TodoList = ({toDo, toggleCompleted}) => {
  console.log(toDo)
  return (
    <div>
      {toDo.map(item => (
        <Todo
          key={item.id}
          task={item}
          toggleCompleted={toggleCompleted}
        />
      ))}
      <button className="clear-btn">Clear Complete</button>
    </div>
  )
}

export default TodoList;