"use client";
import React, { useState } from "react";
import Link from "next/link";
import styles from "../styles/healthpage.module.css"
import Navbar from "../components/Navbar";
import { db } from "../firebase/config";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
// import { auth } from "@/app/firebase/config";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { auth } from "../firebase/config";
import Chatbot from "../components/chatbot"

const page = () => {
  const router = useRouter();
  const [user] = useAuthState(auth);
  const userSession =
    typeof window !== "undefined" ? sessionStorage.getItem("user") : null;
  useEffect(() => {
    if (!user && !userSession) {
      router.push("/");
    }
  }, []);
  const [Diseases, setDiseases] = useState([]);
  const [showChatbot, setShowChatbot] = useState(false);
  //getting data from firebase
  useEffect(() => {
    const reference = collection(db, "diseases");

    const dbQuery = query(reference, orderBy("id", "asc"));

    onSnapshot(dbQuery, (querySnapshot) => {
      let i = 1;

      // Load data to Array
      setDiseases(
        querySnapshot.docs.map((doc) => {
          let data = doc.data();

          return {
            ...data,
          };
        })
      );
    });

  }, []);

  const toggleChatbot = () => {
    setShowChatbot(!showChatbot);
  };
  //this is the heealthpa
  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <div className={styles.header}>
          <h1>Wellness Mindset</h1>
        </div>

        <div className={styles.container}>
         
          <div className={styles.gridContainer}>
            {Diseases.map((Disease) => (
              <div className={styles.gridItem} key={Disease.id}>
                <Link href={`/${Disease.id}`}>
                  <button>{Disease.name}</button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
      <button className={styles.toggleButton} onClick={toggleChatbot}>
        Chat with us!
      </button>
      {showChatbot && (
        <div className={styles.chatbotWrapper}>
          <Chatbot className={styles.chatbotComponent} />
        </div>
      )}

            
    </>
  );
};

export default page;
