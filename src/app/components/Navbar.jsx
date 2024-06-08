import React from "react";
import styles from "../styles/navbar.module.css";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.appname}>
        <h1>WellNest</h1>
      </div>

      <div className={styles.link}>
        <Link href="/Healthpage" className={styles.nav}>
          Personalized Health & Wellness
        </Link>
        <Link href="http://localhost:3001/" className={styles.nav}>
          AI Symptom Checker
        </Link>
      </div>

      <div className={styles.logout}>
        <Link href="/">
          <button>Log out</button>
        </Link>
      </div>

    </div>
  );
};

export default Navbar;
