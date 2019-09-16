import React, { useState, useEffect } from 'react'
import './styles/content.scss'
import { getSponsors } from '../service/contentService'

export default function Sponsors () {
  const [sponsors, setSponsors] = useState([])
  useEffect(() => {
    getSponsors()
      .then(setSponsors)
  }, [])

  const mainSponsor = sponsors.shift()

  return (
    <div id="partners" className="content sponsors">
      
      <div className="content-title-box">
        <h1 className="title-text sponsor">Yhteistyökumppanit</h1>
      </div>
      <div className="sponsor-container">
        <h2 className="sponsor__header">Pääyhteistyökumppani:</h2>
        {!!mainSponsor && <a href={mainSponsor.url}>
          <img width="250px" src={`/img/${mainSponsor.logoUrl}`} alt={mainSponsor.name} style={{ margin: '20px 0px 20px 0px' }} />
        </a>}
        <h2 className="sponsor__header">Muut yhteistyökumppanit:</h2>
        <SponsorList sponsors={sponsors} />
      </div>
    </div>
  )
}

const SponsorList = ({ sponsors }) =>
  sponsors.map(({ name, url, logoUrl }) => 
    <a href={url}>
      <img width="150px" src={`/img/${logoUrl}`} alt={name} style={{ margin: '20px 0px 20px 0px' }} />
    </a>)
