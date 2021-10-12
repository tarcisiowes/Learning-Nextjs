import styles from "./integracao.module.css"

export default function integracao() {
  return (
    <div id={styles.integracao}>
      <div className={styles.vermelha}>texto</div>
      <div className={styles.azul}>texto</div>
      <div className={styles.branca}>texto</div>
    </div>
  )
}