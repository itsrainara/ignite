import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'

export function Comment () {
  return (
    <div className={styles.Comment}>
      <img src="https://github.com/itsrainara.png" alt="" />

        <div className={styles.commentBox}>
          <div className={styles.commentContent}>
            <header>
              <div className={styles.authorAndTime}>
                <strong>Rainara Silva</strong>
                <time title='12 de dezembro de 2022 ás 12:41h' dateTime='2022-12-15 12:39:45'>Cerca de 1h atrás</time>
              </div>
              <button title='Deletar comentário'>
                <Trash size={20} />
              </button>
            </header>

          <p>Muito bom Devon, parabéns!! 👏👏</p>
          </div>
           <footer>
            <button>
              <ThumbsUp />
              Aplaudir <span>20</span>
            </button>
           </footer>
        </div>

    </div>
  )
}