import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import { getBanners, getNewAlbum, getRecommend } from '../service/recommend'

// export const fetchBannerDataAction = createAsyncThunk(
//   'recommend',
//   async (args, { dispatch }) => {
//     const result = await getBanners()
//     dispatch(changeBannersAction(result.banners))
//   }
// )

// export const fetchRecommendDataAction = createAsyncThunk(
//   'hotRecommend',
//   async (args, { dispatch }) => {
//     const result = await getRecommend(8)
//     dispatch(changeRecommendsAction(result.result))
//   }
// )
// export const fetchNewAlbumsDataAction = createAsyncThunk(
//   'newAlbums',
//   async (args, { dispatch }) => {
//     const result = await getNewAlbum()
//     dispatch(changeNewAlbumsAction(result.albums))
//   }
// )

export const fetchRecommendDataAction = createAsyncThunk(
  'fetchdata',
  (_, { dispatch }) => {
    getBanners().then((res) => {
      dispatch(changeBannersAction(res.banners))
    })
    getRecommend(8).then((res) => {
      dispatch(changeRecommendsAction(res.result))
    })
    getNewAlbum().then((res) => {
      dispatch(changeNewAlbumsAction(res.albums))
    })
  }
)
interface IRecommendState {
  banners: any[]
  hotRecommends: any[]
  newAlbums: any[]
}
const initialState: IRecommendState = {
  banners: [],
  hotRecommends: [],
  newAlbums: []
}
const recommendSlice = createSlice({
  name: 'recommend',
  initialState,
  reducers: {
    changeBannersAction(state, { payload }) {
      state.banners = payload
    },

    changeRecommendsAction(state, { payload }) {
      state.hotRecommends = payload
    },
    changeNewAlbumsAction(state, { payload }) {
      state.newAlbums = payload
    }
  }
})
export const {
  changeBannersAction,
  changeRecommendsAction,
  changeNewAlbumsAction
} = recommendSlice.actions
export default recommendSlice.reducer
