import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import {
  getArtistList,
  getBanners,
  getNewAlbum,
  getPlaylistDetail,
  getRecommend
} from '../service/recommend'

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
    getArtistList(5).then((res) => {
      dispatch(changeArtistsAction(res.artists))
    })
  }
)
const rankingIds = [19723756, 3779629, 2884035]
export const fetchRankingsDataAction = createAsyncThunk(
  'rankings',
  (_, { dispatch }) => {
    const promises: Promise<any>[] = []
    for (const id of rankingIds) {
      promises.push(getPlaylistDetail(id))
    }
    Promise.all(promises).then((res) => {
      const playlists = res.map((item) => item.playlist)
      dispatch(changeRankingsAction(playlists))
    })
  }
)
interface IRecommendState {
  banners: any[]
  hotRecommends: any[]
  newAlbums: any[]
  rankings: any[]
  artists: any[]
}
const initialState: IRecommendState = {
  banners: [],
  hotRecommends: [],
  newAlbums: [],
  rankings: [],
  artists: []
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
    },
    changeRankingsAction(state, { payload }) {
      state.rankings = payload
    },
    changeArtistsAction(state, { payload }) {
      state.artists = payload
    }
  }
})
export const {
  changeBannersAction,
  changeRecommendsAction,
  changeNewAlbumsAction,
  changeRankingsAction,
  changeArtistsAction
} = recommendSlice.actions
export default recommendSlice.reducer
