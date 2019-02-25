import gql from 'graphql-tag'

const CaseById = gql`
  query ($id: String!) {
    nodeById(id: $id) {
      ...on NodeCase {
        title
        body {
          value
          format
        }
        fieldImage {
          url
          alt
        }
      }
    }
  }
`
export default CaseById
