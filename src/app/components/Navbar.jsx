import React from 'react'
import styles from "../styles/navbar.module.css"
import Link from 'next/link'

const Navbar = () => {
  return (
<<<<<<< HEAD
    <div>
      this is the navbars
=======
    <div className = {styles.container}>
       
       <div className={styles.appname}>
        <Link href = "/Home" className= {styles.link1}>
         <h1 >WellNest</h1>
        </Link>
       </div>

       <div className= {styles.link}>
        <Link href = "/Healthpage" className={styles.nav}>Personalized Health & Wellness</Link>
        <Link href = "/Symptomchecker" className={styles.nav} >AI Symptom Checker</Link>
       </div>
       
      
>>>>>>> 9b48cbcb64057eb41cf712608ef63ab22222df80
    </div>
    
  )
}

export default Navbar
