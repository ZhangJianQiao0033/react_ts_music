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
