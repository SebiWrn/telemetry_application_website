//import {createApp} from 'vue'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Auth from "@/plugins/authentication"

Auth.install();

Vue.$keycloak
    .init({
        onLoad: 'login-required',
    })
    .then(() => {
        new Vue({
            router,
            store,
            render: h => h(App),
        }).$mount('#app');
    });

/*const store = createStore({
    state() {
        return {
            count: 0
        }
    },
    mutations: {
        increment(state) {
            state.count ++;
        }
    }
})*/

//const app = createApp(App).use(router).mount('#app')

//app.use(store);

/*keycloak.init({
    onLoad: initOptions.onLoad
}).then((auth) => {
    if (auth) {
        console.log("Authenticated")
    }
    setInterval(() => {
        keycloak.updateToken(70).then((refreshed) => {
            if (refreshed) {
                console.log("Token refresehd" + refreshed);
            } else {
                console.log("Token not refreshed, valid for " + Math.round(keycloak.tokenParsed.exp + keycloak.timeSkew - new Date().getTime() / 1000) + " seconds");
            }
        }).catch(() => {
            console.log("Failed to refresh token");
        })
    }, 6000);
}).catch(() => {
    console.log("Keycloak init failed");
})

this.$store.commit("setOAuth", keycloak)*/

//createApp(App).use(router).use(store).use(authentication).mount('#app')
