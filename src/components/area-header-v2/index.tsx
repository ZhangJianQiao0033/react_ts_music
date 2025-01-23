import React, { memo } from 'react'
import type { ReactNode, FC } from 'react'
import { HeaderV2Wrapper } from './style'

interface IProps {
  children?: ReactNode
  title: string
  moreText?: string
}

const AreaHeaderV2: FC<IProps> = (props) => {
  const { title, moreText = '' } = props
  return (
    <HeaderV2Wrapper>
      <div className="title">{title}</div>
      <div className="more">{moreText}</div>
    </HeaderV2Wrapper>
  )
}

export default memo(AreaHeaderV2)
