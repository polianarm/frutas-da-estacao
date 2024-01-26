import CardItem from "../CardItem";
import styles from "./SectionCard.module.css";
import frutas from "../../../data/frutas.json";

export default function SectionCard() {
  return (
    <section id="frutas" className={styles.section}>
      {/* buscar por nome */}

      <div className={styles.filtroNome}>
        <h2 className={styles.titleSection}>BUSCAR FRUTAS</h2>
        <input
          type="text"
          value=""
          onChange=""
          placeholder="Digite o nome da fruta"
        />
      </div>

      {/* busca por sabor */}

      <div className={styles.filtroSabor}>
        <p>Sabor</p>
        <select value="All" onChange="">
          <option value="All">Todos</option>
          <option value="Doce">Doce</option>
          <option value="Ácido">Ácido</option>
          <option value="Agridoce">Agridoce</option>
        </select>
      </div>

      {/* buscar por estação */}

      <div></div>

      {/* ordenar por nome crescente ou decrescente */}

      <div></div>

      <div className={styles.sectionCard}>
        {frutas.map((item, index) => (
          <CardItem key={index} {...item} />
        ))}
      </div>
    </section>
  );
}
