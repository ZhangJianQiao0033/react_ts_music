import { createSlice } from '@reduxjs/toolkit'

const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    count: 100,
    message: 'hello redux'
  },
  reducers: {
    changeMessageAction(state, { payload }) {
      state.count = payload
    }
  }
})
export const { changeMessageAction } = counterSlice.actions
export default counterSlice.reducer
