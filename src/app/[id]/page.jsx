"use client";

import React, { useState } from "react";
import styles from "../styles/details.module.css";
import Link from "next/link";
import { db } from "../firebase/config";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";

import { useEffect } from "react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import Navbar from "../components/Navbar";

const page = () => {
  const router = usePathname();
  const [Details, setDetails] = useState([]);
  const [filtered, setFilterd] = useState([]);
  useEffect(() => {
    const reference = collection(db, "details");
    const dbQuery = query(reference, orderBy("id", "asc"));

    onSnapshot(dbQuery, (querySnapshot) => {
      let i = 1;

      // Load data to Array
      setDetails(
        querySnapshot.docs.map((doc) => {
          let data = doc.data();

          return {
            id: doc.id,
            index: i++,
            ...data,
          };
        })
      );
    });
  }, []);
  useEffect(() => {
    setFilterd(
      Details.filter((user) => user.id === router)
      //  setStudents(filtered)
    );
  }, [Details]);

  return (
    <>
      <Navbar />
      {filtered.map((fil) => (
        <div className={styles.container}>
          <div className={styles.container1}>
            <div className={styles.seminav}>
              <p>
                <Link href="/Healthpage" className={styles.link1}>
                  Personalized Health & Wellness
                </Link>{" "}
                &rarr; {fil.name}
              </p>
            </div>

            <div className={styles.heading} key={fil.id}>
              <h1>{fil.name}</h1>
              <p>{fil.exp}</p> <br /><br /><br />
              <h2>Symptoms of {fil.name}</h2>
            </div>

            {fil.symptom.map((sym) => (
              <ul> 
                <li>- {sym}</li>
              </ul>
            ))}
            <div className={styles.addition}>
            {fil.additional.map((add) => (
              <ul>
                <li>- {add}</li>
              </ul>
            ))}
            </div>
            <img src={fil.image} alt="" /> <br/><br /><br /><br />

            <div className={styles.treatment}>
              <h2>
              Things you can try if you have {fil.name}
              </h2>
              <p>These techniques may be useful:</p>
              {fil.treatments.map((treat) => ( 
              <ul>
                <li>- {treat}</li>
              </ul>
            ))}
            </div> <br /><br /><br />

            <div className={styles.advice}>
              <h2>When to seek medical advice</h2>
              {fil.advices.map((advice) => (
              <ul>
                <li>- {advice}</li>
              </ul>
              ))}
            </div>

            <br />
            <br />
            </div>
        </div>
      ))}
    </>
  );
};

export default page;
