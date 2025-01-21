import React, { memo } from 'react'
import type { ReactNode, FC } from 'react'

import { HotRecommendWrapper } from './style'
import HeaderV1 from '@/components/area-header-v1'
import { ShallowEqualApp, useAppSelector } from '@/store'
import SongMenuItem from '@/components/SongMenuItem'

interface IProps {
  children?: ReactNode
}

const HotRecommend: FC<IProps> = () => {
  const { hotRecommends } = useAppSelector(
    (state) => ({
      hotRecommends: state.recommend.hotRecommends
    }),
    ShallowEqualApp
  )
  return (
    <HotRecommendWrapper>
      <HeaderV1
        title="热门推荐"
        keywords={['华语', '流行', '摇滚', '民谣', '电子']}
        moreLink="/discover/songs"
      />

      <div className="recommend-list">
        {hotRecommends.map((item, index) => {
          return <SongMenuItem key={index} itemData={item} />
        })}
      </div>
    </HotRecommendWrapper>
  )
}

export default memo(HotRecommend)
