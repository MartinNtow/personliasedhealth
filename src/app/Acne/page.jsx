import React from "react";
import styles from "../styles/acne.module.css";
import Link from "next/link";

const page = () => {
  return (
    <div className={styles.container}>
      <div className={styles.seminav}>
        <p>
          <Link href="/Healthpage" className={styles.link1}>
            Personalized Health & Wellness
          </Link>{" "}
          &rarr; Acne
        </p>
      </div>
      <div className={styles.heading}>
        <h1>Acne</h1>
      </div>{" "}
      <br />
      <br />
      <br />
      <div className={styles.listitems}>
        <div className={styles.treat1}>
          <img src="/acne.jpg" alt="" /> <br />
          <br />
          <br />
          <Link href="#" className={styles.link2}>
            10 Best Prescription Medicine &rarr;
          </Link>
        </div>

        <div className={styles.treat2}>
          <img src="/acnebody.png" alt="" /> <br /> <br />
          <br />
          <Link href="#" className={styles.link2}>
            Treating Acne on Different Parts of the Body &rarr;
          </Link>
        </div>

        <div className={styles.treat3}>
          <img src="/managing.png" alt="" /> <br />
          <br />
          <br />
          <Link href="#" className={styles.link2}>
            Managing Stress to Prevent Acne Breakouts &rarr;
          </Link>
        </div>
      </div>
      <br />
    </div>
  );
};

export default page;
