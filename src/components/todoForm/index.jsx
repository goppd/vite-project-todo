import React, { useState } from 'react'
import { addTodo } from '../../redux/slices/todoSlice'
import { useDispatch } from 'react-redux'

function TodoForm() {
  const dispatch = useDispatch()
  const [text, setText] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    dispatch(
      addTodo({ id: Date.now().toString(), title: text, completed: false })
    )
    setText('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        placeholder="Enter new todo"
        value={text}
        onChange={(event) => setText(event.target.value)}
      />
      <button type="submit">Add Todo</button>
    </form>
  )
}

export default TodoForm
