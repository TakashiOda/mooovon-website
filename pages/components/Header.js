import styles from '../../styles/Home.module.css'
import Link from 'next/link'
import Image from 'next/image'

const Header = () => (
    <div className={styles.header_container}>
      <Link href="/">
        <div className={styles.header_logo_box}>
          <Image src="/logo_icon.png" width={25} height={25} />
          <p>mooovon</p>
        </div>
      </Link>
      <div className={styles.header_link_box}>
        <Link href="/">
          <a className={styles.header_link}>mooovonとは</a>
        </Link>
        <Link href="/privacyPolicy">
          <a className={styles.header_link}>プライバシーポリシー</a>
        </Link>
      </div>
    </div>
)

export default Header