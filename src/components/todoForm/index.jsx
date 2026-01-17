import React, { useState } from 'react'
import { addTodo } from '../../redux/slices/todoSlice'
import { useDispatch } from 'react-redux'
import { Input, Button } from 'antd'

function TodoForm() {
  const dispatch = useDispatch()
  const [text, setText] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    dispatch(
      addTodo({ id: Date.now().toString(), title: text, completed: false }),
    )
    setText('')
  }

  return (
    <div style={{ width: '100%' }}>
      <Input
        placeholder="Enter new todo"
        value={text}
        onChange={(e) => setText(e.target.value)}
        size="large"
        style={{ width: '100%', marginBottom: 12 }} // 🔥 НА ВСЮ ШИРИНУ
      />
      <Button
        type="primary"
        block
        style={{ backgroundColor: '#2db742', borderColor: '#2db742' }}
        onClick={handleSubmit}
      >
        Add Todo
      </Button>
    </div>
  )
}

export default TodoForm
