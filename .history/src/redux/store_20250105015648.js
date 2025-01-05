import { configureStore } from '@reduxjs/toolkit'
import { counterReducer } from './counter/slice'
import { rtkApi } from '@/api/rtkApi'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    [rtkApi.re]
  },

  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware().concat(rtkApi.middleware)
})