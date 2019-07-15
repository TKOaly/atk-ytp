import React from 'react'
import infoContent from '../content/info.json'
import './styles/content.scss'

export default function Info () {
  const { title, content } = infoContent
  return (
    <div id="info" className="content">
      <div className="content-title-box">
        <h1 className="title-text">{title}</h1>
      </div>
        <div className="content-content-box">
        <div className="info-content-background-box">
          <div className="info-icon" />
        </div>
          <div className="content-text-wrapper">
            <p className="content-text">{content}</p>
        </div>
      </div>
    </div>
  )
}
