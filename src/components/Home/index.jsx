import styles from "./Home.module.css";

export default function Home() {
  return (
    <div className={styles.home}>
      <div className={styles.homeText}>
        <h2>Explore o universo das frutas</h2>
        <h3>
          O Frutas da Estação destaca uma variedade de frutas com
          informações sobre suas estações de cultivo, cores, origens, sabores
          distintos e imagens ilustrativas. As frutas, provenientes de
          diferentes regiões do mundo, são também parte integrante da rica oferta
          frutífera do Brasil, e proporcionam uma experiência gustativa única ao
          longo das estações.
        </h3>
      </div>
    </div>
  );
}
