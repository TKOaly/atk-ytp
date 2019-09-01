import React, { useState, useEffect } from 'react'
import ReactMarkdown from 'react-markdown'
import './styles/content.scss'
import { renderer } from '../util/markdownRenderer.jsx'
import { getAccomodationInfo } from '../service/contentService';

export default function Accomodation () {
  const [content, setContent] = useState({
    mainTitle: '',
    mainContent: '',
    taxiTitle: '',
    taxiContent: ''
  })
  useEffect(() => {
    getAccomodationInfo()
      .then(setContent)
  }, [])
  return (
    <div id="accomodation" className="content">
      <div className="content-title-box">
        <h1 className="title-text">{content.mainTitle}</h1>
      </div>
      <div className="content-content-box">
        <div className="info-content-background-box">
        </div>
        <div className="content-text-wrapper">
          <ReactMarkdown source={content.mainContent} renderers={renderer} />
        </div>
      </div>
      <div className="content-content-box">
        <div className="info-content-background-box">
        </div>
        <div className="content-text-wrapper">
          <h2 className="accomodation__header">{content.taxiTitle}</h2>
          <ReactMarkdown source={content.taxiContent} renderers={renderer} />
        </div>
      </div>
    </div>
  )
}
