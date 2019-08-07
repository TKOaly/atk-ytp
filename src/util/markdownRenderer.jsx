import React from 'react'

export const renderer = {
  paragraph: props =>
    <p className="content-text">{props.children}</p>,
  inlineCode: () => (
    <>
      <br/>
      <br/>
    </>
  )
}