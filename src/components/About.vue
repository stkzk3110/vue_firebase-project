<template>
<div id="about">
  <div>
    <section class="profile_section">
      <div class="container">
        <h2 class="profile_h2">My Profile</h2>
        <p class="text_box">
          都内にてSE(システムエンジニア)をしてます。<br>
          2016年4月から新卒枠で地元愛知の独立系IT企業にSEとして入社。<br>
          仕事の幅を広げる為に、2017年8月末で退職し、上京。<br>
          2017年11月からSEとして現在の会社へ。<br>
          現在はweb系開発に興味があり、2019年6月からメイプルシステムズさんでお世話になる予定。<br>
        </p>
        <div class="profile_box">
          <div class="profile_img flexbox-left">
            <img src="../assets/img/profile_img.png" alt="">
          </div>
          <div class="flexbox-right">
            <dl class="detail-profile">
              <dt>Name</dt>
              <dd>齋藤 一輝</dd>
              <dt>Location</dt>
              <dd>東京都内</dd>
              <dt>Graduate</dt>
              <dd>名古屋市内</dd>
              <dt>Age</dt>
              <dd>25</dd>
              <dt>Hobby</dt>
              <dd>プログラミング、旅行、アニメ、読書、食べ歩き</dd>
              <dt>Ability</dt>
              <dd>料理、卓球、早寝早起き</dd>
            </dl>
          </div>
        </div>
      </div>
    </section>
  </div>
</div>
</template>

<script>
</script>

<style lang="scss">
#about {
  margin-top: 80px;
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
.profile_section {
  padding: 20px 10px 10px 20px;
}
.profile_h2 {
  margin: 0 0 40px 0;
  text-align: left;
}
.text_box {
  text-align: left;
}
.profile_box {
  display: flex;
}
.flexbox-left {
  margin: 0 100px 0 0;
}
.flexbox-right {
  text-align: left;
}
</style>