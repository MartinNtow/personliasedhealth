import React from "react";
import Link from "next/link";
import styles from "../styles/allergies.module.css";
import Navbar from "../components/Navbar";

const page = () => {
  return (
    <>
    <Navbar/>
    <div className={styles.container}>
      <div className={styles.seminav}>
        <p>
          <Link href="/Healthpage" className={styles.link1}>
            Personalized Health & Wellness
          </Link>{" "}
          &rarr; Allergies
        </p>
      </div>
      <div className={styles.heading}>
        <h1>Allergies</h1>
      </div>{" "}
      <br />
      <br />
      <br />
      
    </div>
    </>
  );
};

export default page;
