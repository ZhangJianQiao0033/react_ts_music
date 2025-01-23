import styled from 'styled-components'

export const HeaderV2Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid black;
  padding-bottom: 5px;

  .title {
    font-weight: 700;
  }
  .more {
    color: #666;

    &:hover {
      text-decoration: underline;
    }
  }
`
