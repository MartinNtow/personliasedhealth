"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "./styles/page.module.css";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "@/app/firebase/config";
import { useRouter } from "next/navigation";
import { useAuthState } from "react-firebase-hooks/auth";
import Link from "next/link";
export default function Home() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginPhrase, setLoginPhrase] = useState("");
  const [processPhrase, setProcessPhrase] = useState("Sign In");
  const userSession =
    typeof window !== "undefined" ? sessionStorage.getItem("user") : null;
  const [user] = useAuthState(auth);
  const [state, setState] = useState(false);
  const [signInWithEmailAndPassword] = useSignInWithEmailAndPassword(auth);
  const router = useRouter();

  const [loginButtonDisable, setloginButtonDisable] = useState(false);
  const [openSignUpDisable, setAopenSignUpDisable] = useState(false);

  const handleSignIn = async () => {
    setProcessPhrase("signing in...");
    setloginButtonDisable(true);
    await signInWithEmailAndPassword(email, password)
      .then((res) => {
        //  console.log(res._tokenResponse.registered);
        if (res._tokenResponse.registered) {
          router.push("/Healthpage");
          setState(false);
          setLoginPhrase("");
          setProcessPhrase("Sign In");
          setloginButtonDisable(false);
          sessionStorage.setItem("user", true);
        }

        setEmail("");
        setPassword("");
        setState(true);
        setloginButtonDisable(false);
      })
      .catch((e) => {
        console.error(e);
        setProcessPhrase("Sign In");
        setloginButtonDisable(false);
        setLoginPhrase("please check credentials");
        setProcessPhrase("Sign In");
        setloginButtonDisable(false);
      });
  };
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <form>
          <br />
          <br />
          <h2>Member Login</h2> <br />
          <p className={styles.authPhrase}>{loginPhrase}</p>
          <input
            type="email"
            placeholder="email@xyz"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />{" "}
          <br /> <br />
          <input
            type="password"
            placeholder="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />{" "}
          <br /> <br />
          <br />
          <button disabled={loginButtonDisable} onClick={() => handleSignIn()}>
            {processPhrase}
          </button>{" "}
          <br />
          <br />
          <Link href="/Signup" className={styles.link1}>
            New User? Sign Up
          </Link>
        </form>
      </div>
    </main>
  );
}
