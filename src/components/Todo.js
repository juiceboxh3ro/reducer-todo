import React from 'react'

const Todo = props => {
  console.log(props)
  return (
    <div
      onClick={() => props.toggleCompleted(props.task.id)}
      className={`item${props.task.completed ? ' completed' : ''}`}
    >
      <p>{props.task.item}</p>
    </div>
  )
}

export default Todo;