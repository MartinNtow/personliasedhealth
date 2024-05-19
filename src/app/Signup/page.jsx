"use client";
import React, { useEffect } from "react";
import styles from "../styles/signup.module.css";
import Link from "next/link";
import { useState } from "react";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "@/app/firebase/config";
import { useRouter } from "next/navigation";

const page = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [Compassword, setComPassword] = useState("");
  const [loginPhrase, setLoginPhrase] = useState(
    "password should be at least 6 characters"
  );
  const [processPhrase, setProcessPhrase] = useState("Sign Up");
  const [state, setState] = useState(false);
  const [isButtonDisabled, setButtonDisabled] = useState(false);

  const [createUserWithEmailAndPassword] =
    useCreateUserWithEmailAndPassword(auth);
  const router = useRouter();
  

  const handleSignUp = async () => {
    setProcessPhrase("signing up...");
    setButtonDisabled(true);

    if (password.length >= 6 && password == Compassword) {
      try {
      await createUserWithEmailAndPassword(email, password);
        setState(true);
        router.push("/");
        sessionStorage.setItem("user", true);
        setEmail("");
        setPassword("");
      } catch (e) {
        setState(false);
        console.error(e);
        setProcessPhrase("Sign Up");
      }
    } else if (password.length < 6) {
      setLoginPhrase("please check password");
      router.push("./Signup");
      setProcessPhrase("Sign Up");
      setButtonDisabled(false);
    } else if (password != Compassword) {
      alert("password mismatch");
    } else {
      setLoginPhrase("can't login");
      setProcessPhrase("Sign Up");
      setButtonDisabled(false);
    }

    // if (state === true) {

    //   setLoginPhrase("password should be atleeast 6 characters ");
    //   setProcessPhrase("Sign Up");
    // } else if (password.length < 6) {

    // } else{
    //   setLoginPhrase("Please Check sign up details");
    //   setState(false);
    // }
  };
  return (
    <div className={styles.container}>
      <div className={styles.form}>
        {" "}
        <br />
        <br />
        <h2>Registration Form</h2> <br />
        <p className={styles["auth-SUphrase"]}>{loginPhrase}</p>
        <form action="">
          <div className={styles.mail}>
            <input
              type="email"
              placeholder="Email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />{" "}
            <br />
            <br />
            <input
              type="password"
              placeholder="Password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />{" "}
            <br />
            <br />
            <input
              type="password"
              placeholder="Confirm Password"
              required
              value={Compassword}
              onChange={(e) => setComPassword(e.target.value)}
            />{" "}
            <br />
            <br />
          </div>{" "}
          <br />
          <br />
          <button disabled={false} onClick={() => handleSignUp()} >
            {processPhrase}
          </button>
        </form>
      </div>
    </div>
  );
};

export default page;
