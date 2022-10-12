<template>
  <NavBar :unfolded="!small" v-on:unfold="handleUnfold" />
  <div class="router-view-container" :class="{small: small}">
    <router-view />
  </div>
</template>

<script>
import NavBar from "@/components/Navbar.vue";
export default {
  components: {
    NavBar,
  },
  data() {
    return {
      small: true,
    };
  },
  methods: {
    handleUnfold() {
      this.small = !this.small;
    }
  }
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.router-view-container {
  padding-left: 140px;
  padding-top: 40px;

  @media screen and (min-width: 800px) {
    padding-left: 180px;
  }
}

.small {
  padding-left: 40px;
  @media screen and (min-width: 800px) {
    padding-left: 60px;
  }
}
</style>
