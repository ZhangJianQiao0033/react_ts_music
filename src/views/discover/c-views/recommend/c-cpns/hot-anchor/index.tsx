import React, { memo } from 'react'
import type { ReactNode, FC } from 'react'
import { HotAnchorWrapper } from './style'
import AreaHeaderV2 from '@/components/area-header-v2'
import { hotRadios } from '@/assets/data/local_data'
import { getImageSize } from '@/utils/format'

interface IProps {
  children?: ReactNode
}

const HotAnchor: FC<IProps> = () => {
  return (
    <HotAnchorWrapper>
      <AreaHeaderV2 title="热门主播" />
      <div className="radio">
        {hotRadios.map((item, index) => {
          return (
            <a href="#" className="item" key={index}>
              <img src={getImageSize(item.picUrl, 40)} alt="" />
              <div className="info">
                <div className="name">{item.name}</div>
                <div className="position">{item.position}</div>
              </div>
            </a>
          )
        })}
      </div>
    </HotAnchorWrapper>
  )
}

export default memo(HotAnchor)
