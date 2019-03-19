import React, {useState} from 'react'
import classnames from 'classnames'
import './styles/navbar.css'

export default function Navbar() {
  const [navmenuVisible, setNavmenuVisible] = useState(false)
  const classes = classnames({'navbar__items': true, 'visible': navmenuVisible})

  return (
    <div className="navbar">
      <ul className={classes}>
        <li className="navbar__item">etusivu</li>
        <li className="navbar__item">yleisinfo</li>
      </ul>

      <div onClick={() => setNavmenuVisible(!navmenuVisible)} className="burger"></div>
    </div>
  )
}