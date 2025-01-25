import { createSlice } from '@reduxjs/toolkit'

interface IPlayer {
  currentSong: any
}
const initialState: IPlayer = {
  currentSong: {
    name: '迷路的蒲公英',
    id: 2667977340,
    pst: 0,
    t: 0,
    ar: [
      {
        id: 56675768,
        name: '张秋水',
        tns: [],
        alias: []
      },
      {
        id: 60977837,
        name: '听潮阁',
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
      id: 260346717,
      name: '迷路的蒲公英',
      picUrl:
        'https://p2.music.126.net/LQBHU2ct9yg_HQuyb4A-Yw==/109951170409060791.jpg',
      tns: [],
      pic_str: '109951170409060791',
      pic: 109951170409060780
    },
    dt: 198264,
    h: {
      br: 320000,
      fid: 0,
      size: 7933485,
      vd: -39535,
      sr: 48000
    },
    m: {
      br: 192000,
      fid: 0,
      size: 4760109,
      vd: -36963,
      sr: 48000
    },
    l: {
      br: 128000,
      fid: 0,
      size: 3173421,
      vd: -35254,
      sr: 48000
    },
    sq: {
      br: 922654,
      fid: 0,
      size: 22869823,
      vd: -39526,
      sr: 48000
    },
    hr: {
      br: 1684922,
      fid: 0,
      size: 41761134,
      vd: -39526,
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
    publishTime: 1737475200000
  }
}

const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {}
})
export default playerSlice.reducer
