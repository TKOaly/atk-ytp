import React, { useState, useEffect } from 'react'
import headContent from '../content/hero.json'
import './styles/head.scss'

export default function Head () {
  const { title, subtitle, date } = headContent

  return (
    <div className="hero-content">
      <div className="hero-content-wrapper">
        <h1 className="hero-title">{title}</h1>
        <h2 className="hero-subtitle">{subtitle}</h2>
        <CountdownTimer startDate={date} />
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

function CountdownTimer ({ startDate }) {
  const [timeLeft, tick] = useState(new Date())
  useEffect(() => {
    const intervalId = setInterval(() => tick(new Date()), 1000)
    return () => clearInterval(intervalId)
  })
  console.log(timeLeft)

  const parseTimeValues = (date) => {
    const distance = new Date(startDate).getTime() - date.getTime()
    const days = Math.floor(distance / (1000 * 60 * 60 * 24))
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
    const seconds = Math.floor((distance % (1000 * 60)) / 1000)

    return distance > 0 ? `${days} päivää, ${hours} tuntia, ${minutes} minuuttia, ${seconds} sekunttia` : 'OHI ON!'
  }

  return (
    <h3 className="hero-subtitle countdown">{parseTimeValues(timeLeft)}</h3>
  )
}
