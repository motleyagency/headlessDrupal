import { Route, Switch } from 'react-router'
import React from 'react'
import styled from 'styled-components'

import routes from '../../routes'
import Header from '../Header'
import Footer from '../Footer'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

const Layout = () =>
  <Container>
    <Header />
    <Switch>
      {routes.map(route => <Route key={route.name} {...route} />)}
    </Switch>
    <Footer>
      HeadlessDemo
    </Footer>
  </Container>

export default Layout
