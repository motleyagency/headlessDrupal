import { graphql } from 'react-apollo'
import CaseById from '../../graphql/CaseQuery' 
import Case from '../../components/Case'

export default graphql(CaseById, {
  options: props => ({ variables: { id: props.location.state.nid }})
})(Case)
