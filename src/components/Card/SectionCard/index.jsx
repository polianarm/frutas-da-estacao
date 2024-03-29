import CardItem from "../CardItem";
import styles from "./SectionCard.module.css";
import frutas from "../../../data/frutas.json";
import { useState } from "react";
import { useEffect } from "react";

export default function SectionCard() {
  const [search, setSearch] = useState("");

  const [filterFlavor, setFilterFlavor] = useState("All");
  const [filterSeasons, setFilterSeasons] = useState("All");
  const [sort, setSort] = useState("Asc");

  const [seasons, setSeasons] = useState([]);

  function getSeasons() {
    const seasonsList = [];
  
    frutas.forEach((fruta) => {
      if (Array.isArray(fruta.estacao)) {
        // Se for uma lista, adiciona cada estação que ainda não está na lista
        fruta.estacao.forEach((estacao) => {
          if (!seasonsList.includes(estacao)) {
            seasonsList.push(estacao);
          }
        });
      } else {
        // Se for uma única estação, adiciona se ainda não está na lista
        if (!seasonsList.includes(fruta.estacao)) {
          seasonsList.push(fruta.estacao);
        }
      }
    });
  
    setSeasons(seasonsList);
  }
  
  

  useEffect(() => {
    getSeasons();
  }, []);

  //limpar formatações
  const clearFilters = () => {
    setSearch("");
    setFilterFlavor("All");
    setFilterSeasons("All");
    setSort("Asc");
  };

  return (
    <section id="frutas" className={styles.section}>
      {/* buscar por nome */}

      <div className={styles.filtroNome}>
        <h2 className={styles.titleSection}>BUSCAR FRUTAS</h2>
        <input
          type="text"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          placeholder="Digite o nome da fruta"
        />
      </div>

      {/* busca por sabor */}
      <div className={styles.cardFiltro}>
        <div className={styles.filtro}>
          <p>Sabor</p>
          <select
            value={filterFlavor}
            onChange={(event) => setFilterFlavor(event.target.value)}
          >
            <option value="All">Todos</option>
            <option value="Doce">Doce</option>
            <option value="Ácido">Ácido</option>
            <option value="Agridoce">Agridoce</option>
            <option value="Azedo">Azedo</option>
            <option value="Amargo">Amargo</option>
          </select>
        </div>

        {/* buscar por estação */}

        <div>
          <div className={styles.filtro}>
            <p>Estacão</p>
            <select
              value={filterSeasons}
              onChange={(event) => setFilterSeasons(event.target.value)}
            >
              <option value="All">Todos</option>
              {seasons.map((estacao, index) => (
                <option key={index} value={estacao}>
                  {" "}
                  {estacao}{" "}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* ordenar por nome crescente ou decrescente */}

        <div className={styles.filtro}>
          <p>Ordem alfabética</p>
          <div className={styles.filterButton}>
            <button className={styles.button} onClick={() => setSort("Asc")}>Asc</button>
            <button  className={styles.button} onClick={() => setSort("Desc")}>Desc</button>
          </div>
        </div>

        <div className={styles.filtro}>
          <button className={styles.buttonClear} onClick={clearFilters} >Limpar</button>
        </div>
      </div>

      <div className={styles.sectionCard}>
        {frutas
          .filter((fruta) =>
            filterFlavor === "All"
              ? true
              : filterFlavor === fruta.sabor
              ? true
              : false
          )
          .filter((fruta) =>
          filterSeasons === "All" || fruta.estacao.includes(filterSeasons)
          )
          .filter((fruta) =>
            fruta.nome.toLowerCase().includes(search.toLowerCase())
          )
          .sort((a, b) =>
            sort === "Asc"
              ? a.nome.localeCompare(b.nome)
              : b.nome.localeCompare(a.nome)
          )
          .map((item, index) => (
            <CardItem key={index} {...item} />
          ))}

        {frutas
          .filter((fruta) =>
            filterFlavor === "All"
              ? true
              : filterFlavor === fruta.sabor
              ? true
              : false
          )
          .filter((fruta) =>
          filterSeasons === "All" || fruta.estacao.includes(filterSeasons)
          )
          .filter((fruta) =>
            fruta.nome.toLowerCase().includes(search.toLowerCase())
          )
          .sort((a, b) =>
            sort === "Asc"
              ? a.nome.localeCompare(b.nome)
              : b.nome.localeCompare(a.nome)
          )
          .map((item, index) => <CardItem key={index} {...item} />).length ===
          0 && <p className={styles.informe}>Fruta não encontrada</p>}
      </div>
    </section>
  );
}
