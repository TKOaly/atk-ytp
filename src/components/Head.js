import React from 'react'
import headContent from '../content/hero.json'
import './styles/head.css'


export default function Head(props) {
  const {title, subtitle, date} = headContent 

  return (
    <div className="hero-content">
      <div className="hero-content-wrapper">
        <h1 className="hero-title">{title}</h1>
        <h2 className="hero-subtitle">{subtitle}</h2>
        <h3 className="hero-subtitle">{date}</h3>
        <img src="/img/isovitunkirkko.png" className="head-isovitunkirkko" />
        <img src="/img/cloud.png" className="head-cloud cloud-translate" />
        <img src="/img/cloud2.png" className="head-cloud c2 cloud-translate" />
        <img src="/img/cloud.png" className="head-cloud c3 cloud-translate" />
        <img src="/img/cloud.png" className="head-cloud c4 cloud-translate" />
        <img src="/img/cloud2.png" className="head-cloud c5 cloud-translate" />
        <img src="/img/cloud2.png" className="head-cloud c6 cloud-translate" />
      </div>
    </div>
  )
}