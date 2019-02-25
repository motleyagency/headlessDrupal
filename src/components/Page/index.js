import React from 'react'
import Html from '../common/Html'
import styled from 'styled-components'

const Main = styled.main`
  flex: 1;
`
const Page = (props) => {
  if (props.loading) return <p>Loading</p>

  return (
    <Main>
      {props &&
        props.data &&
        props.data.route &&
        props.data.route.nodeContext &&
        <Html content={props.data.route.nodeContext.body.value}
        />}
    </Main>
  )
}

export default Page
