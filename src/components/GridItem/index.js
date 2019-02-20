import React from 'react'
import styled from 'styled-components'

const Item = styled.div`
position: relative;
  background-color: #f6f6f6;
  padding: 20px;
  width: 30%;

  h3 {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }

  img {
    width: 100%;
  }
`
const GridItem = ({ title, image }) => (
  <Item>
    <h3>{title}</h3>
    {image.url &&
      <img src={image.url.replace('drupal', 'localhost:7025')} alt={image.alt} />
    }
  </Item>
)

export default GridItem
