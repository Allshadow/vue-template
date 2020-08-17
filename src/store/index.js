import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

console.log(Vuex)

export default new Vuex.Store({
  state: {
    count: 1
  },
  mutations: {
    changCount(state, payload){
      state.count = payload
    }
  },
  actions: {
  },
  modules: {
  }
})
