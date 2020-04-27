import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import actions from './actions'
import user from './module/user'

Vue.use(Vuex)

export default new Vuex.Store({
  actions,
  getters,
  modules: {
    user,
  },
})
