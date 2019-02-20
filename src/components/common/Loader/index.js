import React from 'react'
import styled from 'styled-components'

const Overlay = styled.div`
  width: 100%;
  position: relative;
  text-align: center;

  &:before {
    content: '';
    position: absolute;
    background: rgba(0,0,0,0.1);
  }
`
const Loader = () => (
  <Overlay>
    <p>LOaDiNg..</p>
  </Overlay>
)

export default Loader
