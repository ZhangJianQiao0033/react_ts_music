import styled from 'styled-components'

export const RecommendWrapper = styled.div`
  > .content {
    background-image: url(${require('@/assets/img/wrap-bg.png')});
    display: flex;
    border: 1px solid #d3d3d3;
    > .left {
      width: 729px;
      padding: 20px 20px 40px;
      box-sizing: border-box;
    }

    > .right {
      margin-left: 1px;
      width: 250px;

      .mediaCreator {
        width: 100%;
        box-sizing: border-box;
        padding: 20px;
      }
    }
  }
`
