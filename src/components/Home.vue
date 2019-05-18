<template>
<div id="home">
  <div id="main">
    <div class="home_title">
      <img src="../assets/img/chara_icon.png">
    </div>
    <section class="home_section">
      <article class="profile-box">
        <div class="common-box-inner">
          <div class="profile-content-box">
            <h1>ABOUT</h1>
            <div class="top-profile-box">
              <div class="profile-thumb-box">

              </div>
              <div class="common-text">

              </div>
            </div>
          </div>
        </div>
        <div class="common-more-box">
          <router-link to="/about">もっと見る</router-link>
        </div>
      </article>
      <article class="skill-box">
        <div class="common-box-inner">
          <div class="skill-content-box">
            <h1>SKILL</h1>
            <div class="top-skill-box">
              <div class="skill-thumb-box">

              </div>
              <div class="common-text">

              </div>
            </div>
          </div>
        </div>
        <div class="common-more-box">
          <router-link to="/skill">もっと見る</router-link>
        </div>
      </article>
      <article class="contact-box">
        <div class="common-box-inner">
          <div class="contact-content-box">
            <h1>CONTACT</h1>
            <div class="top-contact-box"></div>
          </div>
        </div>
        <div class="common-more-box">
          <router-link to="/contact">お問い合わせフォームへ</router-link>
        </div>
      </article>
    </section>
  </div>
</div>
</template>

<script>
</script>

<style lang="scss">
#home {
  margin-top: 90px;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
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
  color: #2c3e50;
}
.profile-box {
  padding-bottom: 140px;
  background-color: #ffccdd;
}
.skill-box {
  padding-bottom: 140px;
  background-color: #f2cf01;
}
.contact-box {
  padding-bottom: 140px;
  background-color: #9460a0;
}
</style>