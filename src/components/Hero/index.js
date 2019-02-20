import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const propTypes = {
  title: PropTypes.string.isRequired,
  bgImage: PropTypes.object.isRequired,
  ctaLink: PropTypes.object.isRequired
}

const HeroContainer = styled.div`
  position: relative;
  min-height: 50vh;
  overflow: hidden;
`
const HeroContent = styled.div`
  position: relative;
  max-width: 1280px;
  margin: 0 auto;
  color: #fff;
`

const Image = styled.img`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
`

const Hero = ({ title, bgImage, ctaLink }) => (
  <HeroContainer>
    <Image src={bgImage.url.replace('drupal', 'localhost:7025')} alt={bgImage.alt} />
    <HeroContent>
      <h2>{title}</h2>
      <a href={ctaLink.url.path}>{ctaLink.title}</a>
    </HeroContent>
  </HeroContainer>
)

Hero.propTypes = propTypes

export default Hero
