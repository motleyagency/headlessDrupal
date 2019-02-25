import React from 'react'
import { Link } from 'react-router-dom'
import headlessImg from '../../assets/headless.svg'
import styled from 'styled-components'

const Image = styled.img`
  width: 50px;
  height: auto;
`
const Logo = () => (
  <Link to="/">
    <Image src={headlessImg} alt="Headless Drupal" />
  </Link>
)

export default Logo
