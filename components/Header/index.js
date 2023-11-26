import styles from "@/styles/header.module.css";
import Nav from "@/components/Nav";
export default function Header() {
  return (
    <>
      <header className={`${styles.header}`}>
        <Nav />
      </header>
    </>
  );
}
