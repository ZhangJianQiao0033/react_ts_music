import React, { memo, useEffect, useRef, useState } from 'react'
import type { ReactNode, FC, ElementRef } from 'react'
import { Carousel } from 'antd'
import classNames from 'classnames'

import { BannerLeft, BannerRight, BannerWrapper, ControlButton } from './style'
import { useAppSelector } from '@/store'
import { shallowEqual } from 'react-redux'

interface IProps {
  children?: ReactNode
}

const TopBanner: FC<IProps> = () => {
  const { banners } = useAppSelector(
    (state) => ({
      banners: state.recommend.banners
    }),
    shallowEqual
  )
  const [currentIndex, setCurrentIndex] = useState(0)
  const [activeDotIndex, setActiveDotIndex] = useState(0)
  const [bgImgUrl, setBgImgUrl] = useState('')
  const bannerRef = useRef<ElementRef<typeof Carousel>>(null)
  const [isAutoPlay, setIsAutoPlay] = useState(true)

  function handlePrevClick() {
    bannerRef.current?.prev()
  }

  function handleNextClick() {
    bannerRef.current?.next()
  }

  function handleBeforeChange(oldIndex: number, newIndex: number) {
    setActiveDotIndex(newIndex)
    setCurrentIndex(newIndex)
  }

  function handleDotClick(index: number) {
    setActiveDotIndex(index)
    setCurrentIndex(index)
    bannerRef.current?.goTo(index) // 使用 goTo 方法
  }

  useEffect(() => {
    let newBgImgUrl = banners[currentIndex]?.imageUrl
    if (newBgImgUrl) {
      newBgImgUrl = newBgImgUrl + '?imageView&blur=40x20'
    }

    setBgImgUrl(newBgImgUrl)
  }, [currentIndex, banners])

  return (
    <BannerWrapper
      style={{
        background: `url('${bgImgUrl}') center center / 6000px`,
        transition: 'background 250ms ease-in-out'
      }}
    >
      <div className="banner wrap-v2">
        <BannerLeft>
          <Carousel
            autoplay={isAutoPlay}
            ref={bannerRef}
            effect="fade"
            beforeChange={handleBeforeChange}
            dots={false}
            autoplaySpeed={4000}
            waitForAnimate={true}
          >
            {banners.map((item, index) => {
              return (
                <div className="banner-item" key={index}>
                  <img src={item.imageUrl} alt={item.typeTitle} />
                </div>
              )
            })}
          </Carousel>

          <ul className="dots">
            {banners.map((item, index) => {
              return (
                <li key={index} onClick={() => handleDotClick(index)}>
                  <span
                    className={classNames('item', {
                      active: index === activeDotIndex
                    })}
                  ></span>
                </li>
              )
            })}
          </ul>
        </BannerLeft>
        <BannerRight></BannerRight>
        <ControlButton>
          <button className="btn left" onClick={handlePrevClick}></button>
          <button className="btn right" onClick={handleNextClick}></button>
        </ControlButton>
      </div>
    </BannerWrapper>
  )
}

export default memo(TopBanner)
