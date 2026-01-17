import './App.css'
import TodoForm from './components/todoForm'
import TodoList from './components/todoList'

function App() {
  return (
    <div
      style={{
        maxWidth: 480,
        margin: '60px auto',
        padding: '0 16px',
      }}
    >
      <TodoForm />
      <TodoList />
    </div>
  )
}
export default App
