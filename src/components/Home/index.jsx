import styles from "./Home.module.css";

export default function Home() {
  return (
    <div className={styles.home}>
      <div className={styles.homeText}>
        <h2>Um site onde você pode saber mais sobre as frutas</h2>
        <h3>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt,
          quisquam porro. Voluptatibus iure rerum mollitia molestiae accusamus
          ex laboriosam, autem ad numquam illo blanditiis porro modi itaque
          expedita nostrum, maiores nobis officiis? Aliquam cupiditate sed autem
          tempore quas qui accusamus?
        </h3>
      </div>
    </div>
  );
}
