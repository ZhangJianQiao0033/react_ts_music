import styled from 'styled-components'

export const NewAlbumWrapper = styled.div`
  > .content {
    position: relative;
    height: 186px;
    background-color: #f5f5f5;
    border: 1px solid #d3d3d3;
    margin: 20px 0 37px;
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;

    .banner {
      width: 645px;
      flex: 1;
      overflow: hidden;

      .slick-list {
        /* 根据实际情况修改slick-list选择器 */
        overflow: hidden;
      }
    }

    .arrow {
      position: absolute;
      width: 17px;
      height: 17px;
      top: 50%;
      transform: translateY(-50%);
      cursor: pointer;
    }

    .arrow-left {
      left: 3px;
      background-position: -260px -75px;

      &:hover {
        background-position: -280px -75px;
      }
    }
    .arrow-right {
      right: 3px;
      background-position: -300px -75px;

      &:hover {
        background-position: -320px -75px;
      }
    }
  }
`
