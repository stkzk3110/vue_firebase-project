<template>
  <div id="skill">
    <div>
      <section class="skill_section">
        <div class="container">
          <article>
            <h2 class="history_h2">My History</h2>
            <div class="history_box">
              <table class="history_table">
                <tbody>
                  <tr>
                    <td class="history">2016/03~</td>
                    <td class="history-section">愛知大学経営学部卒業</td>
                  </tr>
                  <tr>
                    <td class="history">2016/04~</td>
                    <td class="history-section">(株)ハイテクシステムにSEとして入社。</td>
                  </tr>
                  <tr>
                    <td class="history">
                      <p class="history-left">2016/04~</p>
                      <p class="history-right">~2016/08</p>
                    </td>
                    <td class="history-section">
                      自動車部品のメーター組み込み開発案件に参画。<br>
                      開発言語はC言語、開発OSはWindows。ウォーターフォールモデルで設計からテストまで幅広く担当。
                    </td>
                  </tr>
                  <tr>
                    <td class="history">2017/11~</td>
                    <td class="history-section">(株)NinelivesにSEとして入社。</td>
                  </tr>
                  <tr>
                    <td class="history">
                      <p class="history-left">2017/11~</p>
                      <p class="history-right">~2018/04</p>
                    </td>
                    <td class="history-section">
                        ネットバンキングの業務システム開発案件に参画。<br>
                        開発言語はC言語、開発OSはLinux。開発とテストを担当。
                    </td>
                  </tr>
                  <tr>
                    <td class="history">
                      <p class="history-left">2018/05~</p>
                      <p class="history-right">~2018/11</p>
                    </td>
                    <td class="history-section">
                      AndroidTVのブラウザ開発案件に参画。<br>
                      開発言語はC++、開発OSはUbuntu。開発とテストを担当。
                    </td>
                  </tr>
                  <tr>
                    <td class="history">
                      <p class="history-left">2018/12~</p>
                      <p class="history-right">~2018/05</p>
                    <td class="history-section">
                      Androidのおサイフケータイアプリ開発案件に参画。<br>
                      開発言語はJava、開発OSはLinux。開発を担当。
                    </td>
                  </tr>
                  <tr>
                    <td class="history">2018/06~</td>
                    <td class="history-section">(株)メイプルシステムズに入社予定。</td>
                  </tr>
                </tbody>
              </table>
              <div>
              </div>
            </div>
          </article>
          <article>
            <h2 class="skill_h2">My Skills</h2>
            <div class="skill_box">
              <table class="skill_table">
                <tbody>
                  <tr>
                    <td class="skill">C</td>
                    <td>★★★★</td>
                  </tr>
                  <tr>
                    <td class="skill">C++</td>
                    <td>★★</td>
                  </tr>
                  <tr>
                    <td class="skill">Java</td>
                    <td>★★</td>
                  </tr>
                  <tr>
                    <td class="skill">HTML5</td>
                    <td>★★</td>
                  </tr>
                  <tr>
                    <td class="skill">CSS3</td>
                    <td>★★</td>
                  </tr>
                  <tr>
                    <td class="skill">JavaScript</td>
                    <td>★★</td>
                  </tr>
                  <tr>
                    <td class="skill">SQL</td>
                    <td>★★</td>
                  </tr>
                  <tr>
                    <td class="skill">Bootstrap4</td>
                    <td>★★</td>
                  </tr>
                  <tr>
                    <td class="skill">Vue.js</td>
                    <td>★★</td>
                  </tr>
                  <tr>
                    <td class="skill">Firebase</td>
                    <td>★★</td>
                  </tr>
                  <tr>
                    <td class="skill">Ruby</td>
                    <td>★</td>
                  </tr>
                  <tr>
                    <td class="skill">Other</td>
                    <td>Ruby on Rails,jQuery,git,Jenkins,JIRA,Redmine,heroku,Oracle,Cloud9,Windows,Mac,Linux,Ubuntu,VScode,Atom,秀丸,vim,サクラエディタ</td>
                  </tr>
                </tbody>
              </table>
              <div>
              </div>
            </div>
            <div class="star_list">
              <p>★: 個人勉強</p>
              <p>★★: 個人制作経験有り or 業務経験半年~1年未満</p>
              <p>★★★: 個人制作2作品以上 or 業務経験1年以上~1年半未満</p>
              <p>★★★★: 個人制作3作品以上 or 業務経験1年半以上~2年</p>
              <p>★★★★★: 個人制作4作品以上 or 業務経験2年以上</p>
            </div>
          </article>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
</script>

<style lang="scss">
#skill {
  margin-top: 60px;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.history_h2 {
  text-align: left;
}
.flexbox-left {
  margin: 0 100px 0 0;
}
.history_box {
  padding-left: 40px;
}
td {
  padding: 5px;
  vertical-align: top;
}
article {
  padding: 40px 0;
}
.textLeft {
  margin: 0;
}
.textRight {
  text-align: right;
}
.history {
  padding-right: 50px;
}
.history-section {
  text-align: left;
}
.history-left {
  margin-bottom: 0;
}
.history-right {
  margin-bottom: 0;
}
.skill_box {
  padding-left: 50px;
  text-align: left;
}
.skill {
  padding-right: 50px;
  width: 150px;
}
.skill_h2 {
  text-align: left;
}
.star_list {
  padding-left: 50px;
  text-align: left;
}
</style>