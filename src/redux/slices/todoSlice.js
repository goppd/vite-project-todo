import { createSlice } from '@reduxjs/toolkit'

const todoSlice = createSlice({
  name: 'todo',
  initialState: {
    data: [],
  },
  reducers: {
    addTodo: (state, action) => {
      state.data.push({ id: Math.random(), ...action.payload })
    },
  },
})

export const { addTodo } = todoSlice.actions
export default todoSlice.reducer
