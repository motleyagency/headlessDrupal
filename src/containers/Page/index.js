import gql from 'graphql-tag'
import { graphql } from 'react-apollo'

import Page from '../../components/Page'

const ContentByPath = gql`
  query getNodeByPath($path: String!) {
   route(path: $path) {
     ...on InternalUrl {
       path
       nodeContext {
         ...on NodePage {
           nid
           title
           body {
             value
           }
         }
       }
     }
   }
  }
`

export default graphql(ContentByPath, {
  options: (props) => { console.log('[props]: ', props); return ({ variables: { path: props.location.pathname } }) }
})(Page)
