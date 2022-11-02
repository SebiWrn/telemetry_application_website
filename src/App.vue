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

import { UserManager, WebStorageStateStore } from 'oidc-client-ts';

class AuthService {
  constructor() {
    const STS_DOMAIN = oidc_settings.issuer;

    const settings = {
      userStore: new WebStorageStateStore({ store: window.localStorage }),
      authority: STS_DOMAIN,
      client_id: oidc_settings.client_settings.client_id,
      redirect_uri: oidc_settings.redirect_uri,
      automaticSilentRenew: true,
      silent_redirect_uri: oidc_settings.redirect_uri,
      response_type: 'code',
      scope: 'openid',
      post_logout_redirect_uri: oidc_settings.redirect_uri,
      filterProtocolClaims: true,
    }

    this.userManager = new UserManager(settings);
  }

  getUser() {
    return this.userManager.getUser();
  }

  login() {
    return this.userManager.signinRedirect();
  }

  logout() {
    return this.userManager.signoutRedirect();
  }

  getAccessToken() {
    return this.userManager.getUser().then((data) => {
      return data.access_token;
    })
  }
}

const auth = new AuthService();

export default {
  components: {
    SideBar,
  },
  data() {
    return {
      mini: true,

      currentUser: '',
      accessTokenExpired: false,
      isLoggedIn: false,
      dataEventRecordsItems: [],
    };
  },
  mounted() {
    auth.getUser().then((user) => {
      this.currentUser = user.profile.name;
      this.accessTokenExpired = user.expired;

      this.isLoggedIn = (user !== null && !user.expired)
      console.log("TRIED TO LOG IN")
    })
  },
  computed: {
  },
  methods: {
    toggleSidebar() {
      this.mini = !this.mini;
    },
    login() {
      auth.login();
    },
    logout() {
      auth.logout();
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
