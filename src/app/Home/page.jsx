import React from 'react'
import styles from "../styles/home.module.css"
import Link from 'next/link'

const page = () => {
  return (
    <div className={styles.container}>
      <div className={styles.container2}> <br />
        <h1><span> WellNest</span></h1> <br /><br />
        <p>We believe that every individual is unique, and so should be their path to wellness. Your journey to health is handcrafted here, with care.</p>
      </div> <br /><br />

      <div className={styles.help}>
        <p>Here's how we help:</p>
      </div> <br />

      <div className={styles.reason}>
        <div className={styles.one}>
          <Link href="/Healthpage" className={styles.linkone}>
            <span>1</span>
            <p>Get a personalized plan</p> <br />
            <img src="/treatment pic.jpg" alt="" />
          </Link>
        </div>

        <div className={styles.two}>
          <Link href="/Symptomchecker" className={styles.linktwo}>
            <span>2</span>
            <p>Interact with our AI to figure out what is wrong</p> 
            <img src="/AI pic.webp" alt="" />
          </Link>
        </div>
       </div>
      
    </div>
  )
}

export default page