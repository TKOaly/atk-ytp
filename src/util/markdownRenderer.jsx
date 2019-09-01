import React from 'react'

export const renderer = {
  paragraph: props =>
    <p className="content-text">{props.children}</p>,
  inlineCode: () => (
    <>
      <br/>
      <br/>
    </>
  ),
  link: props =>
  <div className="accomodation-link">
    <a href={props.href} className="accomodation-link-button">{props.children}</a>
  </div>
  
}