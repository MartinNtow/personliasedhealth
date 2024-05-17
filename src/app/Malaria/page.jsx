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

        <div className={styles.listitems}>
            <div className={styles.treat1}>
                    <img src="/malariakid.png" alt="" /> <br /><br /><br />
                    <Link href="#" className={styles.link2}>Treating Malaria for Children &rarr;</Link>
                </div>

                <div className={styles.treat2}>
                    <img src="/malariaadult.png" alt="" /> <br /> <br /><br />
                    <Link href="#" className={styles.link2}>Treating Malaria for Adults &rarr;</Link>
                </div>
        </div>
    </div>
  )
}

export default page