<template>
  <div class="dashboard">
    <div class="container">
      <img src="@/assets/imgs/blank-profile.png" alt="Blank Profile" id="profile_image">
      <div id="profile_information">
        <h2 id="name_label">Name:</h2>
        <h2 id="name_value">{{name}}</h2>
        <p id="email_label">EMail:</p>
        <p id="email_value">{{email}}</p>

      </div>
    </div>

  </div>
</template>

<script>

export default {
  name: "ProfileView",
  components: {
  },
  mounted() {
    var oauth = this.$store.oauth;
    this.name = oauth.idTokenParsed.name
  },
  data() {
    return {
      name: "Max Mustermann",
      email: "max@mustermann.de"
    }
  }
};
</script>

<style lang="scss" scoped>
  .container {
    display: grid;
    grid-template-columns: 20% 80%;
    padding: calc((1vh + 1vw) / 2);
  }

  #profile_image {
    width: 100%;
    grid-column: 1;
    grid-row: 1;
    border-radius: 5px;
  }

  #profile_information {
    grid-column: 2;
    grid-row: 1;
    width: 100%;
    display: grid;
    grid-template-columns: 20% 80%;
    grid-template-rows: auto auto 1fr;
    row-gap: 1ch;
    padding-left: calc((1vh + 1vw) / 2);
  }

  h1, h2, h4, p {
    margin: 0;
    text-align: left;
    color: $text_color;
  }
</style>
