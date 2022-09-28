<template>
  <div class="navbar">
    <router-link :to="{ name: 'home'}" :class="{responsive : responsive}"><img src="@/assets/logo/telemetry_logo_dark.png" alt=""><span>Home</span></router-link>
    <router-link :to="{ name: 'roadmap'}" :class="{responsive : responsive}"><span>Roadmap</span></router-link>
    <router-link :to="{ name: 'impressum'}" :class="{responsive : responsive}"><span>Impressum</span></router-link>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
  data() {
    return {
        responsive: true,
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
img {
    display: flex;
    height: 100%;
    float: left;
    margin-right: 5px;
}

.navbar {
  background-color: $dark_gray;
  height: 50px;
}

.navbar a {
  display: flex;
  height: 100%;
  float: left;
  background-color: $medium_gray;
  border-color: black;
  border-style: solid;
  border-width: 2px;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  outline-color: black;
  padding: 5px;
  color: $text_color;
  text-decoration: none;
  align-items: center;

  &:not(:first-child) {
    &:not(:last-child) {
      margin-left: -2px;
    }

    &:last-child {
      float: right;
    }
  }


  &:hover {
    opacity: .7;
  }

  @media screen and (orientation:portrait) {
    position: relative;

    &:first-child {
        padding: 0;
        span {
            display: none
        }
        img {
            margin: 0
        }
    }
  }
}
</style>
