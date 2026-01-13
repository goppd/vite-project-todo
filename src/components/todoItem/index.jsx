import React from 'react'
import { useDispatch } from 'react-redux'
import { toggleTodo, deleteTodo } from '../../redux/slices/todoSlice'

const TodoItem = ({ todo, index }) => {
  const dispatch = useDispatch()

  return (
    <li>
      <span
        style={{
          textDecoration: todo.completed ? 'line-through' : 'none',
        }}
      >
        {index + 1}. {todo.title}
      </span>
      <button onClick={() => dispatch(toggleTodo(todo.id))}>
        {todo.completed ? 'Undo' : 'Complete'}
      </button>
      <button onClick={() => dispatch(deleteTodo(todo.id))}>Delete</button>
    </li>
  )
}
export default TodoItem
