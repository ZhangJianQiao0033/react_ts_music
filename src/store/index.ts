import { configureStore } from '@reduxjs/toolkit'
import {
  shallowEqual,
  TypedUseSelectorHook,
  useDispatch,
  useSelector
} from 'react-redux'

import recommendReducer from '../views/discover/c-views/recommend/store/recommend'
import playerReducer from '../views/player/app-player-bar/store/play'

const store = configureStore({
  reducer: {
    recommend: recommendReducer,
    play: playerReducer
  }
})
type GetStateFnTyPE = typeof store.getState
type IRootState = ReturnType<GetStateFnTyPE>
type IDispatch = typeof store.dispatch
export const useAppSelector: TypedUseSelectorHook<IRootState> = useSelector
export const useAppDispatch: () => IDispatch = useDispatch
export const ShallowEqualApp = shallowEqual
export default store
