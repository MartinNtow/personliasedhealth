import Image from "next/image";
import styles from "./styles/page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <form>
          <br/><br/>
          <h2>Member Login</h2> <br/>
          <input type="email" placeholder="email@xyz" required/> <br/> <br/>

          <input type="password" placeholder="password" required/> <br/> <br/><br/>

          <button href='/Healthpage'>LOGIN</button> <br/><br/>

          <Link href="/Signup" className={styles.link1}>New User? Sign Up</Link>
        </form>
      </div>
          
      
    </main>
  )
}
