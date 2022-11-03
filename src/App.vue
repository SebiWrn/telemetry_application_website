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
import Keycloak from "keycloak-js";

import oidc_settings from "@/config/oauth-config.json";

let keycloak;

function initKeycloak() {
  keycloak = new Keycloak({
    url: oidc_settings.url,
    realm: oidc_settings.realm,
    clientId: oidc_settings.clientId,
  });
  keycloak
    .init({
      flow: "implicit",
      //onLoad: "check-sso",
      //silentCheckSsoRedirectUri: window.location.origin + "/silent-check-sso"
    })
    .then(function (authenticated) {
      alert(authenticated ? "authenticated" : "not authenticated");
    })
    .catch(function (error) {
      alert("failed to initlaize", error);
    });
}

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
    initKeycloak();
  },
  computed: {},
  methods: {
    toggleSidebar() {
      this.mini = !this.mini;
    },
    login() {
      keycloak.login();
    },
    logout() {
      keycloak.logout();
    },
    logUserData() {
      console.log(keycloak.idTokenParsed);
    }
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
