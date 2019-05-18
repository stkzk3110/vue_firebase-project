<template>
  <div id="app">
    <div class="header-outer">
      <header>
        <h1 class="site-title">
          <router-link to="/">cube's portfolio</router-link>
        </h1>
      </header>
      <hnav></hnav>
    </div>
    <router-view/>
    <fnav></fnav>
    <div class="sns-box">
      <a href="https://twitter.com/fisherman3110se" target="_blank" class="sns-link">
          <i class="fab twitter-icon"></i>
      </a>
      <a href="https://github.com/stkzk3110" target="_blank" class="sns-link">
          <i class="fab github-icon"></i>
      </a>
      <a href="https://instagram.com/stkzk_aioaui" target="_blank" class="sns-link">
          <i class="fab instagram-icon"></i>
      </a>
      <a href="https://qiita.com/fisherman3110se" target="_blank" class="sns-link">
          <i class="fab qiita-icon"></i>
      </a>
      <a href="https://note.mu/fisherman0825" target="_blank" class="sns-link">
          <i class="fab note-icon"></i>
      </a>
    </div>
    <footer>
      <div class="copyright-box">©️ 2019 cube</div>
    </footer>
  </div>
</template>

<script>
import HeaderNav from './components/parts/HeaderNav'
import FooterNav from './components/parts/FooterNav'
export default {
  name: "app",
  components: {
    hnav: HeaderNav,
    fnav: FooterNav,
  },
  data () {
    return {
      //
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
