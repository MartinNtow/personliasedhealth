"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import {auth} from "../firebase/config";
import { useRouter } from "next/navigation";
import styles from "../styles/signup.module.css";

const SignUpPage = () => {
  const [Compassword, setComPassword] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginPhrase, setLoginPhrase] = useState(
    "Password should be at least 6 characters"
  );
  const [processPhrase, setProcessPhrase] = useState("Sign Up");
  const [isButtonDisabled, setButtonDisabled] = useState(false);

  const [createUserWithEmailAndPassword] =
    useCreateUserWithEmailAndPassword(auth);
  const router = useRouter();

  const handleSignUp = async (e) => {
    e.preventDefault(); // Prevent form submission
    setProcessPhrase("Signing up...");
    setButtonDisabled(true);

    if (password.length >= 6 && password === Compassword) {
      try {
        const res = await createUserWithEmailAndPassword(email, password);

        if (res) {
          setEmail("");
          setPassword("");
          setComPassword("");
          router.push("/");
        }
      } catch (error) {
        setLoginPhrase("Error signing up. Please try again.");
        console.error(error);
      } finally {
        setProcessPhrase("Sign Up");
        setButtonDisabled(false);
      }
    } else {
      if (password.length < 6) {
        setLoginPhrase("Password should be at least 6 characters.");
      } else if (password !== Compassword) {
        setLoginPhrase("Passwords do not match.");
      }
      setProcessPhrase("Sign Up");
      setButtonDisabled(false);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.form}>
        <h2>Registration Form</h2>
        <p className={styles["auth-SUphrase"]}>{loginPhrase}</p>
        <form onSubmit={handleSignUp}>
          <div className={styles.mail}>
            <input
              type="email"
              placeholder="Email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <input
              type="password"
              placeholder="Confirm Password"
              required
              value={Compassword}
              onChange={(e) => setComPassword(e.target.value)}
            />
          </div>
          <button type="submit" disabled={isButtonDisabled}>
            {processPhrase}
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUpPage;
