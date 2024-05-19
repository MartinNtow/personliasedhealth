import React from 'react'
import styles from '../styles/vision.module.css'
import Link from 'next/link'
import Navbar from '../components/Navbar'

const page = () => {
  return (
    <>
       <Navbar />
    <div className={styles.container}>
      <div className={styles.seminav}>
        <p>
          <Link href="/Healthpage" className={styles.link1}>
            Personalized Health & Wellness
          </Link>{" "}
          &rarr; Vision
        </p>
      </div>
      <div className={styles.heading}>
        <h1>Vision</h1>
      </div>{" "}
      <br />
      <br />
      <br />
     
    </div>
    </>
  )
}

export default page