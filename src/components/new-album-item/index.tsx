import React, { memo } from 'react'
import type { ReactNode, FC } from 'react'
import { AlbumItemWrapper } from './styled'
import { getImageSize } from '@/utils/format'

interface IProps {
  children?: ReactNode
  itemData: any
}

const NewAlbumItem: FC<IProps> = (props) => {
  const { itemData } = props
  return (
    <AlbumItemWrapper className="sprite_02">
      <div className="top">
        <img src={getImageSize(itemData.picUrl, 100)} alt="" />
        <a href="#" className="sprite_cover cover"></a>
        <a href="#" className="sprite_icon play"></a>
      </div>
      <div className="bottom">
        <div className="name">{itemData.name}</div>
        <div className="artist">{itemData.artist.name}</div>
      </div>
    </AlbumItemWrapper>
  )
}

export default memo(NewAlbumItem)
