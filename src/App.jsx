import { Header } from "./components/Header"
import { Post } from "./post"
import style from './App.module.css'

import './global.css'
import { Sidebar } from "./components/Sidebar"

export function App() {
  return (
    <div>
      <Header />

      <div className={style.wrapper}>
        <Sidebar />
        <main>
          <Post author="rainara"
        content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam illum nemo aut, eius sed dicta tempore neque velit aspernatur, quas illo, veritatis id ipsum officia? Saepe vero laudantium nihil provident. aaaaaaaa"
          />
        <Post author="paula costa"
        content="uma nova postagem foi feita"
        />
        </main>
      </div>
    </div>
  )
}
 

