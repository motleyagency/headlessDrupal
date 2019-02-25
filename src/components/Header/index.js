import React from 'react'
import styled from 'styled-components'
import Logo from '../Logo'
import { ContentWrapper } from '../common'
import MenuContainer from '../../containers/MenuContainer'

const StyledWrapper = styled(ContentWrapper)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Header = () => (
  <header>
    <StyledWrapper>
      <Logo />
      <MenuContainer />
    </StyledWrapper>
  </header>
)

export default Header
