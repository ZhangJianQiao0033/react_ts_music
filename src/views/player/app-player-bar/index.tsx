import React, { memo, useEffect, useRef, useState } from 'react'
import type { ReactNode, FC } from 'react'
import { Slider, message } from 'antd'

import {
  BarControl,
  BarOperator,
  BarPlayerInfo,
  PlayerBarWrapper
} from './style'
import { Link } from 'react-router-dom'
import { ShallowEqualApp, useAppDispatch, useAppSelector } from '@/store'
import { formatTime, getImageSize } from '@/utils/format'
import { getSongPlayUrl } from '@/utils/handle-player'
import {
  changeLyricIndexAction,
  changeMusicAction,
  changePlayModeAction
} from './store/play'

interface IProps {
  children?: ReactNode
}

const AppPlayerBar: FC<IProps> = () => {
  const [isPlaying, setIsPlaying] = useState(false)
  const [progress, setProgress] = useState(0)
  const [duration, setDuration] = useState(0)
  const [currentTime, setCurrentTime] = useState(0)
  const [isSliding, setIsSliding] = useState(false)
  const { currentSong, lyrics, lyricIndex, playMode } = useAppSelector(
    (state) => ({
      currentSong: state.play.currentSong,
      lyrics: state.play.lyrics,
      lyricIndex: state.play.lyricIndex,
      playMode: state.play.playMode
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
  function handleTimeEnded() {
    if (playMode === 2) {
      audioRef.current!.currentTime = 0
      audioRef.current!.play()
    } else {
      handleChangeMusic(true)
    }
  }
  function handleChangeMusic(isNext = true) {
    dispatch(changeMusicAction(isNext))
  }

  function handleChangePlayMode() {
    let newPlayMode = playMode + 1

    if (newPlayMode > 2) newPlayMode = 0

    dispatch(changePlayModeAction(newPlayMode))
  }

  function handlePlayClick() {
    isPlaying
      ? audioRef.current?.pause()
      : audioRef.current?.play().catch((err) => {
          console.log(err)
          setIsPlaying(false)
        })
    setIsPlaying(!isPlaying)
  }
  const dispatch = useAppDispatch()
  function handleTimeUpdate() {
    const currentTime = audioRef.current!.currentTime * 1000
    const newProgress = (currentTime / duration) * 100
    if (!isSliding) {
      setProgress(newProgress)
      setCurrentTime(currentTime)
    }
    let index = lyrics.length - 1
    for (let i = 0; i < lyrics.length; i++) {
      const lyric = lyrics[i]

      if (lyric.time > currentTime) {
        index = i - 1
        break
      }
    }
    if (lyricIndex === index || index === -1) return
    dispatch(changeLyricIndexAction(index))
    message.open({
      key: 'lyric',
      content: lyrics[index].text,
      duration: 0,
      style: {
        // position: 'fixed',
        // top: '50px'
      }
    })
  }

  function handleSliderChanged(value: number) {
    setIsSliding(true)
    const currentTime = (value / 100) * duration
    setCurrentTime(currentTime)
    setProgress(value)
  }

  function handleSliderChangeComplete() {
    const newCurrentTime = (progress / 100) * duration
    audioRef.current!.currentTime = newCurrentTime / 1000
    setIsSliding(false)
  }

  return (
    <PlayerBarWrapper className="sprite_playbar">
      <div className="content wrap-v2">
        <BarControl $isPlaying={isPlaying}>
          <button
            className="btn sprite_playbar prev"
            onClick={() => handleChangeMusic(false)}
          ></button>
          <button
            className="btn sprite_playbar play"
            onClick={handlePlayClick}
          ></button>
          <button
            className="btn sprite_playbar next"
            onClick={() => handleChangeMusic()}
          ></button>
        </BarControl>
        <BarPlayerInfo>
          <Link to="/player">
            <img src={getImageSize(currentSong?.al?.picUrl, 34)} alt="" />
          </Link>
          <div className="info">
            <div className="song">
              <span className="song-name">{currentSong.name}</span>
              <span className="singer-name">{currentSong.ar?.[0]?.name}</span>
            </div>
            <div className="progress">
              <Slider
                step={0.5}
                tooltip={{ formatter: null }}
                value={progress}
                onChange={handleSliderChanged}
                onChangeComplete={handleSliderChangeComplete}
              />
              <div className="time">
                <span className="current">{formatTime(currentTime)}</span>
                <span className="divider">/</span>
                <span className="duration">{formatTime(duration)}</span>
              </div>
            </div>
          </div>
        </BarPlayerInfo>
        <BarOperator $playMode={playMode}>
          <div className="left">
            <button className="btn pip"></button>
            <button className="btn sprite_playbar favor"></button>
            <button className="btn sprite_playbar share"></button>
          </div>
          <div className="right sprite_playbar">
            <button className="btn sprite_playbar volume"></button>
            <button
              className="btn sprite_playbar loop"
              onClick={handleChangePlayMode}
            ></button>
            <button className="btn sprite_playbar playlist"></button>
          </div>
        </BarOperator>
      </div>
      <audio
        ref={audioRef}
        onTimeUpdate={handleTimeUpdate}
        onEnded={handleTimeEnded}
      />
    </PlayerBarWrapper>
  )
}

export default memo(AppPlayerBar)
