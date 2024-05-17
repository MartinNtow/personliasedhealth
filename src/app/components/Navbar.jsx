import React from 'react'
import styles from "../styles/navbar.module.css"
import Link from 'next/link'

const Navbar = () => {
  return (
<<<<<<< HEAD

=======
>>>>>>> d8951565f60603c8cfc5694866c60fe545fc2306
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
       
      
<<<<<<< HEAD

=======
>>>>>>> d8951565f60603c8cfc5694866c60fe545fc2306
    </div>
    
  )
}

export default Navbar
