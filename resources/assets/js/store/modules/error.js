import * as types from '../mutation-types'

// state
export const state = {
  type: '',
  title: '',
  text: ''
}

// mutations
export const mutations = {
  [types.RESPONSE_ERROR] (state, { type, title, text }) {
    state.type = type
    state.title = title
    state.text = text
  },
  [types.CLEAR_ERROR] (state) {
    state.type = ''
    state.title = ''
    state.text = ''
  }
}

// actions
export const actions = {
  responseError ({ commit }, payload) {
    commit(types.RESPONSE_ERROR, payload)
  },
  clearError ({ commit }) {
    commit(types.CLEAR_ERROR)
  }
}

// getters
export const getters = {
  responseError: state => { 
    return {
      type: state.type, 
      title: state.title, 
      text: state.text
    }
  }
}
