import Vue from 'vue'
import Vuex from 'vuex'
import * as types from './mutation-types'

Vue.use(Vuex)

// Load store modules dynamically.
const requireContext = require.context('./modules', false, /.*\.js$/)

const modules = requireContext.keys()
  .map(file =>
    [file.replace(/(^.\/)|(\.js$)/g, ''), requireContext(file)]
  )
  .reduce((modules, [name, module]) => {
    modules[name] = module
    return modules
  }, {})

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  modules,
  state: {
    drawer: true
  },
  mutations: {
    [types.TOGGLE_DRAWER] (state) {
      state.drawer = !state.drawer
    }
  },
  actions: {
    toggleDrawer ({ commit }) {
      commit(types.TOGGLE_DRAWER)
    }
  },
  getters: {
    drawer: state => state.drawer
  }
})
