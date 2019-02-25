import React from 'react'
import styled from 'styled-components'
import { ContentWrapper } from '../common'

const StyledFooter = styled.footer`
  background-color: ${props => props.theme.darkBg};
  padding: 25px 0;
  color: #fff;
`

const Footer = ({ children }) => (
  <StyledFooter>
    <ContentWrapper>
      {children}
    </ContentWrapper>
  </StyledFooter>
)

export default Footer
