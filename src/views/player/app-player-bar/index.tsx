import React, { memo, useEffect, useRef, useState } from 'react'
import type { ReactNode, FC } from 'react'
import { Slider } from 'antd'

import {
  BarControl,
  BarOperator,
  BarPlayerInfo,
  PlayerBarWrapper
} from './style'
import { Link } from 'react-router-dom'
import { ShallowEqualApp, useAppSelector } from '@/store'
import { getImageSize } from '@/utils/format'
import { getSongPlayUrl } from '@/utils/handle-player'

interface IProps {
  children?: ReactNode
}

const AppPlayerBar: FC<IProps> = () => {
  const [isPlaying, setIsPlaying] = useState(false)
  const [progress, setProgress] = useState(0)
  const [duration, setDuration] = useState(0)
  const { currentSong } = useAppSelector(
    (state) => ({
      currentSong: state.play.currentSong
    }),
    ShallowEqualApp
  )

  const audioRef = useRef<HTMLAudioElement>(null)

  useEffect(() => {
    audioRef.current!.src = getSongPlayUrl(currentSong.id)
    audioRef.current
      ?.play()
      .then((res) => {
        setIsPlaying(true)
        console.log('歌曲播放成功')
      })
      .catch((err) => {
        setIsPlaying(false)
        console.log('歌曲播放失败')
      })
    setDuration(currentSong.dt)
  }, [currentSong])
  function handlePlayClick() {
    isPlaying
      ? audioRef.current?.pause()
      : audioRef.current?.play().catch((err) => {
          console.log(err)
          setIsPlaying(false)
        })
    setIsPlaying(!isPlaying)
  }

  function handleTimeUpdate() {
    console.log()
    const newProgress =
      (audioRef.current!.currentTime / (duration / 1000)) * 100
    setProgress(newProgress)
    console.log(progress)
  }
  return (
    <PlayerBarWrapper className="sprite_playbar">
      <div className="content wrap-v2">
        <BarControl $isPlaying={isPlaying}>
          <button className="btn sprite_playbar prev"></button>
          <button
            className="btn sprite_playbar play"
            onClick={handlePlayClick}
          ></button>
          <button className="btn sprite_playbar next"></button>
        </BarControl>
        <BarPlayerInfo>
          <Link to="/player">
            <img src={getImageSize(currentSong.al.picUrl, 34)} alt="" />
          </Link>
          <div className="info">
            <div className="song">
              <span className="song-name">{currentSong.name}</span>
              <span className="singer-name">{currentSong.ar[0].name}</span>
            </div>
            <div className="progress">
              <Slider
                step={0.5}
                tooltip={{ formatter: null }}
                value={progress}
              />
              <div className="time">
                <span className="current">00:00</span>
                <span className="divider">/</span>
                <span className="duration">04:45</span>
              </div>
            </div>
          </div>
        </BarPlayerInfo>
        <BarOperator>
          <div className="left">
            <button className="btn pip"></button>
            <button className="btn sprite_playbar favor"></button>
            <button className="btn sprite_playbar share"></button>
          </div>
          <div className="right sprite_playbar">
            <button className="btn sprite_playbar volume"></button>
            <button className="btn sprite_playbar loop"></button>
            <button className="btn sprite_playbar playlist"></button>
          </div>
        </BarOperator>
      </div>
      <audio ref={audioRef} onTimeUpdate={handleTimeUpdate} />
    </PlayerBarWrapper>
  )
}

export default memo(AppPlayerBar)
