import Vue from 'vue'
// import Vuex from 'vuex'
import Vuex from './kvuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        count: 0
    },
    getters: {
        doubleCount(state) {
            return state.count * 2
        }
    },
    mutations: {
        add(state) {
            state.count++
            // this.state
        },
        clean (state) {
            state.count = 0
        }
    },
    actions: {
        // 解构上下文
        clean({commit}) {
            setTimeout(() => {
                commit('clean')
            }, 1000);
        }
    },
    modules: {}
})
