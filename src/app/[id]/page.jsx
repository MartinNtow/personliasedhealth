"use client";

import React, { useState } from "react";
import styles from "../styles/demantia.module.css";
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
          </div>
       
        <br />
        <br />
        <br />
      </div>
    ))}
    </>
  );
};

export default page;
