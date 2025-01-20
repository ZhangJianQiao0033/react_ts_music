import React, { memo, useEffect, useState } from 'react'
import type { ReactNode, FC } from 'react'

import { fetchBannerDataAction } from './store/recommend'
import { useAppDispatch } from '@/store'
import TopBanner from './c-cpns/top-banner'

interface IProps {
  children?: ReactNode
}

const Recommend: FC<IProps> = () => {
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(fetchBannerDataAction())
  }, [])
  return (
    <div>
      <TopBanner />
      <h2>recommend</h2>
    </div>
  )
}

export default memo(Recommend)
