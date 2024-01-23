import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <ul className={styles.list}>
        <li className={styles.item}>
          <button to="/" className={styles.button}>
            Home
          </button>
        </li>
        <li className={styles.item}>
          <button to="/" className={styles.button}>
            Cards
          </button>
        </li>
        
      </ul>

      
    </header>
  );
}
