import styles from '../styles/Home.module.css'
import Image from 'next/image'

const Main = (props) => (
  <div className={styles.content_inner}>
    <section className={styles.main_top_section}>
      <div className={styles.main_top_section_left}>
        <div className={styles.main_top_section_image_box}>
          <Image
            src="/mooovon_mockup02.png"
            width={550}
            height={550}
            className={styles.main_top_section_image}
          />
        </div>
      </div>
      <div className={styles.main_top_section_right}>
        <div className={styles.main_top_section_right_image_box}>
          <Image
            src="/icon_color02.png"
            width={80}
            height={80}
            className={styles.main_top_section_right_image}
          />
        </div>
        <p className={styles.main_top_section_appname}>mooovon</p>
        <p className={styles.main_top_section_subtext}>仲間と目標達成するアプリ</p>
        <div className={styles.main_top_section_right_image_box}>
          <Image
            src="/ios_download_image.png"
            width={100}
            height={28.4}
            className={styles.main_top_section_right_image}
          />
        </div>
      </div>
    </section>
    <section className={styles.main_section_gray}>
      <div className={styles.main_section_inner}>
        <div className={styles.main_section_title_box}>
          <h4 className={styles.main_section_title_english_01}>ABOUT</h4>
          <h2 className={styles.main_section_title_japanese}>mooovonについて</h2>
        </div>
        <div className={styles.main_section_content}>
          <div className={styles.main_section_content_image}>
            <div className={styles.main_section_content_image_box}>
              <Image
                src="/trouble_image.png"
                width={200}
                height={200}
              />
            </div>
          </div>
          <div className={styles.main_section_content_text_right}>
            <h4 className={styles.main_section_content_title}>目標はあるけど、モチベが上がらない</h4>
            <p className={styles.main_section_content_text}>
              あああああああああああああああああああああああああああああああああ
              ああああああああああああああああああああああああああああああああああ
              あああああああああああああああああああああああああああああああああ
            </p>
          </div>
        </div>
      </div>
    </section>
    <section className={styles.main_section_white}>
      <div className={styles.main_section_inner}>
        <div className={styles.main_section_title_box}>
          <h4 className={styles.main_section_title_english_02}>FEATURES</h4>
          <h2 className={styles.main_section_title_japanese}>mooovonでできること</h2>
        </div>
        <div className={styles.main_section_content_features_box}>
          <div className={styles.main_section_content_feature_item}>
            <div className={styles.main_section_content_text_left}>
              <h4 className={styles.main_section_feature_title}>1. リアルタイムでアクション共有</h4>
              <p className={styles.main_section_feature_text}>
                あああああああああああああああああああああああああああああああああ
                ああああああああああああああああああああああああああああああああああ
                あああああああああああああああああああああああああああああああああ
              </p>
            </div>
            <div className={styles.main_section_content_image}>
              <div className={styles.main_section_content_image_box}>
                <Image
                  src="/about_image.png"
                  width={220}
                  height={220}
                />
              </div>
            </div>
          </div>
          <div className={styles.main_section_content_feature_item}>
            <div className={styles.main_section_content_image}>
              <div className={styles.main_section_content_image_box}>
                <Image
                  src="/log_image.png"
                  width={220}
                  height={220}
                  className={styles.main_top_section_right_image}
                />
              </div>
            </div>
            <div className={styles.main_section_content_text_right}>
              <h4 className={styles.main_section_feature_title}>2. 目標とアクションをログに残す</h4>
              <p className={styles.main_section_feature_text}>
                あああああああああああああああああああああああああああああああああ
                ああああああああああああああああああああああああああああああああああ
                あああああああああああああああああああああああああああああああああ
              </p>
            </div>
          </div>
          <div className={styles.main_section_content_feature_item}>
            <div className={styles.main_section_content_text_left}>
              <h4 className={styles.main_section_feature_title}>3. チームデータでやる気UP</h4>
              <p className={styles.main_section_feature_text}>
                あああああああああああああああああああああああああああああああああ
                ああああああああああああああああああああああああああああああああああ
                あああああああああああああああああああああああああああああああああ
              </p>
            </div>
            <div className={styles.main_section_content_image}>
              <div className={styles.main_section_content_image_box}>
                <Image
                  src="/team_data.png"
                  width={220}
                  height={220}
                  className={styles.main_top_section_right_image}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className={styles.main_section_gray}>
      <div className={styles.main_section_inner}>
        <div className={styles.main_section_title_box}>
          <h4 className={styles.main_section_title_english_03}>FOR WHO</h4>
          <h2 className={styles.main_section_title_japanese}>こんな人に向いています</h2>
        </div>
        <div className={styles.main_section_content}>
          <div className={styles.main_section_content_image}>
            <div className={styles.main_section_content_image_box}>
              <Image
                src="/icon_color02.png"
                width={80}
                height={80}
                className={styles.main_top_section_right_image}
              />
            </div>
          </div>
          <div className={styles.main_section_content_text_right}>
            <h4 className={styles.main_section_content_title}>やりたいけどついサボってしまうことがある</h4>
            <p className={styles.main_section_content_text}>
              あああああああああああああああああああああああああああああああああ
              ああああああああああああああああああああああああああああああああああ
              あああああああああああああああああああああああああああああああああ
            </p>
          </div>
        </div>
      </div>
    </section>
    <section className={styles.main_section_white}>
      <div className={styles.main_section_inner}>
        <div className={styles.main_section_title_box}>
          <h4 className={styles.main_section_title_english_04}>START NOW</h4>
          <h2 className={styles.main_section_title_japanese}>さあ、はじめよう</h2>
        </div>
        <div className={styles.main_section_content}>
          <div className={styles.main_section_content_text_left}>
            <h4 className={styles.main_section_content_title}>チームなら前に進める</h4>
            <p>
              あああああああああああああああああああああああああああああああああ
              ああああああああああああああああああああああああああああああああああ
              あああああああああああああああああああああああああああああああああ
            </p>
          </div>
          <div className={styles.main_section_content_image}>
            <div className={styles.main_section_content_image_box}>
              <Image
                src="/icon_color02.png"
                width={80}
                height={80}
                className={styles.main_top_section_right_image}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default Main