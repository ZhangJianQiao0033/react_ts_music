import React, { memo } from 'react'
import type { ReactNode, FC } from 'react'

import { MenuItemWrapper } from './styled'
import { formatNumber, getImageSize } from '@/utils/format'

interface IProps {
  children?: ReactNode
  itemData: any
}

const SongMenuItem: FC<IProps> = (props) => {
  const { itemData } = props
  return (
    <MenuItemWrapper>
      <div className="top">
        <img src={getImageSize(itemData.picUrl, 140)} alt="" />
        <div className="sprite_cover cover ">
          <div className="sprite_cover info">
            <div className="left">
              <i className="sprite_icon headphones"></i>
              <span className="count">
                {formatNumber(itemData.playCount)}万
              </span>
            </div>
            <div className="right">
              <i className="sprite_icon play"></i>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom">{itemData.name}</div>
    </MenuItemWrapper>
  )
}

export default memo(SongMenuItem)
