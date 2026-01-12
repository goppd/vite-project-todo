import { useState } from 'react'
import { addTodo } from '../../redux/slices/todoSlice'
import { useDispatch } from 'react-redux'

function TodoForm() {
  const dispatch = useDispatch()
  const [todoData, setTodoData] = useState({
    id: '',
    title: '',
    completed: false,
  })

  function handleChange(event) {
    const { name, value } = event.target
    setTodoData({ ...todoData, [name]: value })
  }

  function handleSubmit(event) {
    event.preventDefault()
    dispatch(addTodo(todoData))
    setTodoData({
      id: '',
      title: '',
      completed: false,
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        placeholder="Enter new todo"
        value={todoData.title}
        onChange={(event) => handleChange(event)}
      />
      <button type="submit">Add Todo</button>
    </form>
  )
}

export default TodoForm
