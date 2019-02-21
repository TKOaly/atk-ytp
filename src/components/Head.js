import React from 'react'
import headContent from '../content/hero.json'
import './styles/head.css'


export default function Head(props) {
  const {title, subtitle, date} = headContent

  return (
    <div className="head-container">
      <div className="hero-content">
        <h1 className="hero-title">{title}</h1>
        <h2 className="hero-subtitle">{subtitle}</h2>
        <h3 className="hero-subtitle">{date}</h3>
      </div>
    </div>
  )
}