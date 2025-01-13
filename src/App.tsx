import React, { Suspense } from 'react'
import { Link, useRoutes } from 'react-router-dom'
import routes from './router'

import { useAppSelector, useAppDispatch, ShallowEqualApp } from './store'
import { changeMessageAction } from './store/modules/counter'

function App() {
  const { count, message } = useAppSelector(
    (state) => ({
      count: state.counter.count,
      message: state.counter.message
    }),
    ShallowEqualApp
  )

  const dispatch = useAppDispatch()
  function handleChangeMessage() {
    dispatch(changeMessageAction('哈哈哈'))
  }
  return (
    <div className="App">
      <div className="nav">
        <Link to="/discover">发现音乐</Link>
        <Link to="/mine">我的音乐</Link>
        <Link to="/focus">关注</Link>
        <Link to="/download">下载客户端</Link>
      </div>
      <Suspense fallback="">
        <div className="main">{useRoutes(routes)}</div>
      </Suspense>

      <h2>当前计数: {count}</h2>
      <h2>当前message: {message}</h2>
      <button onClick={handleChangeMessage}>改变message</button>
    </div>
  )
}

export default App
