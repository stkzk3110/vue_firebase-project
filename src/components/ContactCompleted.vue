<template>
<div id="contact_completed">
  <section class="contact_section">
    <div class="container">
        <p class="contact_completed_message">
            お問い合わせが完了しました。
        </p>
        <div class="form-item-box">
          <div class="form-button-box">
            <button class="form-button" type="button" v-on:click="RedirectToContact()">戻る</button>
          </div>
        </div>
    </div>
  </section>
</div>
</template>

<script>
  export default {
    title: 'Contact Completed',
    description: 'きゅ〜ぶ（cube）へのお問い合わせページ',
    methods: {
        RedirectToContact() {
            window.location.href = '/contact';
        }
    }
  }
</script>

<style lang="scss">
#contact_completed {
  margin-top: 100px;
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
.form-item-box {
  margin-top: 20px;
}
.form-button {
  cursor: pointer;
  display: block;
  max-width: 400px;
  width: 80%;
  margin: 20px auto;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1.6rem;
  padding: 10px;
  background-color: #fff;
  box-shadow: 0 2px 0 #ddd;
}
.contact_completed_message {
  text-align: center;
  margin-bottom: 6em;
}
</style>