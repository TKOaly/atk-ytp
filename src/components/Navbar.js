import React, { useState } from 'react'
import classnames from 'classnames'
import * as R from 'ramda'
import './styles/navbar.scss'


export default function Navbar () {
  const [navmenuVisible, setNavmenuVisible] = useState(false)
  const [activeTab, setActiveTab] = useState('#home')
  const classes = classnames({
    'navbar__items': true,
    'visible': navmenuVisible
  })

  return (
    <div className="navbar">
      <ul className={classes}>
        {renderNavBarItem('#home', 'etusivu', activeTab, setNavmenuVisible, setActiveTab)}
        {renderNavBarItem('#info', 'yleisinfo', activeTab, setNavmenuVisible, setActiveTab)}
        {renderNavBarItem('#schedule', 'aikataulu', activeTab, setNavmenuVisible, setActiveTab)}
        {renderNavBarItem('#accomodation', 'majoitus', activeTab, setNavmenuVisible, setActiveTab)}
        {renderNavBarItem('#team', 'tiimi', activeTab, setNavmenuVisible, setActiveTab)}
        {renderNavBarItem('#sponsors', 'sponsorit', activeTab, setNavmenuVisible, setActiveTab)}

      </ul>

      <div
        onClick={() => setNavmenuVisible(!navmenuVisible)}
        className="burger"
      />
    </div>
  )
}

function renderNavBarItem(href, label, activeTab, setNavmenuVisible, setActiveTab) {
  const handleClick = R.pipe(setActiveTab, () => setNavmenuVisible(false))
  return (
    <li className="navbar__item">
      <a
        className={classnames('navbar__item-text', { active: activeTab === href })}
        onClick={() => handleClick(href)} href={href}
      >
        {label}
      </a>
    </li>
  )
}
