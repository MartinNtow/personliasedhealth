import Image from "next/image";
import styles from "./styles/page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.main}>
     <p>
      this is the sign up page
     </p>
     <Link href="/Home">Home</Link>
    </main>
  );
}
