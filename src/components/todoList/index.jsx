import React from 'react'
import { useSelector } from 'react-redux'
import TodoItem from '../todoItem'
import { List, Card, Typography } from 'antd'

const { Title } = Typography
const TodoList = () => {
  const todos = useSelector((state) => state.todos.data)
  if (todos.length === 0) {
    return (
      <div
        style={{
          marginTop: 32,
          textAlign: 'center',
        }}
      >
        <Typography.Text type="secondary">Список пуст</Typography.Text>
      </div>
    )
  }

  return (
    <Card style={{ marginTop: 32 }}>
      <Typography.Title level={3} style={{ textAlign: 'center' }}>
        Todo List
      </Typography.Title>

      <List
        dataSource={todos}
        renderItem={(todo, index) => (
          <List.Item>
            <TodoItem todo={todo} index={index} />
          </List.Item>
        )}
      />
    </Card>

    // <Card title="Todo List" style={{ marginTop: 24 }}>
    //   <List
    //     dataSource={todos}
    //     renderItem={(todo) => (
    //       <List.Item>
    //         {todos.map((todo, index) => (
    //           <TodoItem key={todo.id} todo={todo} index={index} />
    //         ))}
    //       </List.Item>
    //     )}
    //   />
    // </Card>

    // <div>
    //   <h1>Todo List</h1>
    //   <ul>
    //     {todos.map((todo, index) => (
    //       <TodoItem key={todo.id} todo={todo} index={index} />
    //     ))}
    //   </ul>
    // </div>
  )
}
export default TodoList
