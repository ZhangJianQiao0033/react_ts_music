import styled from 'styled-components'

export const HeaderV1Wrapper = styled.div`
  height: 33px;
  padding: 0 10px 0 34px;
  background-position: -225px -156px;
  border-bottom: 2px solid #c10d0c;

  display: flex;
  justify-content: space-between;

  .left {
    display: flex;
    align-items: center;
    > .title {
      font-size: 20px;
      font-family: 'Microsoft Yahei', Arial, Helvetica, sans-serif;
      font-weight: normal;
    }

    .keywords {
      display: flex;
      margin-left: 20px;
      color: #666;
      align-items: center;
      .item {
        position: relative;
        top: 2px;

        .divider {
          margin: 0 10px;
          color: #ccc;
        }

        .link {
          &:hover {
            cursor: pointer;
            text-decoration: underline;
          }
        }
      }
    }
  }

  .right {
    display: flex;
    align-items: center;

    .more {
      color: #666;

      &:hover {
        text-decoration: underline;
      }
    }
    .icon {
      width: 12px;
      height: 12px;
      margin-left: 4px;
      background-position: 0 -240px;
    }
  }
`
