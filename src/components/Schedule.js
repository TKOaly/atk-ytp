import React from 'react'
import './styles/content.scss'

export default function Schedule () {
  return (
    <div id="schedule" className="content timetable">
      <div className="content-title-box">
        <h1 className="title-text timetable">Aikataulu</h1>
      </div>
      <div className="content-content-box timetable">
        <div className="info-content-background-box timetable">
          <div className="schedule-icon wed" />
        </div>
        <div className="content-text-wrapper">
          <h2 className="schedule-day__header">Keskiviikko</h2>
          <p className="content-text">Aikataulut tulevat myöhemmin näkyviin!</p>
        </div>
      </div>
      <div className="content-content-box timetable">
        <div className="info-content-background-box timetable">
          <div className="schedule-icon thu" />
        </div>
        <div className="content-text-wrapper">
          <h2 className="schedule-day__header">Torstai</h2>
          <p className="content-text">Aikataulut tulevat myöhemmin näkyviin!</p>
        </div>
      </div>
      <div className="content-content-box timetable">
        <div className="info-content-background-box timetable">
          <div className="schedule-icon fri" />
        </div>
        <div className="content-text-wrapper">
          <h2 className="schedule-day__header">Perjantai</h2>
          <p className="content-text">Aikataulut tulevat myöhemmin näkyviin!</p>
        </div>
      </div>
    </div>
  )
}
