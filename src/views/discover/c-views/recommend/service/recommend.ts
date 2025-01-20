import hyRequest from '@/service'

export function getBanners() {
  return hyRequest.request({
    url: '/banner'
  })
}
