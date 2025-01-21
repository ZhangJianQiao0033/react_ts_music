import styled from 'styled-components'

export const RecommendWrapper = styled.div`
  > .content {
    background-image: url(${require('@/assets/img/wrap-bg.png')});
    display: flex;
    border: 1px solid #d3d3d3;
    > .left {
      width: 729px;
      padding: 20px;
    }

    > .right {
      margin-left: 1px;
      width: 250px;
    }
  }
`
