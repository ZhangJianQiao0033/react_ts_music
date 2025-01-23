import React, { memo } from 'react'
import type { ReactNode, FC } from 'react'
import { RankingWrapper } from './styled'
import AreaHeaderV1 from '@/components/area-header-v1'
import { ShallowEqualApp, useAppSelector } from '@/store'
import TopRankingItem from '../hot-recommend/top-ranking-item'

interface IProps {
  children?: ReactNode
}

const TopRanking: FC<IProps> = () => {
  const { rankings } = useAppSelector(
    (state) => ({
      rankings: state.recommend.rankings
    }),
    ShallowEqualApp
  )
  return (
    <RankingWrapper>
      <AreaHeaderV1 title="榜单" />
      <div className="content">
        {rankings.map((item) => {
          return <TopRankingItem key={item.id} itemData={item} />
        })}
      </div>
    </RankingWrapper>
  )
}

export default memo(TopRanking)
