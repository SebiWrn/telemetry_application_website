<template>
  <div class="navbar">
    <div class="sidebar">
      <a>
        <img src="@/assets/logo/telemetry_logo_dark.png" />
      </a>
      <a>
        <img src="@/assets/icons/home.svg" />
      </a>
      <a>
        <img src="@/assets/icons/map.svg" />
      </a>
      <a>
        <img src="@/assets/icons/document.svg" />
      </a>
    </div>
    <div class="responsive_move">
      <router-link
        :to="{ name: 'home' }"
        class="onlyMobile"
        :class="{ responsive: responsive }"
        @click="responsiveButton">
        <span>Home</span>
      </router-link>
      <router-link
        :to="{ name: 'roadmap' }"
        :class="{ responsive: responsive, active: active === 'roadmap' }">
        <span>Roadmap</span>
      </router-link>
      <router-link
        :to="{ name: 'impressum' }"
        :class="{ responsive: responsive, active: active === 'impressum' }">
        <span>Impressum</span>
      </router-link>
    </div>
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
  width: 100%;
  margin-right: 5px;
}

.navbar {
  background-color: $dark_gray;
  height: 100vh;
  width: 150px;
  position: absolute;
  display: flex;
  flex-direction: row;

  .sidebar {
    width: 40px;

    a:not(:first-child) {
      img {
        filter: invert(100%) sepia(1%) saturate(1434%) hue-rotate(145deg)
          brightness(112%) contrast(77%);
        width: 30px;
        padding: 5px;
      }
    }
  }

  .responsive_move {
    display: flex;
    flex-direction: column;
    padding: 0px 10px;
    margin-top: 40px;
    align-items: left;
  }

  a {
    color: $text_color;
    text-decoration: none;
    text-align: left;
    padding: 11px 0px;
  }
}

.navbar-small {
  width: 40px;

  .responsive_move {
    display: none;
  }
}
</style>
