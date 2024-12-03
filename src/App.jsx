import { Header } from './components/Header'
import { Post } from './Post'
import styles from './App.module.css'
import './global.css'
import { Sidebar } from './components/SideBar'

export function App() {


  return (
    <div>
       <Header />
       <div className={styles.wrapper}>
          <Sidebar />
          <main>
           <Post
            author="Angelo"
            content="teste1"
           />
           <Post
            author="Rafael"
            content="teste222"
           />
          </main>
       </div>
    </div>
   
  )
}


