import hyRequest from '@/service'

export function getSongDetail(ids: number) {
  return hyRequest.request({
    url: '/song/detail',
    params: {
      ids
    }
  })
}

export function getSongLyric(id: number) {
  return hyRequest.request({
    url: '/lyric',
    params: {
      id
    }
  })
}
