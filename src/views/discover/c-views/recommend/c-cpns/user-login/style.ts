import styled from 'styled-components'

export const UserLoginWrapper = styled.div`
  margin-top: 5px;

  .vip-card {
    width: 100%;
    box-sizing: border-box;
    > img {
      width: 100%;
      height: 100%;
    }
  }

  .info {
    height: 126px;
    background-position: 0 0;
    box-sizing: border-box;
    > p {
      margin: 15px 22.5px 20px;
      color: #666;
      line-height: 25px;
    }
    > a {
      display: block;
      position: relative;
      margin: 0 auto;
      width: 100px;
      height: 31px;
      line-height: 31px;
      text-align: center;
      color: #fff;
      text-shadow: 0 1px 0 #8a060b;
      background-position: 0 -195px;
    }
  }
`
