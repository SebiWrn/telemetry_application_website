<template>
  <button @click="login">LOGIN</button>
  <button @click="logUserData">logUserData</button>
  {{ currentUser }}
  <SideBar
    :mini="mini"
    v-on:toggleSidebar="toggleSidebar" />
  <!--<div class="router-view" :style="{ 'padding-left': mini ? '70px' : '250px' }">-->
  <div class="router-view">
    <router-view />
  </div>
</template>

<script>
import SideBar from "@/components/Sidebar.vue";
import oidc_settings from "@/config/oauth-config.json";

export default {
  components: {
    SideBar,
  },
  data() {
    return {
      mini: true,
    };
  },
  mounted() {
  },
  computed: {
  },
  methods: {
    toggleSidebar() {
      this.mini = !this.mini;
    },
    login() {
    },
    logout() {
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
