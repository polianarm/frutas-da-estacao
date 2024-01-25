import { useEffect, useState } from "react";
import styles from "./Header.module.css";

export default function Header() {
  const [backgroundImg, setBackgroundImg] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setBackgroundImg(true);
      } else {
        setBackgroundImg(false);
      }
      console.log("Scrolling");
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={backgroundImg ? styles["header-active"] : ""}>
      <h2>FRUTAS DA ESTAÇÃO</h2>
      <nav className={styles.nav}>
        <a href="#">HOME</a>
        <a href="#frutas">FRUTAS</a>
      </nav>
    </header>
  );
}
