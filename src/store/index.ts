import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './modules/counter'
import {
  shallowEqual,
  TypedUseSelectorHook,
  useDispatch,
  useSelector
} from 'react-redux'
const store = configureStore({
  reducer: {
    counter: counterReducer
  }
})
type GetStateFnTyPE = typeof store.getState
type IRootState = ReturnType<GetStateFnTyPE>
type IDispatch = typeof store.dispatch
export const useAppSelector: TypedUseSelectorHook<IRootState> = useSelector
export const useAppDispatch: () => IDispatch = useDispatch
export const ShallowEqualApp = shallowEqual
export default store
