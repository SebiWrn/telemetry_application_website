<template>
  <NavBar />
  <div class="router-view-container">
    <router-view />
  </div>
</template>

<script>
import NavBar from "@/components/Navbar.vue";
export default {
  components: {
    NavBar,
  },
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
  @media screen and (orientation: landscape) {
    padding-top: 50px;
  }
}
</style>
