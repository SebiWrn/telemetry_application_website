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

setInterval(() => {
  keycloak
    .updateToken(30)
    .then(() => {
      console.log("Updated token");
    })
    .catch(function () {
      alert("Failed to refresh token");
    });
}, 3000);

let keycloak;

function initKeycloak() {
  keycloak = new Keycloak({
    url: oidc_settings.url,
    realm: oidc_settings.realm,
    clientId: oidc_settings.clientId,
  });
  //keycloak.init({flow: 'implicit'})
  keycloak
    .init({
      flow: "implicit",
      onLoad: "check-sso",
      silentCheckSsoRedirectUri:
        window.location.origin + "/static/silent-check-sso.html",
    })
    .then(function () {
      //alert(authenticated ? "authenticated" : "not authenticated");
    })
    .catch(function () {
      //alert("failed to initlaize", error);
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
  beforeMount() {
    initKeycloak();
  },
  mounted() {
    this.$store.commit("setOAuth", keycloak);
    console.log(keycloak.idTokenParsed);
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
