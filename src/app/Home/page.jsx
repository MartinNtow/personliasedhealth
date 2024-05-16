import React from 'react'
import styles from "../styles/home.module.css"

const page = () => {
  return (
    <div className={styles.container}>
      <div className={styles.container2}>
        <h1>Welcome to <span>TailorCare</span></h1>
        <p>We provide you with:</p>

        <li>Personalized Treatment Plans</li>
        <li>An interactive Symptom Checker Tool</li>
     </div>
      
    </div>
  )
}

export default page