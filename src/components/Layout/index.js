import { Route, Switch } from 'react-router'
import React from 'react'

import routes from '../../routes'

import MenuContainer from '../../containers/MenuContainer'
import Header from '../Header'

const Layout = () =>
  <div>
    <Header />
    <MenuContainer />

    <Switch>
      {routes.map(route => <Route key={route.name} {...route} />)}
    </Switch>
  </div>

export default Layout
