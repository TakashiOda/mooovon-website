import styles from '../../styles/Home.module.css'
import Link from 'next/link'

const Footer = () => (
  <footer className={styles.footer}>
    <div>
      <ul className={styles.footer_menu_list}>
        <li><Link href="/aboutUs">運営チーム</Link></li>
        <li><Link href="/privacyPolicy">プライバシーポリシー</Link></li>
      </ul>
    </div>
    <Link href="/">
      <div className={styles.footer_logo_box}>
        <p className={styles.footer_logo_title}>mooovon</p>
        <p className={styles.footer_logo_subtext}>move on with team</p>
      </div>
    </Link>
    <div className={styles.footer_copyright_box}>
      <p>©︎mooovon2020</p>
    </div>
  </footer>
)

export default Footer