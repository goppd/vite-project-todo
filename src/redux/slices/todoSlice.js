import { createSlice } from '@reduxjs/toolkit'

const todoSlice = createSlice({
  name: 'todos',
  initialState: {
    data: [],
  },
  reducers: {
    addTodo: (state, action) => {
      state.data.push({ id: Math.random(), ...action.payload })
    },
    toggleTodo: (state, action) => {
      const todo = state.data.find((todo) => todo.id === action.payload)
      if (todo) {
        todo.completed = !todo.completed
      }
    },
    deleteTodo: (state, action) => {
      state.data = state.data.filter((todo) => todo.id !== action.payload)
    },
  },
})

export const { addTodo, toggleTodo, deleteTodo } = todoSlice.actions
export default todoSlice.reducer
