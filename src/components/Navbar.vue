<template>
  <div class="navbar" :class="{navbar_small: !unfolded}">
    <div class="sidebar">
      <a @click="unfold" class="hover_pointer">
        <img src="@/assets/logo/telemetry_logo_dark.png" />
      </a>
      <router-link :to="{ name: 'home' }" :class="{ responsive: responsive, active: active === 'home' }">
        <img src="@/assets/icons/home.svg" />
      </router-link>
      <router-link :to="{ name: 'roadmap' }" :class="{ responsive: responsive, active: active === 'roadmap' }">
        <img src="@/assets/icons/map.svg" />
      </router-link>
      <router-link :to="{ name: 'impressum' }" :class="{ responsive: responsive, active: active === 'impressum' }">
        <img src="@/assets/icons/document.svg" />
      </router-link>
    </div>
    <div class="responsive_move">
      <router-link
        :to="{ name: 'home' }"
        :class="{ responsive: responsive, active: active === 'home' }">
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
  props: {
    unfolded: Boolean
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
    unfold() {
      this.$emit('unfold');
    }
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
  height: 100%;
  width: 150px;
  position: fixed;
  display: flex;
  flex-direction: row;

  @media screen and (min-width: 1000px) {
    width: 180px;
  }

  .sidebar {
    width: 40px;

    @media screen and (min-width: 1000px) {
      width: 60px;
    }

    a:not(:first-child) {
      img {
        width: 30px;
        padding: 5px;
        filter: invert(100%) sepia(1%) saturate(1434%) hue-rotate(145deg) brightness(112%) contrast(77%);

        @media screen and (min-width: 1000px) {
          width: 40px;
          padding: 10px;
        }
      }
    }


  }

  

  .responsive_move {
    display: flex;
    flex-direction: column;
    padding: 0px 10px;
    margin-top: 40px;
    align-items: left;

    @media screen and (min-width: 1000px) {
      margin-top: 60px;
    }
  }

  a {
    color: $text_color;
    text-decoration: none;
    text-align: left;
    padding: 11px 0px;

    @media screen and (min-width: 1000px) {
      padding: 21px 0px;
    }
  }
}

.navbar_small {
  width: 40px;

  @media screen and (min-width: 1000px) {
    width: 60px;
  }

  .responsive_move {
    display: none;
  }
}

.hover_pointer:hover {
  cursor: pointer;
}

</style>
