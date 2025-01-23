import styled from 'styled-components'

export const RankingItemWrapper = styled.div`
  /* flex: 1; */
  width: 230px;
  &:last-child {
    width: 228px;
  }

  .header {
    display: flex;
    padding: 20px 0 0 20px;
    height: 100px;
    box-sizing: border-box;
    margin-bottom: 20px;
    .img {
      position: relative;

      > a {
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        background-position: -145px -57px;
      }
    }

    > .info {
      margin: 6px 0 0 10px;
      .name {
        font-size: 14px;
        font-weight: 700;
      }

      .icon {
        display: inline-block;
        width: 22px;
        height: 22px;
        margin-top: 10px;
        margin-right: 10px;
      }

      .play {
        background-position: -267px -205px;

        &:hover {
          background-position: -267px -235px;
        }
      }
      .favor {
        background-position: -300px -205px;
        &:hover {
          background-position: -300px -235px;
        }
      }
    }
  }

  .list {
    .list-item {
      height: 32px;
      line-height: 32px;
      display: flex;

      &:nth-child(-n + 3) .index {
        color: #c10d0c;
      }
      .index {
        width: 35px;
        margin-left: 10px;
        font-size: 16px;
        color: #666666;
        text-align: center;
      }

      .info {
        color: #000;
        width: 170px;
        display: flex;
        justify-content: space-between;
        .name {
          flex: 1;
          white-space: nowrap; /* 防止换行 */
          overflow: hidden; /* 隐藏超出范围的内容 */
          text-overflow: ellipsis;
          cursor: pointer;

          &:hover {
            text-decoration: underline;
          }
        }
        .operator {
          display: none;

          .btn {
            width: 17px;
            height: 17px;
            margin-right: 8px;
            position: relative;
            top: 3px;
            cursor: pointer;
          }
          .play {
            background-position: -267px -268px;
          }
          .add {
            top: 5px;
            background-position: 0 -700px;
          }
          .favor {
            background-position: -297px -268px;
            margin-right: 0px;
          }
        }
      }

      &:hover {
        .info {
          .operator {
            display: block;
          }
        }
      }
    }
  }

  .bottom {
    display: flex;
    justify-content: right;
    a {
      color: #000;
      &:hover {
        text-decoration: underline;
      }
      line-height: 32px;
      margin-right: 32px;
    }
  }
`
