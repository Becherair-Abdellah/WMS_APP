import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  operation: false,
  id:0,
}

export const SetTools = createSlice({
  name: 'set_tools',
  initialState,
  reducers: {
    change_operation_true: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.operation = true;
    },
    change_operation_false: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.operation = true;
    },
  },
})

// Action creators are generated for each case reducer function
export const { change_operation_true,change_operation_false} = SetTools.actions

export default SetTools.reducer