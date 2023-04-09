import { configureStore } from '@reduxjs/toolkit'
import characterReduced from './slice'


export const store = configureStore({
  reducer: {
    character: characterReduced,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
