import Link from "next/link";
import styles from "@/styles/nav.module.css";
export default function Nav() {
  return (
    <>
      <ul className={styles.nav}>
        <li>
          <Link href="/">LATEST</Link>
        </li>
        <li>
          <Link href="/mixes">MIXES</Link>
        </li>
        <li>
          <Link href="/about">ABOUT</Link>
        </li>
        <li>
          <Link href="/mixes">EVENTS</Link>
        </li>
        <li>
          <Link href="/login">LOGIN</Link>
        </li>
        <input
          className={styles.search}
          type="search"
          placeholder="Search..."
        ></input>
      </ul>
    </>
  );
}
