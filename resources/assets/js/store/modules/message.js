import * as types from '../mutation-types'

// state
export const state = {
  type: '',
  title: '',
  text: '',
  modal: false,
  show: false
}

// mutations
export const mutations = {
  [types.RESPONSE_MSG] (state, payload) {
    Object.assign(state, { ...payload, show: true })
  },
  [types.CLEAR_MSG] (state) {
    Object.assign(state, { type: '', text: '', title: '', modal: false, show: false })
  }
}

// actions
export const actions = {
  responseMessage ({ commit, state }, payload) {
    commit(types.RESPONSE_MSG, payload)
    if (!state.modal) {
      setTimeout(() => { commit(types.CLEAR_MSG) }, 6500)
    }
  },
  clearMessage ({ commit }) {
    commit(types.CLEAR_MSG)
  }
}

// getters
export const getters = {
  responseMessage: state => {
    return { ...state }
  }
}
