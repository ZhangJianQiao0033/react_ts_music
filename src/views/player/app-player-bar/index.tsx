import React, { memo } from 'react'
import type { ReactNode, FC } from 'react'
import { Slider } from 'antd'

import { BarControl, BarPlayerInfo, PlayerBarWrapper } from './style'
import { Link } from 'react-router-dom'

interface IProps {
  children?: ReactNode
}

const AppPlayerBar: FC<IProps> = () => {
  return (
    <PlayerBarWrapper className="sprite_playbar">
      <div className="content wrap-v2">
        <BarControl>
          <button className="btn sprite_playbar prev"></button>
          <button className="btn sprite_playbar play"></button>
          <button className="btn sprite_playbar next"></button>
        </BarControl>
        <BarPlayerInfo>
          <Link to="/player">
            <img
              src="https://p1.music.126.net/ddZT48hpITWHv4V0Ed_NnQ==/109951170374093178.jpg?param=34y34"
              alt=""
            />
          </Link>
          <div className="info">
            <div className="song">
              <span className="song-name">成功之都</span>
              <span className="singer-name">ICE杨长青</span>
            </div>
            <div className="progress">
              <Slider step={0.5} tooltip={{ formatter: null }} />
            </div>
          </div>
        </BarPlayerInfo>
      </div>
    </PlayerBarWrapper>
  )
}

export default memo(AppPlayerBar)
