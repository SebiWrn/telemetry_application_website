<template>
  <div class="navbar">
    <a
      :class="{ responsive: responsive, active: active === 'home' }"
      @click="responsiveButton"
      ><img src="@/assets/logo/telemetry_logo_dark.png" alt="" /><span
        >Home</span
      ></a
    >
    <router-link
      :to="{ name: 'home' }"
      class="onlyMobile"
      :class="{ responsive: responsive }"
      @click="responsiveButton"
      ><span>Home</span></router-link
    >
    <router-link
      :to="{ name: 'roadmap' }"
      :class="{ responsive: responsive, active: active === 'roadmap' }"
      ><span>Roadmap</span></router-link
    >
    <router-link
      :to="{ name: 'impressum' }"
      :class="{ responsive: responsive, active: active === 'impressum' }"
      ><span>Impressum</span></router-link
    >
  </div>
</template>

<script>
export default {
  name: "NavBar",
  data() {
    return {
      responsive: false,
    };
  },
  computed: {
    active() {
      return this.$route.name;
    },
  },
  methods: {
    responsiveButton() {
      if (window.innerHeight > window.innerWidth) {
        this.responsive = !this.responsive;
      } else {
        this.$router.push({ name: "home" });
      }
    },
  },
  watch: {
    $route: function () {
      this.responsive = false;
    },
  },
  mounted() {},
};
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
  @media screen and (orientation: landscape) {
    position: fixed;
    top: 0;
    width: 100%;
  }

  a {
    display: flex;
    height: 100%;
    float: left;
    background-color: $medium_gray;
    border-color: black;
    border-style: solid;
    border-width: 1px;
    box-sizing: border-box;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    padding: 5px;
    color: $text_color;
    text-decoration: none;
    align-items: center;

    &:not(:first-child) {
      &:not(:last-child) {
        margin-left: -1px;
        @media screen and (orientation: portrait) {
          margin-left: 0px;
        }
      }

      &:last-child {
        float: right;
      }
    }

    &:hover {
      opacity: 0.7;
    }

    @media screen and (orientation: portrait) {
      position: relative;
      left: 0;

      &:first-child {
        width: fit-content;

        padding: 0;
        span {
          display: none;
        }
        img {
          margin: 0;
        }
      }
    }
  }

  @media screen and (orientation: portrait) {
    width: auto;
    display: flex;
    flex-direction: column;
    background-color: rgba(255, 255, 255, 0);
    height: 100px;
    font-size: 200%;

    a {
      display: none;
    }

    a:first-child {
      width: fit-content;
      display: flex;
    }

    .responsive {
      display: flex;
      width: 12ch;
      left: 0;
      margin: 0;
    }
  }

  @media screen and (orientation: landscape) {
    .onlyMobile {
      display: none;
    }
  }

  @media screen and (orientation: landscape) {
    .active {
      background-color: $hightlighted;
    }
  }
}
</style>
