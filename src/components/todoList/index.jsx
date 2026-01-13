import React from 'react'
import { useSelector } from 'react-redux'
import TodoItem from '../todoItem'

const TodoList = () => {
  const todos = useSelector((state) => state.todos.data)
  if (todos.length === 0) {
    return <p>Список пуст</p>
  }
  return (
    <div>
      <h1>Todo List</h1>
      <ul>
        {todos.map((todo, index) => (
          <TodoItem key={todo.id} todo={todo} index={index} />
        ))}
      </ul>
    </div>
  )
}
export default TodoList
