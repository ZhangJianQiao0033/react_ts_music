export function formatNumber(number: number) {
  if (typeof number !== 'number') {
    return 'Invalid Input'
  }

  const absNumber = Math.abs(number)
  const wan = 10000
  const shiWan = 10 * wan // 10万

  if (absNumber < shiWan) {
    return Math.round(number).toString()
  } else {
    const result = Math.round(number / wan)
    return result
  }
}
export function getImageSize(
  imageUrl: string,
  width: number,
  height: number = width
) {
  return imageUrl + `?param=${width}x${height}`
}

export function formatTime(time: number) {
  const minutes = Math.floor(time / 1000 / 60) // 获取分钟数
  const seconds = Math.floor((time / 1000) % 60) // 获取秒数

  // 格式化为 00:00 的格式
  return `${minutes.toString().padStart(2, '0')}:${seconds
    .toString()
    .padStart(2, '0')}`
}
