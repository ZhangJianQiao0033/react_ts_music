import hyRequest from '@/service'
import React, { memo, useEffect, useState } from 'react'
import type { ReactNode, FC } from 'react'

interface IProps {
  children?: ReactNode
}

const Recommend: FC<IProps> = () => {
  const [banners, setBanners] = useState<any[]>([])
  useEffect(() => {
    hyRequest
      .request({
        url: '/banner'
      })
      .then((res) => {
        setBanners(res.banners)
      })
  }, [])
  return (
    <div>
      <h2>recommend</h2>
      {banners.map((item, index) => {
        return <div key={item.imageUrl}>{item.imageUrl}</div>
      })}
    </div>
  )
}

export default memo(Recommend)
