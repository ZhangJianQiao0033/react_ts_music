import styled from 'styled-components'

export const BannerWrapper = styled.div`
  .banner {
    height: 270px;
    display: flex;
    position: relative;
  }
`

export const BannerLeft = styled.div`
  width: 730px;
  position: relative;
  .banner-item {
    height: 270px;
    overflow: hidden;
    img {
      width: 100%;
    }
  }
  .dots {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0px;
    display: flex;
    justify-content: center;
    > li {
      margin: 0 2px;
      .item {
        display: inline-block;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background: url(${require('@/assets/img/banner_sprite.png')}) 3px -343px;
        cursor: pointer;

        &:hover,
        &.active {
          background-position: -16px -343px;
        }
      }
    }
  }
`
export const BannerRight = styled.a.attrs({
  href: 'https://music.163.com/#/download',
  target: '_blank'
})`
  width: 254px;
  height: 270px;
  background: url(${require('@/assets/img/download.png')});
`
export const ControlButton = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  height: 63px;
  transform: translateY(-50%);

  .btn {
    position: absolute;
    width: 37px;
    height: 63px;
    background-image: url(${require('@/assets/img/banner_sprite.png')});
    background-color: transparent;
    cursor: pointer;

    &:hover {
      background-color: rgba(0, 0, 0, 0.1);
    }
  }
  .left {
    background-position: 0 -360px;
    left: -68px;
  }

  .right {
    background-position: 0 -508px;
    right: -68px;
  }
`
