import gql from 'graphql-tag'

const CaseFields = gql`
  fragment CaseFields on NodeCase {
    nid
    title
    fieldImage {
      url
      alt
    }
  }
`

export default CaseFields
