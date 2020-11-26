import Head from 'next/head'
import Header from './Header'
import Footer from './Footer'
import styles from '../../styles/Home.module.css'

const Layout = (props) => (
  <div className={styles.main}>
    <Head>
      <title>mooovon</title>
      <link rel="icon" href="/favicon.ico" />
      <meta property="og:title" content="mooovon | リアルタイムアクション共有アプリ" key="title" />
      <meta property="og:site_name" content="mooovon" />
      <meta property="og:image" content="https://mooov-on.com/public/mooovon_ogp.png" />
    </Head>
    <Header />
    {props.children}
    <Footer />
    <Style />
  </div>
)

export default Layout


export function Style() {
  return (
    <style jsx global>{`
      html,
      body {
        padding: 0;
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
          Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
          sans-serif;
      }

      * {
        box-sizing: border-box;
      }
    `}</style>
  )
}