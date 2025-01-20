import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getBanners } from '../service/recommend'

export const fetchBannerDataAction = createAsyncThunk(
  'recommend',
  async (args, { dispatch }) => {
    const result = await getBanners()
    dispatch(changeBannersAction(result.banners))
    console.log(result)
  }
)
interface IRecommendState {
  banners: any[]
}
const initialState: IRecommendState = {
  banners: []
}
const recommendSlice = createSlice({
  name: 'recommend',
  initialState,
  reducers: {
    changeBannersAction(state, { payload }) {
      state.banners = payload
    }
  }
})
export const { changeBannersAction } = recommendSlice.actions
export default recommendSlice.reducer
