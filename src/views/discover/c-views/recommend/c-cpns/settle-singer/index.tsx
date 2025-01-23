import React, { memo } from 'react'
import type { ReactNode, FC } from 'react'

import { SettleSingerWrapper } from './style'
import AreaHeaderV2 from '@/components/area-header-v2'
import { ShallowEqualApp, useAppSelector } from '@/store'
import { getImageSize } from '@/utils/format'

interface IProps {
  children?: ReactNode
}

const SettleSinger: FC<IProps> = () => {
  const { artists } = useAppSelector(
    (state) => ({
      artists: state.recommend.artists
    }),
    ShallowEqualApp
  )
  return (
    <SettleSingerWrapper>
      <AreaHeaderV2 title="入驻歌手" moreText="查看全部 >" />
      <div className="artists">
        {artists.map((item, index) => {
          return (
            <a href="/discover/artist" className="item" key={index}>
              <img src={getImageSize(item.img1v1Url, 62)} alt="" />
              <div className="info">
                <div className="name">{item.name}</div>
                <div className="alia">{item.alias.join(' ')}</div>
              </div>
            </a>
          )
        })}
      </div>
      <div className="apply-for">
        <a href="#/">申请成为网易音乐人</a>
      </div>
    </SettleSingerWrapper>
  )
}

export default memo(SettleSinger)
