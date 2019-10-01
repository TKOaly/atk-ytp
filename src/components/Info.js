import React, { useState, useEffect } from 'react'
import ReactMarkdown from 'react-markdown'
import './styles/content.scss'
import { getInfo } from '../service/contentService.js'
import { renderer } from '../util/markdownRenderer.jsx'

export default function Info () {
  const [content, setContent] = useState({
    title: '',
    text: ''
  })
  useEffect(() => {
    getInfo()
      .then(setContent)
  }, [])
  return (
    <div id="info" className="content">
      <div className="content-title-box">
        <h1 className="title-text">{content.title}</h1>
      </div>
      <div className="content-content-box">
        <div className="info-content-background-box">
          <div className="info-icon" />
        </div>
        <div className="content-text-wrapper">
          <ReactMarkdown source={content.text} renderers={renderer} />
        </div>
      </div>
    </div>
  )
}
