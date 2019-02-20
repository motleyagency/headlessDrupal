import gql from 'graphql-tag'
import CaseFields from './fragments/CaseFields'

const LandingByPath = gql`
  query {
    route(path: "/cases") {
      ... on InternalUrl {
        path
        nodeContext {
          type {
            targetId
          }
          ...on NodeLanding {
            title
            fieldDynamicContent {
              entity {
                entityBundle
                ... on ParagraphHeroBlock {
                   fieldCtaLink {
                    url {
                      path
                    }
                    title
                  }
                   fieldBackgro {
                    targetId
                    alt
                    url
                  }
                  fieldTitle {
                    value
                  }
                }
              ...on ParagraphContentList {
                fieldContentReference {
                  entity {
                    ... on NodeCase {
                      ...CaseFields
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
${CaseFields}
`

export default LandingByPath
