import React, { useEffect, useState } from 'react'
import { getTeam } from '../service/contentService'

export default function Team() {
  return (
      <div id="team" className="content">
        <div className="content-title-box">
            <h1 className="title-text">Tiimi</h1>
        </div>
        <div className="content-content-box">
        <div className="info-content-background-box">
          <div className="info-icon" />
        </div>
          <div className="content-text-wrapper">
            {listTeamMembers()}
        </div>
      </div>
    </div>
  )
}

function listTeamMembers() {
  const [people, setPeople] = useState([])
  useEffect(() => {
    getTeam().then(setPeople)
  }, [])

  return people
    .map(({name, title}) => (
      <div className="peep">
        <p className="peep-name">{name}</p>
        <p className="peep-title">{title}</p>
      </div>
    ))
}