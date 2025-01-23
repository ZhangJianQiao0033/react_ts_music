import hyRequest from '@/service'

export function getBanners() {
  return hyRequest.request({
    url: '/banner'
  })
}

export function getRecommend(limit = 30) {
  return hyRequest.request({
    url: '/personalized',
    params: {
      limit
    }
  })
}

export function getNewAlbum() {
  return hyRequest.request({
    url: '/album/newest'
  })
}

export function getPlaylistDetail(id: number) {
  return hyRequest.request({
    url: '/playlist/detail',
    params: {
      id
    }
  })
}
export function getArtistList(limit = 30) {
  return hyRequest.request({
    url: '/artist/list',
    params: {
      limit
    }
  })
}
