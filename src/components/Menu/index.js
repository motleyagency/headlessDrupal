import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const NavBar = styled.nav`
 ul {
   display: flex;
   list-style-type: none;
 }
`
const StyledLink = styled(Link)`
  text-decoration: none;
  padding: 5px;
  color: ${props => props.theme.darkBg};
`

const Menu = ({ data }) => {
  if (data.error) return <p>Menu error: {data.error}</p>
  return (
    <NavBar>
      <ul>
        {data && data.menuByName && data.menuByName.links.map(link =>
          <li key={link.label}>
            <StyledLink to={link.url.path}>{link.label}</StyledLink>
          </li>)}
      </ul>
    </NavBar>
  )
}

export default Menu
