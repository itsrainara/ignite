import { Header } from "./components/Header"
import { Post } from "./post"

import './global.css'

export function App() {
  return (
    <div>
      <Header />

    
      <Post author="rainara"
       content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam illum nemo aut, eius sed dicta tempore neque velit aspernatur, quas illo, veritatis id ipsum officia? Saepe vero laudantium nihil provident. aaaaaaaa"
        />
      <Post author="paula costa"
      content="uma nova postagem foi feita"
      />
    </div>
  )
}
 

