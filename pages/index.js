import Layout from './components/Layout.js'
import styles from '../styles/Home.module.css'
import Main from './Main.js'

export default function Home() {
  return (
    <div className={styles.container}>
      <Layout>
        <Main />
      </Layout>
    </div>
  )
}

