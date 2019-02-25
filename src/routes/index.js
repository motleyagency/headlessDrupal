import Page from '../containers/Page'
import Landing from '../containers/Landing'
import Case from '../containers/Case'
import NotFound from '../components/NotFound'

const routes = [
  {
    path: '/',
    name: 'home',
    exact: true,
    component: Page
  },
  {
    path: '/about',
    name: 'about',
    component: Page
  },
  {
    path: '/cases/:title',
    name: 'case',
    component: Case
  },
  {
    path: '/cases',
    name: 'cases',
    component: Landing
  },
  {
    path: '*',
    name: 'notfound',
    component: NotFound
  }
]

export default routes
