import React, { memo, Suspense } from 'react'
import type { ReactNode, FC } from 'react'
import { Outlet } from 'react-router-dom'

import DiscoverWrapper from './style'
import NavBar from './c-cpns/nav-bar'
interface IProps {
  children?: ReactNode
}

const Discover: FC<IProps> = () => {
  return (
    <DiscoverWrapper>
      <NavBar />
      <Suspense fallback="">
        <Outlet />
      </Suspense>
    </DiscoverWrapper>
  )
}

export default memo(Discover)
