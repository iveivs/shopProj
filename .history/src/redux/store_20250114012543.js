import { configureStore } from '@reduxjs/toolkit'
import { counterReducer } from './counter/slice'
import { rtkApi } from '@/api/rtkApi'
import { pizzasReducer } from './pizzas/slice/pizzasSlice'
import { rollsReducer } from './rolls/slice/rollsSlice'
import { othersReducer } from './others/slice/othersSlice'
import { productReducer } from './productItem/slice/productItemSlice'
import { basketReducer } from './basket/slice/basketSlice'

const persistConfig = {
  key: 'root',
  storage,
}

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    pizzas: pizzasReducer,
    rolls: rollsReducer,
    product: productReducer,
    others: othersReducer,
    basket: basketReducer,
    [rtkApi.reducerPath]: rtkApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(rtkApi.middleware)
})