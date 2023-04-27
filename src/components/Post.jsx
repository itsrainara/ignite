import { Avatar } from './Avatar';
import { Comment } from './Comment';
import styles from './Post.module.css';

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          < Avatar hasBorder="false" src="https://github.com/diego3g.png" />
          <div className={styles.authorInfo}>
            <strong>Rainara Silva</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <time title='12 de dezembro de 2022 ás 12:41h' dateTime='2022-12-15 12:39:45'>Publicado a 1h</time>
      </header>

      <div className={styles.content}>
        <p> Fala galeraa 👋</p>
        <p> Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat.   O nome do projeto é DoctorCare 🚀</p>
        <p> <a href=""> 👉 jane.design/doctorcare </a></p>
        <p>
          <a href=""> #novoprojeto </a> {' '}
          <a href=""> #nlw </a>{' '}
          <a href=""> #rocketseat </a>
        </p>
      </div>


      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea placeholder='Deixe seu comentário'></textarea>
        <footer>
          <button type='submit'>Publicar</button>
        </footer>
      </form>
      <div className={styles.commentList}>
        < Comment />
        < Comment />
        < Comment />
      </div>
    </article>
  )
}