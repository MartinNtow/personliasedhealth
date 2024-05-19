import React from 'react'
import styles from '../styles/hepatitis.module.css'
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
          &rarr; Hepatitis
        </p>
      </div>
      <div className={styles.heading}>
        <h1>Hepatitis</h1>
      </div>{" "}
      <br />
      <br />
      <br />
     
    </div>
    </>
  )
}

export default page