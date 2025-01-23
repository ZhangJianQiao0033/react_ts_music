import React, { memo, useEffect, useState } from 'react'
import type { ReactNode, FC } from 'react'

import {
  fetchRankingsDataAction,
  fetchRecommendDataAction
} from './store/recommend'
import { useAppDispatch } from '@/store'
import TopBanner from './c-cpns/top-banner'
import { RecommendWrapper } from './styled'
import HotRecommend from './c-cpns/hot-recommend'
import NewAlbum from './c-cpns/new-album'
import TopRanking from './c-cpns/top-ranking'
import UserLogin from './c-cpns/user-login'
import SettleSinger from './c-cpns/settle-singer'
import HotAnchor from './c-cpns/hot-anchor'

interface IProps {
  children?: ReactNode
}

const Recommend: FC<IProps> = () => {
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(fetchRecommendDataAction())
    dispatch(fetchRankingsDataAction())
  }, [])
  return (
    <RecommendWrapper>
      <TopBanner />
      <div className="content wrap-v2">
        <div className="left">
          <HotRecommend />
          <NewAlbum />
          <TopRanking />
        </div>
        <div className="right">
          <UserLogin />
          <div className="mediaCreator">
            <SettleSinger />
            <HotAnchor />
          </div>
        </div>
      </div>
    </RecommendWrapper>
  )
}

export default memo(Recommend)
