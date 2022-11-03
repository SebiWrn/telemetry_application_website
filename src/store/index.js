import { createStore } from 'vuex';

export default createStore({
    state() {
        return{
            counter: 0,
            oauth: null
        }
    },
    mutations: {
        addToCounter(state, item) {
            state.counter += item
        },
        setOAuth(state, oauth) {
            state.oauth = oauth;
        }
    }
})