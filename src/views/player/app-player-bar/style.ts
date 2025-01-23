import styled from 'styled-components'

export const PlayerBarWrapper = styled.div`
  position: fixed;
  z-index: 99;
  left: 0;
  right: 0;
  bottom: 0;
  height: 52px;
  background-position: 0 0;
  background-repeat: repeat-x;

  .content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: 0;
    height: 47px;
  }
`
export const BarControl = styled.div`
  display: flex;
  align-items: center;
  .prev,
  .next {
    width: 28px;
    height: 28px;
  }

  .prev {
    background-position: 0 -130px;
  }
  .next {
    background-position: -80px -130px;
  }

  .play {
    width: 36px;
    height: 36px;
    margin: 0 8px;
    background-position: 0 -204px;
  }
`

export const BarPlayerInfo = styled.div`
  display: flex;
  width: 642px;
  align-items: center;

  .info {
    flex: 1;
    color: #a1a1a1;
    margin-left: 10px;

    .song {
      color: #e1e1e1;
      position: relative;
      top: 8px;
      left: 8px;

      .singer-name {
        color: #a1a1a1;
        margin-left: 10px;
      }
    }
    .progress {
      display: flex;
      align-items: center;
      .ant-slider {
        position: relative;
        top: -3px;
        width: 493px;
        margin-right: 10px;
        .ant-slider-rail {
          height: 9px;
          background: url(${require('@/assets/img/progress_bar.png')}) right 0;
        }
        .ant-slider-track {
          height: 9px;
          background: url(${require('@/assets/img/progress_bar.png')}) left -66px;
        }
        .ant-slider-handle {
          width: 22px;
          height: 24px;
          border: none;
          margin-top: -3px;
          background: url(${require('@/assets/img/sprite_icon.png')}) 0 -250px;

          &::before,
          &::after {
            display: none;
          }
        }
      }
    }
  }
`

export const BarOperator = styled.div``
