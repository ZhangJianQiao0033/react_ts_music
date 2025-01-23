import styled from 'styled-components'

export const SettleSingerWrapper = styled.div`
  .artists {
    margin-top: 5px;
    .item {
      display: flex;
      padding-top: 15px;

      .info {
        flex: 1;
        background: #fafafa;
        border: 1px solid #e9e9e9;

        .name {
          font-size: 14px;
          font-weight: 700;
          margin: 10px 0 0 10px;
        }

        .alia {
          margin: 10px 0 0 10px;
          color: #666;
        }
      }
    }
  }

  .apply-for {
    margin-top: 12px;
    a {
      color: #333;
      font-weight: 700;
      text-align: center;
      display: block;
      height: 31px;
      line-height: 31px;
      border-radius: 4px;
      background-color: #fafafa;
      border: 1px solid #c3c3c3;
      text-decoration: none;
    }
  }
`
