import React from 'react'
import styles from '../styles/cvd.module.css'
import Link from 'next/link'

const page = () => {
  return (
    <div className={styles.container}>
    <div className={styles.seminav}>
      <p>
        <Link href="/Healthpage" className={styles.link1}>
          Personalized Health & Wellness
        </Link>{" "}
        &rarr; CVD
      </p>
    </div>
    <div className={styles.heading}>
      <h1>CVD</h1>
    </div>{" "}
    <br />
    <br />
    <br />
    
  </div>
  )
}

export default page