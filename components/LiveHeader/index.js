import styles from "@/styles/LiveHeader.module.css";

export default function LiveHeader() {
  return (
    <>
      <header className={`${styles.header}`}>
        <div className={styles.main}>
          <span className={styles.channel}>2</span>
          <div className={styles.name}>Somewhere Travel</div>
          <div className={styles.country}>Berlin</div>
        </div>
        <div className={styles.sidebarfirst}>Live now</div>
        <div className={styles.sidebarsecond}>
          <span className={styles.channel}>2</span>
          <div className={styles.name}>Astral Travelled</div>
          <div className={styles.country}>London</div>
        </div>
      </header>
    </>
  );
}
