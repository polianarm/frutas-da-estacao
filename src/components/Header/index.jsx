import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <h2>Frutas da estação</h2>
      <nav className={styles.nav}>
        <a href="#">Home</a>
        <a href="#">Frutas</a>
      </nav>
    </header>
  );
}
