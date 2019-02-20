import { graphql } from 'react-apollo'

import LandingByPath from '../../graphql/LandingQuery'

import LandingContent from '../../components/Landing'

export default graphql(LandingByPath, {
  options: (props) => { console.log('[props]: ', props); return ({ variables: { path: props.location.pathname } }) }
})(LandingContent)
