import styled from 'styled-components'

export const HotAnchorWrapper = styled.div`
  margin-top: 30px;

  .radio {
    margin-top: 15px;
    .item {
      display: flex;
      margin-top: 10px;

      .info {
        width: 165px;
        margin-left: 5px;
        margin-top: 5px;
        .name {
          font-weight: 700;
        }

        .position {
          margin-top: 3px;
          color: #666;
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
        }
      }
    }
  }
`
