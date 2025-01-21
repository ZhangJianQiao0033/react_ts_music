import styled from 'styled-components'

export const MenuItemWrapper = styled.div`
  width: 140px;
  margin: 15px 0;
  cursor: pointer;
  .top {
    width: 140px;
    height: 140px;
    position: relative;
    & > img {
      width: 100%;
      height: 100%;
    }

    .cover {
      position: absolute;
      left: 0;
      top: 0;
      right: 0;
      bottom: 0;
      background-position: 0 0;

      .info {
        display: flex;
        align-items: center;
        justify-content: space-between;
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        height: 27px;
        background-position: 0 -537px;
        color: #ccc;

        .left {
          display: flex;
          align-items: center;
          position: relative;

          .headphones {
            display: inline-block;
            margin: 0px 5px 0px 10px;
            width: 14px;
            height: 11px;
            background-position: 0 -24px;
          }
        }

        .right {
          display: flex;
          align-items: center;
          padding-right: 10px;
          position: relative;

          .play {
            display: inline-block;
            width: 16px;
            height: 17px;

            background-position: 0 0;
          }
        }
      }
    }
  }

  .bottom {
    margin: 8px 0 3px;
    font-size: 14px;
    color: #000;

    &:hover {
      text-decoration: underline;
    }
  }
`
