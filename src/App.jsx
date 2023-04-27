import { Header } from "./components/Header";
import { Post } from "./components/Post";
import styles from './App.module.css';
import { Sidebar } from "./components/Sidebar";

import './global.css';

//Author: {avatar_url: "" , name: "" , role: ""}
//publishedAt: Date
// content: String

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/itsrainara.png",
      name: "Rainara Silva",
      role: "Front-end Developer"
    },
    content: [
      { type: 'paragraph', content:'Falaa galeraaa'},
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no portifa. É um projeto que fiz no NLW Return. O nome do projeto é DoctorCare'},
      { type: 'link' , content: 'jane.design/doctorcare'},
    ],
    publishedAt: new Date('2023-02-22 16:35:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/66elDNIP6hdzmhFgPms16Q/513f814a2ffe9f142ad19d69b47e1abc/H0MKswdw.jpeg?w=1500&h=680&q=60&fit=fill&f=faces&fm=jpg&fl=progressive&auto=format%2Ccompress&dpr=1&w=1000&h=",
      name: "João Barbosa",
      role: "Back-end Developer"
    },
    content: [
      { type: 'paragraph', content:'Falaa galeraaa'},
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no portifa. É um projeto que fiz no NLW Return. O nome do projeto é DoctorCare'},
      { type: 'link' , content: 'jane.design/doctorcare'},
    ],
    publishedAt: new Date('2023-02-22 16:35:00'),
  },
]


export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
        
        </main>
      </div>
    </div>
  )
}
 

