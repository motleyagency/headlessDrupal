import gql from 'graphql-tag'

const CaseFields = gql`
  fragment CaseFields on NodeCase {
    nid
    title
    entityUrl {
      path
    }
    fieldImage {
      url
      alt
    }
  }
`

export default CaseFields
