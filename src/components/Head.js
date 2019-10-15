import React, { useState, useEffect } from 'react'
import headContent from '../content/hero.json'
import './styles/head.scss'

export default function Head () {
  const { title, subtitle, date } = headContent

  const createClouds = () => {
    const clouds = ['cloud.png', 'cloud2.png']
    const arr = Array.apply(null, { length: 8 }).map((_, i) => (
      <img
        key={i}
        src={`/img/${clouds[Math.floor(Math.random() * 2)]}`}
        alt=""
        className={`head-cloud c${i + 1} cloud-translate`}
      />
    ))
    console.log(arr)
    return arr
  }

  return (
    <div className="hero-content">
      <div className="hero-content-wrapper">
        <img
          src="/img/isovitunkirkko.png"
          alt=""
          className="head-isovitunkirkko"
        />
        <h1 className="hero-title">{title}</h1>
        <h2 className="hero-subtitle">{subtitle}</h2>
        <CountdownTimer startDate={date} />
        {createClouds()}
      </div>
    </div>
  )
}

function CountdownTimer ({ startDate }) {
  const [timeLeft, tick] = useState(new Date())
  useEffect(() => {
    const intervalId = setInterval(() => tick(new Date()), 1000)
    return () => clearInterval(intervalId)
  })

  const parseTimeValues = (date) => {
    const distance = new Date(startDate).getTime() - date.getTime()
    const days = Math.floor(distance / (1000 * 60 * 60 * 24))
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
    const seconds = Math.floor((distance % (1000 * 60)) / 1000)

    return distance > 0 ? `${days} päivää, ${hours} tuntia, ${minutes} minuuttia, ${seconds} sekuntia` : 'NYT SE ON!'
  }

  return (
    <h3 className="hero-subtitle countdown">{parseTimeValues(timeLeft)}</h3>
  )
}
