interface Lyric {
  time: string // 时间（毫秒）
  text: string // 歌词文本
}

export function parseLyrics(lyricText: string): Lyric[] {
  const lines = lyricText.split('\n') // 分割每一行歌词
  const lyrics: Lyric[] = []

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim()

    if (!line) continue // 跳过空行

    // 更新正则表达式，支持 2 或 3 位数的毫秒
    const match = line.match(/\[([0-9]{2}):([0-9]{2})\.([0-9]{2,3})\](.*)/)
    if (match) {
      const minutes = parseInt(match[1], 10)
      const seconds = parseInt(match[2], 10)
      let milliseconds = parseInt(match[3], 10)

      // 如果毫秒部分是两位数，应该乘以 10
      if (milliseconds < 100) {
        milliseconds *= 10
      }

      const text = match[4].trim()

      // 计算时间转换为毫秒
      const timeInMs = (minutes * 60 + seconds) * 1000 + milliseconds

      lyrics.push({
        time: timeInMs.toString(),
        text
      })
    }
  }

  return lyrics
}
