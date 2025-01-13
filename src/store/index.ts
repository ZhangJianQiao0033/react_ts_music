import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './modules/counter'
import { TypedUseSelectorHook, useSelector } from 'react-redux'
const store = configureStore({
  reducer: {
    counter: counterReducer
  }
})
type GetStateFnTyPE = typeof store.getState
type IRootState = ReturnType<GetStateFnTyPE>
export const useAppSelector: TypedUseSelectorHook<IRootState> = useSelector
export default store
