import React from 'react'
import styles from '../../../src/app/styles/navbar.module.css'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.appname}>
        <h1>WellNest</h1>
      </div>

      <div className={styles.link}>
        <Link href="http://localhost:3000/Healthpage" className={styles.nav}>
          Personalized Health & Wellness
        </Link>
      </div>

      
    </div>
  )
}

export default Navbar
