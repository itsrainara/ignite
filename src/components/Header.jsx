import styles from  './Header.module.css';

export function Header () {
  return (
    //está vindo de uma variavel js {}
    <header className={styles.header}>
      <strong>Ignite Feed</strong>
    </header>
  )
}