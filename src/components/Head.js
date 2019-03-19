import React from 'react'
import headContent from '../content/hero.json'
import './styles/head.scss'

export default function Head (props) {
  const { title, subtitle, date } = headContent

  const createClouds = () => {
    const clouds = ['cloud.png', 'cloud2.png']
    const arr = Array.apply(null, { length: 6 }).map((_, i) => (
      <img
        key={i}
        src={`/img/${clouds[Math.floor(Math.random() * 2)]}`}
        alt=""
        className={`head-cloud ${i > 0 ? 'c' + (i + 1) : ''} cloud-translate`}
      />
    ))
    console.log(arr)
    return arr
  }

  return (
    <div className="hero-content">
      <div className="hero-content-wrapper">
        <h1 className="hero-title">{title}</h1>
        <h2 className="hero-subtitle">{subtitle}</h2>
        <h3 className="hero-subtitle">{date}</h3>
        <img
          src="/img/isovitunkirkko.png"
          alt=""
          className="head-isovitunkirkko"
        />
        {createClouds()}
      </div>
    </div>
  )
}
