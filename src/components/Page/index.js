import React from 'react'
import Html from '../common/Html'

const Page = (props) => {
  if (props.loading) return <p>Loading</p>

  return (<main>
    {props &&
      props.data &&
      props.data.route &&
      props.data.route.nodeContext &&
      <Html content={props.data.route.nodeContext.body.value}
      />}
  </main>)
}

export default Page
