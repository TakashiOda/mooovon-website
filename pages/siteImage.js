import Layout from './components/Layout.js'
import styles from '../styles/Home.module.css'
import Image from 'next/image'

export default function siteImage() {
  return (
    <div className={styles.container}>
      <Layout>
        <div className={styles.content_inner}>
          <Image
            src="/mooovon_ogp.png"
            width={1200}
            height={630}
          />
        </div>
      </Layout>
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
    </div>
  )
}