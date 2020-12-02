import Layout from './components/Layout.js'
import styles from '../styles/Home.module.css'

export default function privacyPolicy() {
  return (
    <div className={styles.container}>
      <Layout>
        <div className={styles.content_inner}>
          <div className={styles.policy_container_page_title}>
            <p className={styles.policy_container_page_title_sub}>mooovon プライバシーポリシー</p>
          </div>
          <div className={styles.policy_container_section_top}>
            <p>本プライバシーポリシーは、ユーザーが、『mooovon（ムーボン）』と称するサービス（以下「本サービス」といいます）を利用するに当たって、
              ①下記に記載するユーザーの情報（以下「ユーザー情報」といいます）をノースダッシュが収集、
              利用および共有する方法と ②ノースダッシュへの連絡方法について説明するものです。
              本プライバシーポリシーにおいて別段の定義がない限り、「mooovon（ムーボン）」利用規約において定義された用語は、
              本プライバシーポリシーにおいても該当するものとします。
              本プライバシーポリシーは、本サービスの利用に際して収集されるユーザー情報にのみ適用されます。
              本プライバシーポリシーをご一読いただいた上で、本サービスをご利用ください。
              なお、ユーザーが本サービスの利用を開始したことをもって、
              本プライバシーポリシーに同意いただいたものと見做させていただきます。
            </p>
          </div>
          <div className={styles.policy_container_section}>
            <p className={styles.policy_container_section_title}>1. 本サービスについて</p>
            <p>本サービスは、ある同じ目標（以下「ゴール」といいます）や同じタスク・習慣（以下「アクション」といいます）を身につけたい数名のユーザー同士が、
              本サービスに関連してノースダッシュがユーザーに提供するウェブアプリケーション・ソフトウェア
              （以下「本アプリケーション」といいます）上において、お互いに、アクションを実施した記録を
              共有し励まし合うことにより、当該チャレンジの達成を目的とする、ソーシャル・ネットワーキング・サービスです。
              データ等は、ノースダッシュが特定する機器を通じて、同じチャレンジに取り組んでいる他のユーザーが閲覧したり、
              ユーザーが指定する第三者に閲覧させたりすることができます。その他、本サービスの内容は、
              本アプリケーション上においてノースダッシュが案内するとおりとします。
              また、本サービスを通じてユーザーは公式チャレンジに参加することができます。</p>
          </div>
          <div className={styles.policy_container_section}>
            <p className={styles.policy_container_section_title}>2. 本サービスにて取得、利用するユーザーのユーザー情報</p>
            <div>
              <p>ノースダッシュは、本アプリケーションを通じて、以下に記載するユーザー情報を収集・利用致します。</p>
              <div>
                <p>(1) 本サービスの利用時にご登録いただくユーザー情報</p>
                <ul>
                  <li>・ユーザーが設定したニックネーム</li>
                  <li>・メールアドレス</li>
                </ul>
              </div>
              <div>
                <p>(2) 本サービスをご利用いただく中でご提供いただくユーザー情報</p>
                <ul>
                  <li>① ユーザーのプロフィール情報（ニックネーム、アイコン画像）</li>
                  <li>② ユーザーのチーム所属情報</li>
                  <li>③ ユーザーが本サービスにおいて記載した「ゴール」にかかる文書</li>
                  <li>④ ユーザーが本サービスにおいて記載した「アクション」にかかる文書</li>
                  <li>⑤ ユーザーが本サービスにおいて「アクション」を実施した際に記録されるログ</li>
                  <li>⑥ ユーザーが本サービスにおいて記載した「フィードバック」にかかる文書</li>
                </ul>
              </div>
              <div>
                <p>(3) 本サービスをご利用いただくことに伴い、自動的に収集させていただくユーザー情報</p>
                <ul>
                  <li>① 端末毎に初回起動時に自動発行する固有IDと紐づく、本アプリケーションでの操作履歴</li>
                </ul>
              </div>
              {/* <div>
                <p>(4) Google Analyticsを経由しGoogle Inc.に送付される情報</p>
                <ul>
                  <li>
                    <p>① お客様の本アプリケーションでの操作履歴</p>
                    <p>アクセスログの収集・解析にはGoogle Analyticsを使用しています。
                      Google Analyticsではクッキー（cookie）を使用し個人を特定する情報を含まずにログを収集します。
                      また、Google Analyticsの利用により取得されたアクセスログは、
                      Google Inc.のプライバシーポリシーに基づき管理されます。Google Inc.のプライバシーポリシーの詳細につきましては、こちら又はGoogle Inc.が随時提供するその他のURLをご確認ください。</p>
                  </li>
                  <li></li>
                </ul>
              </div> */}
            </div>
            <p></p>
          </div>
          <div className={styles.policy_container_section}>
            <p className={styles.policy_container_section_title}>3．ユーザー情報の第三者への提供</p>
            <div>
              <div>
                <p>(1) ユーザーが本アプリケーションを通じてチャレンジに参加した場合、当該ユーザーの以下のユーザー情報に対して、同じチームに参加している他のユーザーがアクセスできるものとします。</p>
                <ul>
                  <li>1. 本サービスにおける登録アイコン画像</li>
                  <li>2. ユーザーが設定したニックネーム</li>
                  <li>3. ユーザーが本サービスにおいて記載した「ゴール」にかかる文書</li>
                  <li>4. ユーザーが本サービスにおいて記載した「アクション」にかかる文書</li>
                </ul>
              </div>
              <div>
                <p>(3) ユーザーが本アプリケーションを通じてチャレンジに参加した場合、ノースダッシュは当該ユーザーに関する以下の個人が特定できないデータを、ノースダッシュが契約した特定の提携先に提供することがあります。</p>
                <ul>
                  <li>① ユーザーのプロフィール情報（ニックネーム、アイコン画像）</li>
                  <li>② ユーザーのチーム所属情報</li>
                  <li>③ ユーザーが本サービスにおいて記載した「ゴール」にかかる文書</li>
                  <li>④ ユーザーが本サービスにおいて記載した「アクション」にかかる文書</li>
                  <li>⑤ ユーザーが本サービスにおいて「アクション」を実施した際に記録されるログ</li>
                  <li>⑥ ユーザーが本サービスにおいて記載した「フィードバック」にかかる文書</li>
                </ul>
              </div>
            </div>
          </div>
          <div className={styles.policy_container_section}>
            <p className={styles.policy_container_section_title}>4. ユーザー情報の利用目的</p>
            <div>
              <div>
                <p>ノースダッシュは上記第2項に記載するユーザー情報を以下の目的のために利用します。別途、事前にユーザーの同意を得ることなく、ユーザー情報を他の利用目的で利用することはいたしません。</p>
                <ul>
                  <li>① 本サービスの提供</li>
                  <li>② 個人を特定しない形にて本サービスを改善するための、分析・統計資料作成</li>
                  <li>③ 本サービス内における、広告情報・コンテンツの表示</li>
                  <li>④ 個人を特定できない形での研究・マーケティング活動のための、分析・統計資料作成・提供</li>
                  <li>⑤ 個人を特定できないデータのノースダッシュと契約を結んだ特定の第三者への提供</li>
                  <li></li>
                </ul>
              </div>
            </div>
          </div>
          {/* <div className={styles.policy_container_section}>
            <p className={styles.policy_container_section_title}>5. 広告IDの取得とその利用目的</p>
            <div>
              <div>
                <p>本サービスを利用する際、広告ID(iOSアプリではIDFA(Advertising Identifier)、AndroidアプリではAAID(Android Advertising ID)を取得します。広告IDは以下の目的で使用されます。</p>
                <ul>
                  <li>① 広告の配信、ターゲティング</li>
                  <li>② 広告効果の測定、検証、報告</li>
                  <li>③ 広告効果の研究、改善</li>
                  <li>上記目的を達成する範囲内で、第三者へ広告IDを提供することがあります。ご希望の場合は、オプトアウトの設定を行うことにより、追跡型広告の停止を行うことができます。Android, iOS アプリ内広告におけるオプトアウトにつきましては、各端末の設定をご参照ください。</li>
                </ul>
              </div>
            </div>
          </div> */}
          <div className={styles.policy_container_section}>
            <p className={styles.policy_container_section_title}>5. 情報収集モジュールの利用</p>
            <div>
              <div>
                <p>ノースダッシュは、上記第4項①〜④に記載する目的において、本アプリおよび本サービスの機能とは独立した第三者による情報収集モジュールを利用することがあります。</p>
                <ul>
                  <li>Goolge Inc. / Google Firebase </li>
                  <li>Google Inc.のプライバシーポリシーの詳細につきましては、こちら又はGoogle Inc.が随時提供するその他のURLをご確認ください。</li>
                </ul>
              </div>
            </div>
          </div>
          <div className={styles.policy_container_section}>
            <p className={styles.policy_container_section_title}>6. 安全管理措置</p>
            <p>ノースダッシュは、ユーザーからお預かりしたユーザー情報は、上記第4、5項で挙げた利用目的の範囲内でのみ使用し、
              不正アクセス、改ざん、漏えいなどから守るべく適切な管理措置を講じます。
              しかしながら、ノースダッシュはユーザー情報が悪用される全てのリスクを排除することを完全に保証するものではありません。</p>
          </div>
          <div className={styles.policy_container_section}>
            <p className={styles.policy_container_section_title}>7. 本プライバシーポリシーの変更</p>
            <p>ノースダッシュは、本プライバシーポリシーを随時変更することができます。本プライバシーポリシーに重大な変更が加えられた場合、
              変更された旨が本アプリケーションを起動する際、その他ノースダッシュが適当と判断する方法にてユーザーに通知いたします。</p>
          </div>
          <div className={styles.policy_container_section}>
            <p className={styles.policy_container_section_title}>8. 問い合わせ窓口</p>
            <p>ユーザーによる本サービス又は本アプリケーションのご利用に伴い、
              取得および利用させていただくユーザー情報の照会・修正または削除を希望される場合には、
              以下の窓口までご連絡ください。可能な限り速やかに対応させて頂きます。</p>
            <p>問い合わせ窓口[個人情報に関する問い合わせ窓口情報]</p>
          </div>
          <div className={styles.policy_container_section_last}>
            <p className={styles.policy_container_section_last_text}>2020年11月25日制定</p>
          </div>
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