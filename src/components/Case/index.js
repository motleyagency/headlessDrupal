import React from 'react'
import { Html, ContentWrapper, Main } from '../common'
import styled from 'styled-components'

const Image = styled.img`
  width: 100%;
`

const Case = ({ data }) => {
  if (data.error) return 'Error'
  if (data.loading) return 'Loading'
  return (
    <Main>
      <Image
        src={data.nodeById.fieldImage.url}
        alt={data.nodeById.fieldImage.alt}
      />
      <ContentWrapper>
        <h2>{data.nodeById && data.nodeById.title}</h2>
        <Html content={data.nodeById.body.value} />
      </ContentWrapper>
    </Main>
  )
}

export default Case
