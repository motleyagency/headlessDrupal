import React from 'react'

const renderHtml = htmlContent => {
  return {__html: htmlContent}
}
const Html = ({ content }) => (
  <div dangerouslySetInnerHTML={renderHtml(content)} />
)

export default Html
