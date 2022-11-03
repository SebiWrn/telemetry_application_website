import {createApp} from 'vue'
import App from './App.vue'
import router from './router'

import Keycloak from 'keycloak-js'

import oauth_config from '@/config/oauth-config.json'

const keycloak = Keycloak(oauth_config);
keycloak.init({
    onLoad: "check-sso",
    flow: "implicit",
    silentCheckSsoRedirectUri: window.location.origin + '/silent-check-sso.html'
})

const app = createApp(App)
app.config.globalProperties.$keycloak = keycloak;

app.use(router).mount('#app')
