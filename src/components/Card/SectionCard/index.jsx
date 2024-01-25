import CardItem from "../CardItem";
import styles from "./SectionCard.module.css";
import frutas from "../../../data/frutas.json";

export default function SectionCard() {
  return (
    <section id="frutas" className={styles.section}>
      <h2 className={styles.titleSection}>BUSCAR FRUTAS</h2>

      <div className={styles.sectionCard}>
        {frutas.map((item, index) => (
          <CardItem key={index} {...item} />
        ))}
      </div>
    </section>
  );
}
