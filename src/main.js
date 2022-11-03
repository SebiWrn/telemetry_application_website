import { createApp } from 'vue'
//import { createStore } from 'vuex'
import App from './App.vue'
import router from './router'
import store from './store'

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
createApp(App).use(router).use(store).mount('#app')
