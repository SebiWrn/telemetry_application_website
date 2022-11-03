<template>
  <button @click="login">LOGIN</button>
  <button @click="logUserData">logUserData</button>
  <button @click="logout">LOGOUT</button>
  {{ currentUser }}
  <SideBar :mini="mini" v-on:toggleSidebar="toggleSidebar" />
  <!--<div class="router-view" :style="{ 'padding-left': mini ? '70px' : '250px' }">-->
  <div class="router-view">
    <router-view />
  </div>
</template>

<script>
import SideBar from "@/components/Sidebar.vue";

export default {
  components: {
    SideBar,
  },
  data() {
    return {
      mini: true,
    };
  },
  beforeMount() {
  },
  mounted() {
    //this.$store.commit("setOAuth", keycloak);
    //console.log(keycloak.idTokenParsed);
  },
  computed: {},
  methods: {
    toggleSidebar() {
      this.mini = !this.mini;
    },
    login() {
      //this.$store.state.keycloak.login();
    },
    logout() {
      //keycloak.logout();
    },
    logUserData() {
      //console.log(keycloak.idTokenParsed);
    },
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $main_background;
}

.router-view {
  transition: 0.5s;

  padding-left: 70px;
}
</style>
