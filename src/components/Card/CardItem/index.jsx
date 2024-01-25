import styles from "./CardItem.module.css";

// id": 1,
//     "nome": "Manga",
//     "estacao": ["Verão", "Primavera"],
//     "cores": [{"cor": "Amarelo"}, {"cor":"Verde"}],
//     "origem": "Ásia",
//     "sabor": "Doce",
//     "imagem":

export default function CardItem({nome, estacao, origem, sabor, imagem}) {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.card}>
        <h2>{nome}</h2>
        <div className={styles.cardElements}>
        <img  className={styles.imagem}
          src={imagem}
          alt=""
        ></img>
        <div className={styles.cardInfo}>
        <span>{origem}</span>
        <span>{sabor}</span>
        <span>{estacao}</span>
        </div>
        </div>
      </div>

      {/* <div className={styles.card}>
        <h2>Morango</h2>
        <div className={styles.cardElements}>
        <img
          src="https://img.freepik.com/fotos-premium/um-desenho-de-morangos-e-flores-com-uma-flor-branca_763713-4373.jpg"
          alt=""
        ></img>
        <span>Ásia</span>
        <span>Doce</span>
        <span>Verão e Primavera</span>
        </div>
      </div>
      <div className={styles.card}>
        <h2>Banana</h2>
        <div className={styles.cardElements}>
        <img
          src="https://d1o6h00a1h5k7q.cloudfront.net/imagens/img_m/26919/13016418.jpg"
          alt=""
        ></img>
        <span>Ásia</span>
        <span>Doce</span>
        <span>Verão e Primavera</span>
        </div>
      </div> */}
    </div>
  );
}
