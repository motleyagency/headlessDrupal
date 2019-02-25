import React from 'react'
import GridItem from '../GridItem'
import Hero from '../Hero'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Main } from '../common'

import Loader from '../common/Loader'

const GridContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

const LandingContent = ({ data }) => {
  console.log('[data]: ', data)
  if (data.loading) { return <Loader /> }

  console.log('data',data)

  return (
  <Main>
    {data && data.route && data.route.nodeContext && data.route.nodeContext.fieldDynamicContent.map(content => {
      console.log('[bundle]', content.entity.entityBundle)
      const { entity } = content
      switch (entity.entityBundle) {

        case 'hero_block':
          return <Hero
            key={entity.entityBundle}
            title={entity.fieldTitle.value}
            bgImage={entity.fieldBackgro}
            ctaLink={entity.fieldCtaLink}
          />//content.entity.fieldCtaLink.title
        case 'content_list':
          return (
            <GridContainer
              key={entity.entityBundle}
            >
              {content.entity.fieldContentReference.map((content, i) =>
              <Link to={{
                pathname: content.entity.entityUrl.path,
                state: {nid: content.entity.nid}
                }}>
                <GridItem
                  key={i}
                  title={content.entity.title}
                  image={content.entity.fieldImage}
                />
                </Link>
              )}
            </GridContainer>
          )
        default:
          return 'no paragraph content'
      }
    })}

  </Main>
  )
}

export default LandingContent
