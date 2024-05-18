import React from 'react'
import styles from '../styles/malaria.module.css'
import Link from 'next/link'

const page = () => {
  return (
    <div className={styles.container}>
        <div>
        <div className={styles.seminav}>
            <p><Link href="/Healthpage" className={styles.link1}>Personalized Health & Wellness</Link> &rarr; Malaria</p>
        </div>

        <div className={styles.heading}>
            <h1>Malaria</h1>
        </div> <br /><br /><br />
        </div>

       
    </div>
  )
}

export default page