import Layout from './components/Layout.js'
import styles from '../styles/Home.module.css'
import Image from 'next/image'


export default function aboutUs() {
  return (
    <div className={styles.container}>
      <Layout>
        <div className={styles.content_inner}>
          <section className={styles.about_us_section}>
            <h4>mooovon運営チーム</h4>
            <div className={styles.team_member_box}>
              <div className={styles.team_member_item}>
                <Image
                  src="/member_icon01.png"
                  width={100}
                  height={100}
                  layout={'fixed'}
                  className={styles.team_member_icon}
                />
                <p className={styles.team_member_name}>Takashi Oda</p>
                <p className={styles.team_member_profile}>デザイン＆開発担当。走って健康になりたけど自分に甘いのでなかなか腰が上がらない。猫を飼っている。</p>
              </div>
              <div className={styles.team_member_item}>
                <Image
                  src="/member_icon02.png"
                  width={100}
                  height={100}
                  layout={'fixed'}
                  className={styles.team_member_icon}
                />
                <p className={styles.team_member_name}>Junki Hori</p>
                <p className={styles.team_member_profile}>開発担当。やりたいことがいろいろあるけどついついサボってしまう。油そばが好き。</p>
              </div>
            </div>
          </section>
        </div>
      </Layout>
    </div>
  )
}