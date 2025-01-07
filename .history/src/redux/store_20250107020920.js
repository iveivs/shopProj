import { configureStore } from '@reduxjs/toolkit'
import { counterReducer } from './counter/slice'
import { rtkApi } from '@/api/rtkApi'
import { pizzasReducer } from './pizzas/slice/pizzasSlice'
import { rollsReducer } from './rolls/slice/rollsSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    pizzas: pizzasReducer,
    rolls: rollsReducer,
    others: 
    [rtkApi.reducerPath]: rtkApi.reducer,
  },

  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware().concat(rtkApi.middleware)
})