import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <h2>FRUTAS DA ESTAÇÃO</h2>
      <nav className={styles.nav}>
        <a href="#">HOME</a>
        <a href="#">FRUTAS</a>
      </nav>
    </header>
  );
}
