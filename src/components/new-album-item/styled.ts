import styled from 'styled-components'

export const AlbumItemWrapper = styled.div`
  margin-left: 10px;
  /* height: 150px;git */
  font-size: 12px;
  background-position: -260px 100px;
  .top {
    position: relative;
    width: 118px;

    margin-bottom: 7px;

    & > img {
      width: 100px;
      height: 100px;
    }

    .cover {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;

      background-position: 0 -570px;
    }
    .play {
      position: absolute;
      display: none;
      width: 22px;
      height: 22px;
      right: 22px;
      bottom: 5px;
      background-position: 0 -85px;
    }

    &:hover {
      .play {
        display: inline-block;
      }
    }
  }

  .bottom {
    .name {
      width: 100px;
      color: #000000;
      white-space: nowrap; /* 强制单行 */
      overflow: hidden; /* 隐藏超出部分 */
      text-overflow: ellipsis; /* 显示省略号 */
    }
    .artist {
      width: 100px;
      color: #666666;
      white-space: nowrap; /* 强制单行 */
      overflow: hidden; /* 隐藏超出部分 */
      text-overflow: ellipsis; /* 显示省略号 */
    }
  }
`
