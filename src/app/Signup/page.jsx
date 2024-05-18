import React from 'react'
import styles from '../styles/signup.module.css'
import Link from 'next/link'

const page = () => {
  return (
    <div className={styles.container}>
        <div className={styles.form}> <br /><br />
            <h2>Registration Form</h2> <br />
            <form action="">
                <div className={styles.name}>
                    <input type="text" placeholder='First Name' required />
                    <input type="text" placeholder='Last Name' required />
                </div> <br />

                <div className={styles.mail}>

                    <input type="email" placeholder='Email' required/> <br /><br />

                    <input type="password" placeholder='Password' required /> <br /><br />

                    <input type="password" placeholder='Confirm Password'  required/> <br /><br />
                </div> <br /><br />
                <Link href='/Healthform'>
                <button >Register Now</button>
                </Link>
            </form>
        </div>
    </div>
  )
}

export default page