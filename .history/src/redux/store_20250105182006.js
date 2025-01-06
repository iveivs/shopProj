import { configureStore } from '@reduxjs/toolkit'
import { counterReducer } from './counter/slice'
import { rtkApi } from '@/api/rtkApi'
import { pizzasReducer } from './pizzas/slice/pizzas.Slice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    pizzas: pizzasReducer,
    [rtkApi.reducerPath]: rtkApi.reducer,
  },

  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware().concat(rtkApi.middleware)
})