import React from 'react'
import './styles/spacer.scss'
import Ticker from 'react-ticker'

export default function Spacer () {
  const organizations = ['Asteriski', 'Blanko', 'Digit', 'Dumppi', 'Epsilon', 'Giga', 'Infå', 'Linkki', 'Luuppi', 'Serveri', 'TKO-äly', 'TuKYData', 'Tutti', 'Ynnä', 'Skripti']

  return (
    <div className='spacer'>
      <Ticker speed='9'>
        {({ index }) => (
          <p className='spacer_element'>{organizations[index % organizations.length]}</p>
        )}
      </Ticker>
    </div>
  )
}
