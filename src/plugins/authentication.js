import Vue from 'vue';
import Keycloak from 'keycloak-js';
import oauth_settings from "@/config/oauth-config.json"

let initOptions = {
    url: oauth_settings.url,
    realm: oauth_settings.realm,
    clientId: oauth_settings.clientId
}

const _keycloak = Keycloak(initOptions);

const Plugin = {
    install: Vue => {
        Vue.$keycloak = _keycloak;
    },
};
Plugin.install = Vue => {
    Vue.$keycloak = _keycloak;
    Object.defineProperties(Vue.prototype, {
        $keycloak: {
            get() {
                return _keycloak;
            },
        },
    });
};

export default Plugin;