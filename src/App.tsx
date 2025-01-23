import React, { Suspense } from 'react'
import { useRoutes } from 'react-router-dom'
import routes from './router'
import { useAppSelector, useAppDispatch, ShallowEqualApp } from './store'
import { changeMessageAction } from './store/modules/counter'

import AppHeader from './components/app-header'
import AppFooter from './components/app-footer'
import AppPlayerBar from './views/player/app-player-bar'

function App() {
  const dispatch = useAppDispatch()

  return (
    <div className="App">
      <AppHeader />
      <Suspense fallback="">
        <div className="main">{useRoutes(routes)}</div>
      </Suspense>
      <AppFooter />
      <AppPlayerBar />
    </div>
  )
}

export default App
