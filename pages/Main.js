import styles from '../styles/Home.module.css'
import Image from 'next/image'

const Main = (props) => (
  <div className={styles.content_inner}>
    <section className={styles.main_top_section}>
      <div className={styles.main_top_section_left}>
        <div className={styles.main_top_section_image_box}>
          <Image
            src="/mooovon_mockup02.png"
            width={450}
            height={450}
            // layout={'fixed'}
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
        <p className={styles.main_top_section_subtext}>同じ目標を持つ仲間と</p>
        <p className={styles.main_top_section_subtext}>行動をリアルタイム共有して</p>
        <p className={styles.main_top_section_subtext}>みんなで前進するアプリ</p>
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
              mooovon（ムーボン）は、目標はあるけど一人ではやる気が出ない人のためのアプリです。<br />
              同じような目標を持つ仲間同士で、今やっている目標へのアクションをリアルタイム共有でき、
              あなたのモチベーションを高めて前に進める環境を提供します。
            </p>
          </div>
        </div>
      </div>
    </section>
    <section className={styles.main_section_white}>
      <div className={styles.main_section_inner}>
        <div className={styles.main_section_title_box}>
          <h4 className={styles.main_section_title_english_02}>FOR WHO</h4>
          <h2 className={styles.main_section_title_japanese}>こんな人に向いています</h2>
        </div>
        <div className={styles.main_section_content_imageRight}>
          <div className={styles.main_section_content_text_left}>
            <h4 className={styles.main_section_content_title}>やった方がいいけど気が進まないこと</h4>
            <p className={styles.main_section_content_text_multicolumn}>
              勉強や新しい学習、エクササイズなど...やった方がいいとはわかっているけど、なかなか気が進まないことはありませんか？
            </p>
            <p className={styles.main_section_content_text_multicolumn}>
              そんなアクションを進めるため、みんなが黙々とアクションを起こしている緊張感のある自習室のような環境が欲しいと思う人に向いています。
            </p>
          </div>
          <div className={styles.main_section_content_image}>
            <div className={styles.main_section_content_image_box}>
              <ul className={styles.main_section_content_image_ul}>
                <li className={styles.main_section_catefory_image_item}>
                  <Image
                    src="/category-02.png"
                    width={80}
                    height={80}
                    className={styles.main_top_section_right_image}
                  />
                  <p>勉強</p>
                </li>
                <li className={styles.main_section_catefory_image_item}>
                  <Image
                    src="/category-05.png"
                    width={80}
                    height={80}
                    className={styles.main_top_section_right_image}
                  />
                  <p>プログラミング</p>
                </li>
                <li className={styles.main_section_catefory_image_item}>
                  <Image
                    src="/category-03.png"
                    width={80}
                    height={80}
                    className={styles.main_top_section_right_image}
                  />
                  <p>エクササイズ</p>
                </li>
                <li className={styles.main_section_catefory_image_item}>
                  <Image
                    src="/category-04.png"
                    width={80}
                    height={80}
                    className={styles.main_top_section_right_image}
                  />
                  <p>読書</p>
                </li>
              </ul>
              
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className={styles.main_section_gray}>
      <div className={styles.main_section_inner}>
        <div className={styles.main_section_title_box}>
          <h4 className={styles.main_section_title_english_03}>FEATURES</h4>
          <h2 className={styles.main_section_title_japanese}>mooovonでできること</h2>
        </div>
        <div className={styles.main_section_content_features_box}>
          <div className={styles.main_section_content_feature_item_reverse}>
            <div className={styles.main_section_content_text_left}>
              <h4 className={styles.main_section_feature_title}>1. リアルタイムでアクションを共有</h4>
              <p className={styles.main_section_feature_text}>
                同じ目標を持つ人が集まるコミュニティに参加し、アクション実行ボタンを押すと、他のメンバーにあなたが今どんなアクションを進めているかがリアルタイムで共有されます。
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
              <h4 className={styles.main_section_feature_title}>2. アクションをログに残す</h4>
              <p className={styles.main_section_feature_text}>
                あなたが達成したいゴール（目標）プロジェクトの中に、複数のアクション（行動）を作成できます。
                そしてアクションを実行する度に、ログ（記録）が残っていき、何をどれだけ頑張ったがひと目で分かります。
              </p>
            </div>
          </div>
          <div className={styles.main_section_content_feature_item_reverse}>
            <div className={styles.main_section_content_text_left}>
              <h4 className={styles.main_section_feature_title}>3. チームデータの蓄積でやる気UP</h4>
              <p className={styles.main_section_feature_text}>
                同じチームに参加しているメンバーがアクションを実行すると、自分のログとは別にチームにもチームログが蓄積されます。
                みんなでどれだけアクションを実行したか、今日何人のメンバーがアクションを実行したかが分かります。
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
    <section className={styles.main_section_white}>
      <div className={styles.main_section_inner}>
        <div className={styles.main_section_title_box}>
          <h4 className={styles.main_section_title_english_04}>START NOW</h4>
          <h2 className={styles.main_section_title_japanese}>さあ、はじめよう</h2>
        </div>
        <div className={styles.main_section_content}>
          <div className={styles.main_section_content_text_left}>
            <h4 className={styles.main_section_content_title_last}>まもなくios α版リリース</h4>
            <p className={styles.main_section_content_text}>
              2020年12月はじめにα版をリリース予定！mooovonは無料で使えるアプリです。以下のapple storeリンクからダウンロードしてください。
              フィードバックも随時受け付けていますので、こんな機能があったら嬉しいなどもご意見もお寄せください。
            </p>
            <div className={styles.main_top_section_right_image_box}>
              <Image
                src="/ios_download_image.png"
                width={150}
                height={42}
                className={styles.main_top_section_right_image}
              />
            </div>
          </div>
          <div className={styles.main_section_content_image}>
            <div className={styles.main_section_content_image_box}>
              <Image
                src="/mooovon_mockup_splash.png"
                width={400}
                height={400}
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