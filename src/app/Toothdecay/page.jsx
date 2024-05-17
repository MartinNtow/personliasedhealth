import React from 'react'
import styles from '../styles/toothdecay.module.css'
import Link from 'next/link'

const page = () => {
  return (
    <div className={styles.container}>
        <div className={styles.seminav}>
            <p><Link href="/Healthpage" className={styles.link1}>Personalized Health & Wellness</Link> &rarr; Tooth Decay</p>
        </div>

        <div className={styles.heading}>
            <h1>Tooth Decay</h1>
        </div> <br /><br /><br />

        <div className={styles.listitems}>
            <div className={styles.treat1}>
                <img src="/smoothcavities.png" alt="" /> <br /><br /><br />
                <Link href="#" className={styles.link2}>Smooth Surface Cavities &rarr;</Link>
            </div>

            <div className={styles.treat2}>
                <img src="/rootcavities.png" alt="" /> <br /> <br /><br />
                <Link href="#" className={styles.link2}>Root Cavities &rarr;</Link>
            </div>

            <div className={styles.treat3}>
                <img src="/pitandfissure.png" alt="" /> <br /><br /><br />
                <Link href="#" className={styles.link2}>Pit and Fissure Cavities&rarr;</Link>
            </div> 
        </div>
    </div>
  )
}

export default page