import React, { memo } from 'react'
import type { ReactNode, FC } from 'react'
import { UserLoginWrapper } from './style'

interface IProps {
  children?: ReactNode
}

const UserLogin: FC<IProps> = () => {
  return (
    <UserLoginWrapper>
      <div className="vip-card">
        <img src={require('@/assets/img/dis_vip_card.png')} alt="" />
      </div>
      <div className="info sprite_02">
        <p>登录网易云音乐，可以享受无限收藏的乐趣，并且无限同步到手机</p>
        <a href="#" onClick={() => false} className="sprite_02">
          用户登录
        </a>
      </div>
    </UserLoginWrapper>
  )
}

export default memo(UserLogin)
