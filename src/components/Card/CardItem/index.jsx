import styles from "./CardItem.module.css";

export default function CardItem({ nome, estacao, origem, sabor, imagem }) {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.card}>
        <h2>{nome}</h2>
        <div className={styles.cardElements}>
          <img className={styles.imagem} src={imagem} alt=""></img>
          <div className={styles.cardInfo}>
            <p>
              Origem: <span>{origem}</span>
            </p>
            <p>
              Sabor: <span>{sabor}</span>
            </p>
            <p>
              Estação: <span>{estacao}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
