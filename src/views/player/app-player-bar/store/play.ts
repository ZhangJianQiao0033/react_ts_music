import { createAsyncThunk, createSlice, current } from '@reduxjs/toolkit'
import { getSongDetail, getSongLyric } from '../../service/player'
import { parseLyrics } from '@/utils/parseLyrics'
import { IRootState } from '@/store'

interface IThunkState {
  state: IRootState
}

interface IPlayer {
  currentSong: any
  lyrics: any[]
  lyricIndex: number
  playMode: number
  playList: any[]
  playSongIndex: number
}
const initialState: IPlayer = {
  currentSong: {},
  lyrics: [],
  lyricIndex: -1,
  playMode: 0, // 0顺序播放 1 随机播放 2 循环播放 //
  playSongIndex: -1,
  playList: [
    {
      name: '给你寄的信',
      id: 2667771565,
      pst: 0,
      t: 0,
      ar: [
        {
          id: 55418802,
          name: '小潮院长',
          tns: [],
          alias: []
        },
        {
          id: 96833535,
          name: '杜海皇',
          tns: [],
          alias: []
        },
        {
          id: 96832845,
          name: '小杨Johnson',
          tns: [],
          alias: []
        }
      ],
      alia: [],
      pop: 5,
      st: 0,
      rt: '',
      fee: 8,
      v: 4,
      crbt: null,
      cf: '',
      al: {
        id: 260269348,
        name: '给你寄的信',
        picUrl:
          'https://p1.music.126.net/THVW4JysWTyNDDJKxsWm6A==/109951170407132097.jpg',
        tns: [],
        pic_str: '109951170407132097',
        pic: 109951170407132100
      },
      dt: 219187,
      h: {
        br: 320000,
        fid: 0,
        size: 8769645,
        vd: -45140,
        sr: 48000
      },
      m: {
        br: 192000,
        fid: 0,
        size: 5261805,
        vd: -42534,
        sr: 48000
      },
      l: {
        br: 128000,
        fid: 0,
        size: 3507885,
        vd: -40839,
        sr: 48000
      },
      sq: {
        br: 844379,
        fid: 0,
        size: 23138707,
        vd: -45134,
        sr: 48000
      },
      hr: {
        br: 1610257,
        fid: 0,
        size: 44122578,
        vd: -45134,
        sr: 48000
      },
      a: null,
      cd: '01',
      no: 1,
      rtUrl: null,
      ftype: 0,
      rtUrls: [],
      djId: 0,
      copyright: 0,
      s_id: 0,
      mark: 17716748288,
      originCoverType: 0,
      originSongSimpleData: null,
      tagPicList: null,
      resourceState: true,
      version: 4,
      songJumpInfo: null,
      entertainmentTags: null,
      awardTags: null,
      displayTags: null,
      single: 0,
      noCopyrightRcmd: null,
      mv: 0,
      rtype: 0,
      rurl: null,
      mst: 9,
      cp: 0,
      publishTime: 0
    },
    {
      name: '芳华',
      id: 2666929082,
      pst: 0,
      t: 0,
      ar: [
        {
          id: 36562889,
          name: '吴垚滔',
          tns: [],
          alias: []
        }
      ],
      alia: [],
      pop: 100,
      st: 0,
      rt: '',
      fee: 8,
      v: 4,
      crbt: null,
      cf: '',
      al: {
        id: 260017977,
        name: '芳华',
        picUrl:
          'https://p1.music.126.net/t6m_xDDuCJChMVUYDJbr6Q==/109951170386973300.jpg',
        tns: [],
        pic_str: '109951170386973300',
        pic: 109951170386973300
      },
      dt: 228660,
      h: {
        br: 320000,
        fid: 0,
        size: 9149170,
        vd: -45801,
        sr: 44100
      },
      m: {
        br: 192000,
        fid: 0,
        size: 5489520,
        vd: -43220,
        sr: 44100
      },
      l: {
        br: 128000,
        fid: 0,
        size: 3659694,
        vd: -41702,
        sr: 44100
      },
      sq: {
        br: 916552,
        fid: 0,
        size: 26201589,
        vd: -45789,
        sr: 44100
      },
      hr: null,
      a: null,
      cd: '01',
      no: 1,
      rtUrl: null,
      ftype: 0,
      rtUrls: [],
      djId: 0,
      copyright: 0,
      s_id: 0,
      mark: 17179877376,
      originCoverType: 0,
      originSongSimpleData: null,
      tagPicList: null,
      resourceState: true,
      version: 4,
      songJumpInfo: null,
      entertainmentTags: null,
      awardTags: null,
      displayTags: null,
      single: 0,
      noCopyrightRcmd: null,
      mv: 0,
      rtype: 0,
      rurl: null,
      mst: 9,
      cp: 0,
      publishTime: 0
    },
    {
      name: '仅此',
      id: 2666252919,
      pst: 0,
      t: 0,
      ar: [
        {
          id: 48636616,
          name: '谢昊桦',
          tns: [],
          alias: []
        },
        {
          id: 33150967,
          name: '李梓鑫',
          tns: [],
          alias: []
        }
      ],
      alia: ['2025冬日纪念曲'],
      pop: 55,
      st: 0,
      rt: '',
      fee: 8,
      v: 4,
      crbt: null,
      cf: '',
      al: {
        id: 259765230,
        name: '仅此',
        picUrl:
          'https://p2.music.126.net/yY5wnTy3oQ-mPD96wwMEEw==/109951170379485416.jpg',
        tns: [],
        pic_str: '109951170379485416',
        pic: 109951170379485400
      },
      dt: 192854,
      h: {
        br: 320000,
        fid: 0,
        size: 7716525,
        vd: -40963,
        sr: 48000
      },
      m: {
        br: 192000,
        fid: 0,
        size: 4629933,
        vd: -38373,
        sr: 48000
      },
      l: {
        br: 128000,
        fid: 0,
        size: 3086637,
        vd: -36800,
        sr: 48000
      },
      sq: {
        br: 938252,
        fid: 0,
        size: 22621782,
        vd: -40954,
        sr: 48000
      },
      hr: {
        br: 1708297,
        fid: 0,
        size: 41185100,
        vd: -40954,
        sr: 48000
      },
      a: null,
      cd: '01',
      no: 1,
      rtUrl: null,
      ftype: 0,
      rtUrls: [],
      djId: 0,
      copyright: 0,
      s_id: 0,
      mark: 536879104,
      originCoverType: 0,
      originSongSimpleData: null,
      tagPicList: null,
      resourceState: true,
      version: 4,
      songJumpInfo: null,
      entertainmentTags: null,
      awardTags: null,
      displayTags: null,
      single: 0,
      noCopyrightRcmd: null,
      mv: 0,
      rtype: 0,
      rurl: null,
      mst: 9,
      cp: 0,
      publishTime: 1737302400000
    }
  ]
}

export const fetchCurrentSongAction = createAsyncThunk<
  void,
  number,
  IThunkState
>('currentSong', (id: number, { dispatch, getState }) => {
  const playList = getState().play.playList
  const findIndex = playList.findIndex((item) => item.id === id)
  if (findIndex === -1) {
    getSongDetail(id).then((res) => {
      if (!res.songs.length) return

      const song = res.songs[0]
      const newPlayList = [...playList]
      newPlayList.push(song)
      dispatch(changeCurrentSongAction(song))
      dispatch(changePlayListAction(newPlayList))
      dispatch(changePlaySongIndexAction(newPlayList.length - 1))
    })
  } else {
    const song = playList[findIndex]
    dispatch(changeCurrentSongAction(song))
    dispatch(changePlaySongIndexAction(findIndex))
  }

  getSongLyric(id).then((res) => {
    const lyrics = parseLyrics(res.lrc.lyric)
    dispatch(changeLyricsAction(lyrics))
  })
})

export const changeMusicAction = createAsyncThunk<void, boolean, IThunkState>(
  'changemuisc',
  (isNext, { dispatch, getState }) => {
    const player = getState().play
    const playList = player.playList
    const playSongIndex = player.playSongIndex
    const playMode = player.playMode

    let newIndex = playSongIndex
    if (playMode === 1) {
      if (playList.length > 1) {
        // 播放列表长度大于1时才进入随机模式
        do {
          newIndex = Math.floor(Math.random() * playList.length)
        } while (newIndex === playSongIndex)
      }
    } else {
      newIndex = isNext ? playSongIndex + 1 : playSongIndex - 1
      if (newIndex > playList.length - 1) newIndex = 0
      if (newIndex < 0) newIndex = playList.length - 1
    }

    const song = playList[newIndex]
    dispatch(changeCurrentSongAction(song))
    dispatch(changePlaySongIndexAction(newIndex))

    getSongLyric(song.id).then((res) => {
      const lyrics = parseLyrics(res.lrc.lyric)
      dispatch(changeLyricsAction(lyrics))
    })
  }
)
const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {
    changeCurrentSongAction(state, { payload }) {
      state.currentSong = payload
    },
    changeLyricsAction(state, { payload }) {
      state.lyrics = payload
    },
    changeLyricIndexAction(state, { payload }) {
      state.lyricIndex = payload
    },
    changePlayModeAction(state, { payload }) {
      state.playMode = payload
    },
    changePlayListAction(state, { payload }) {
      state.playList = payload
    },
    changePlaySongIndexAction(state, { payload }) {
      state.playSongIndex = payload
    }
  }
})
export const {
  changeCurrentSongAction,
  changeLyricsAction,
  changeLyricIndexAction,
  changePlayModeAction,
  changePlayListAction,
  changePlaySongIndexAction
} = playerSlice.actions
export default playerSlice.reducer
