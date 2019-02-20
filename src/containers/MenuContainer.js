import { graphql } from 'react-apollo';
import gql from 'graphql-tag'

import Menu from '../components/Menu'

const MENU_QUERY = gql`
query getMenu {
  menuByName(name: "main") {
  links {
    label
    url {
      path
    }
  }
}
}
`;

export default graphql(MENU_QUERY)(Menu)
