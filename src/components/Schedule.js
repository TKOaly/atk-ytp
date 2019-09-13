import React, { useState, useEffect } from 'react'
import './styles/content.scss'
import { getSchedule } from '../service/contentService';

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
          <ScheduleTable day="ke" />
        </div>
      </div>
      <div className="content-content-box timetable">
        <div className="info-content-background-box timetable">
          <div className="schedule-icon thu" />
        </div>
        <div className="content-text-wrapper">
          <h2 className="schedule-day__header">Torstai</h2>
          <ScheduleTable day="to" />
        </div>
      </div>
      <div className="content-content-box timetable">
        <div className="info-content-background-box timetable">
          <div className="schedule-icon fri" />
        </div>
        <div className="content-text-wrapper">
          <h2 className="schedule-day__header">Perjantai</h2>
          <ScheduleTable day="pe" />
        </div>
      </div>
    </div>
  )
}

function ScheduleTable({ day }) {
  const [events, setEvents] = useState([])
  useEffect(() => {
    getSchedule(day)
      .then(setEvents)
  }, [])

  return (
    <table className="timetable-table">
      <tr>
        <th>klo</th>
        <th>ohjelma</th>
      </tr>
      <tbody>
        {events.map(({ time, eventName, eventPlace }) => (
          <tr>
          <td>
            <p className="program-row-time">{time}</p>
          </td>
          <td>
            <div className="program-row">
              <p className="program-row-name">{eventName}</p>
              <p className="program-row-place">{eventPlace}</p>
            </div>
          </td>
        </tr>))}
      </tbody>
    </table>
  )
}
