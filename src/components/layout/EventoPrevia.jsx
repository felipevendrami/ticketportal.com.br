import styles from "./EventoPrevia.module.css";
import img from "../../imgs/test-img-evento.jpg";

function ProdutoPrevia({ eventos }) {
  return (
    <content className={styles.content}>
      <img className={styles.img} src={img} alt="img-evento" />
      <div className={styles.div}>
        <span className={styles.span_title}>Nome do Evento</span>
        <span className={styles.span_info}>Ibirama</span>
        <span className={styles.span_info}>31/12/2023</span>
      </div>
    </content>
  );
}

export default ProdutoPrevia;
