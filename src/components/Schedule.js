import React from 'react'
import infoContent from '../content/info.json'
import './styles/content.css'

export default function Schedule() {
  const {title, content} = infoContent
  return (
    <div className="content">
      <div className="content-content-box inverted">
        <div className="content-text-wrapper">
          <p className="content-text">{content}</p>
        </div>
      </div>

      <div className="content-title-box inverted">
        <h1 className="title-text">{title}</h1>
      </div>
    </div>
  )
}