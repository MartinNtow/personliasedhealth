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
    <div className={styles.listitems}>
      <div className={styles.treat1}>
        <img src="/cvd.png" alt="" /> <br />
        <br />
        <br />
        <Link href="#" className={styles.link2}>
        Unveiling the Link Between Stress-Related Brain Activity and the Heart-Healthy Power of Exercise &rarr;
        </Link>
      </div>

      <div className={styles.treat2}>
        <img src="/alcohol.png" alt="" /> <br /> <br />
        <br />
        <Link href="#" className={styles.link2}>
        Cheers to Your Heart: Study Finds Lowering Alcohol Intake Can Cut Cardiovascular Risks &rarr;
        </Link>
      </div>

      <div className={styles.treat3}>
        <img src="/walking.png" alt="" /> <br />
        <br />
        <br />
        <Link href="#" className={styles.link2}>
        Walking 10,000 Steps a Day Shields Heart and Extends Life, Even for the Sedentary! &rarr;
        </Link>
      </div>
    </div>
    <br />
  </div>
  )
}

export default page