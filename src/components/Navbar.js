import React from 'react'
import styles from './styles/navbar.module.scss'

export default function Navbar() {
  return (
    <div className={styles.navbar}>
      <ul className={styles["navbar__items"]}>
        <li className={styles["navbar__item"]}>etusivu</li>
        <li className={styles["navbar__item"]}>yleisinfo</li>
      </ul>
    </div>
  )
}