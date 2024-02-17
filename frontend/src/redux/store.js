import { configureStore } from '@reduxjs/toolkit'
import SetTools from './reducers'
export const store = configureStore({
  reducer: {
    set_tools: SetTools,
  },
})