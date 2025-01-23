import React, { memo, useRef } from 'react'
import type { ReactNode, FC, ElementRef } from 'react'
import { Carousel } from 'antd'

import { NewAlbumWrapper } from './styled'
import AreaHeaderV1 from '@/components/area-header-v1'
import { ShallowEqualApp, useAppSelector } from '@/store'
import NewAlbumItem from '@/components/new-album-item'

interface IProps {
  children?: ReactNode
}

const NewAlbum: FC<IProps> = () => {
  const bannerRef = useRef<ElementRef<typeof Carousel>>(null)
  const { newAlbums } = useAppSelector(
    (state) => ({
      newAlbums: state.recommend.newAlbums
    }),
    ShallowEqualApp
  )
  function handlePrevClick() {
    bannerRef.current?.prev()
  }
  function handleNextClick() {
    bannerRef.current?.next()
  }
  return (
    <NewAlbumWrapper>
      <AreaHeaderV1 title="新碟上架" moreLink="/discover/album" />
      <div className="content">
        <button
          className="sprite_02 arrow arrow-left"
          onClick={handlePrevClick}
        ></button>
        <div className="banner">
          <Carousel
            dots={false}
            ref={bannerRef}
            speed={1500}
            slidesToShow={5}
            slidesToScroll={5}
          >
            {newAlbums.slice(0, 10).map((item, index) => {
              return (
                <div key={index}>
                  <NewAlbumItem itemData={item} />
                </div>
              )
            })}
          </Carousel>
        </div>

        <button
          className="sprite_02 arrow arrow-right"
          onClick={handleNextClick}
        ></button>
      </div>
    </NewAlbumWrapper>
  )
}

export default memo(NewAlbum)
