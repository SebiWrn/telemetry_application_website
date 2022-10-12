<template>
  <div class="impressum">
    <h1>Impressum</h1>
    <p>TODO</p>
    <p>Iconset: Typicons (https://www.iconfinder.com/iconsets/typicons-2)</p>
    <p>Author: Stephen Hutchings (http://typicons.com/)</p>
    <p>
      License: Creative Commons (Attribution-Share Alike 3.0 Unported)
      (http://creativecommons.org/licenses/by-sa/3.0/)
    </p>
    <p>Download date: 2022-10-12</p>

    <div class="footer">
      <span><p>© Copyright Telemetry Application</p></span>
      <span
        ><router-link :to="{ name: 'privacy-policy' }"
          ><p>Privacy Policy</p></router-link
        ></span
      >
      <span
        ><a :href="'mailto:' + this.contact.email"><p>Contact</p></a></span
      >
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

import contact from "@/assets/contact.json";

export default {
  name: "ImpressumView",
  components: {},
  mounted() {},
  data() {
    return {
      contact,
    };
  },
};
</script>

<style lang="scss" scoped>
* {
  color: $text_color;
}

.footer {
  position: fixed;
  bottom: 0;
  height: 30px;
  background-color: $medium_gray;
  filter: contrast(1.2);
  width: 100%;
  border-top: 1px solid $black;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  p {
    font-size: 12px;
    text-align: center;
    margin: 0;
    color: $black;
  }

  span {
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    justify-items: center;
    align-items: center;
    height: 20px;
    margin: 5px;
    width: 25ch;
  }

  a {
    text-decoration: none;
    color: $black;
  }
}
</style>
