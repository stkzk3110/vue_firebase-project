<template>
  <div class="contact">
    <section class="contact_section">
      <div class="container">
        <form name="contact_form" class="form-box">
          <h2 class="contact_h2">Contact</h2>
          <p class="contact_description">
            ※ TwitterのDMの方も解放しておりますのでそちらからのお問い合わせも受け付けております。<br>
            フッターのTwitterアイコンから直接飛べるためそちらからご利用ください。
          </p>
          <div class="form-item-box">
            <label class="control-label">Name<span class="label-required">必須</span></label>
            <div class="contact_form_input">
              <input type="text" class="form-control" name="your-name" placeholder="Name" required id="name">
            </div>
          </div>
          <div class="form-item-box">
            <label class="control-label">Email<span class="label-required">必須</span></label>
            <div class="contact_form_input">
              <input type="email" class="form-control" name="your-email" placeholder="example@email.com" required id="email">
            </div>
          </div>
          <div class="form-item-box">
            <label class="control-label">Message<span class="label-required">必須</span></label>
            <div class="contact_from_input">
              <textarea class="form-control" name="your-message" placeholder="Message" rows="8" required id="message"></textarea>
            </div>
          </div>
          <div class="form-item-box">
            <div class="form-button-box">
              <button class="form-button" type="submit">Submit</button>
            </div>
          </div>
        </form>
      </div>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
import Contact from '@/components/Contact.vue'

export default {
  name: 'contact',
  components: {
    Contact
  }
}
</script>

<style lang="scss">
#contact {
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
article {
  padding: 40px 0;
}
.control-label {
  font-size: 1.4rem;
  font-weight: 700;
}
.form-control {
  width: 100%;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1.6rem;
  padding: 4px 8px;
}
.form-item-box {
  margin-top: 20px;
  text-align: left;
}
.form-box {
  padding: 20px 10px 10px 20px;
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
.label-required {
  font-size: 1.2rem;
  color: #f44366;
  padding-left: 1em;
}
.contact_h2 {
  margin-bottom :10px;
  text-align: left;
}
.contact_description {
  margin-bottom :60px;
  text-align: left;
}
</style>