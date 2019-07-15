import React, { useState, useEffect } from 'react'
import './styles/footer.scss'

export default function Footer () {
  return (
  <footer>
    <div className="footerContainer">
    <div className="iconContainer" >
     <a className="iconFb" href="https://fi-fi.facebook.com/TKOaly"></a>
     <a className="iconTg" href="https://t.me/joinchat/Cl6rokNcVUL0x6o0aGxO-g"></a>
     <a className="iconIg" href="https://www.instagram.com/tkoaly/?hl=en"></a>
    </div>
      <div className="textContainer">
        <a className="footerText" href="https://www.tko-aly.fi" >TKO-äly.fi</a>
        <a className="footerText" href="http://mol.fi" >atk-ytp@vittusaatana.fi</a>
        
      </div>
    </div>
  </footer>
  )
}