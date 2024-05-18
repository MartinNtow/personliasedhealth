import React from "react";
import Link from "next/link";
import styles from "../styles/allergies.module.css";

const page = () => {
  return (
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
      <div className={styles.listitems}>
        <div className={styles.treat1}>
          <img src="/nasalspray.png" alt="" /> <br />
          <br />
          <br />
          <Link href="#" className={styles.link2}>
            Top 10 Best Nasal Spray for Allergies &rarr;
          </Link>
        </div>

        <div className={styles.treat2}>
          <img src="/alleprescription.png" alt="" /> <br /> <br />
          <br />
          <Link href="#" className={styles.link2}>
            Top 7 Prescriptions Medications for Severe Allergies &rarr;
          </Link>
        </div>

        <div className={styles.treat3}>
          <img src="/nasaloral.png" alt="" /> <br />
          <br />
          <br />
          <Link href="#" className={styles.link2}>
            Nasal Spray vs Oral Medications &rarr;
          </Link>
        </div>

        <div className={styles.treat4}>
          <img src="/skin.png" alt="" /> <br />
          <br />
          <br />
          <Link href="#" className={styles.link2}>
            Skin Allergies: 4 Natural Remedies YouCan Try at Home &rarr;
          </Link>
        </div>
      </div>
      <br />
    </div>
  );
};

export default page;
