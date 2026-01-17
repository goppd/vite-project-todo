import React from 'react'
import { useDispatch } from 'react-redux'
import { toggleTodo, deleteTodo } from '../../redux/slices/todoSlice'
import { Button, Space, Typography } from 'antd'

const { Text } = Typography
const TodoItem = ({ todo, index }) => {
  const dispatch = useDispatch()

  return (
    <Space
      style={{
        width: '100%',
        justifyContent: 'space-between',
      }}
    >
      <Text delete={todo.completed}>
        {index + 1}. {todo.title}
      </Text>

      <Space>
        <Button type="primary" onClick={() => dispatch(toggleTodo(todo.id))}>
          {todo.completed ? 'Undo' : 'Complete'}
        </Button>

        <Button
          style={{
            backgroundColor: '#ff4d4f',
            borderColor: '#ff4d4f',
            color: '#fff',
          }}
          onClick={() => dispatch(deleteTodo(todo.id))}
        >
          Delete
        </Button>
      </Space>
    </Space>
  )

  // return (
  //   <li>
  //     <span
  //       style={{
  //         textDecoration: todo.completed ? 'line-through' : 'none',
  //       }}
  //     >
  //       {index + 1}. {todo.title}
  //     </span>
  //     <button onClick={() => dispatch(toggleTodo(todo.id))}>
  //       {todo.completed ? 'Undo' : 'Complete'}
  //     </button>
  //     <button onClick={() => dispatch(deleteTodo(todo.id))}>Delete</button>
  //   </li>
  // )
}
export default TodoItem
