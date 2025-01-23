import React, { memo } from 'react'
import type { ReactNode, FC } from 'react'
import { RankingItemWrapper } from './styled'
import { getImageSize } from '@/utils/format'

interface IProps {
  children?: ReactNode
  itemData: any
}

const TopRankingItem: FC<IProps> = (props) => {
  const { itemData } = props
  return (
    <RankingItemWrapper>
      <div className="header">
        <div className="img">
          <img src={getImageSize(itemData.coverImgUrl, 80)} alt="" />
          <a href="#" className="sprite_cover"></a>
        </div>
        <div className="info">
          <div className="name">{itemData.name}</div>
          <div>
            <a href="#" className="sprite_02 icon play"></a>
            <a href="#" className="sprite_02  icon favor"></a>
          </div>
        </div>
      </div>
      <div className="list">
        {itemData.tracks.slice(0, 10).map((item: any, index: number) => {
          return (
            <div className="list-item" key={index}>
              <div className="index">{index + 1}</div>
              <div className="info">
                <div className="name">{item.name}</div>
                <div className="operator">
                  <button className="btn sprite_02 play"></button>
                  <button className="btn sprite_icon2 add"></button>
                  <button className="btn sprite_02 favor"></button>
                </div>
              </div>
            </div>
          )
        })}
      </div>
      <div className="bottom">
        <a href="#/discover/ranking">查看全部 &gt;</a>
      </div>
    </RankingItemWrapper>
  )
}

export default memo(TopRankingItem)
