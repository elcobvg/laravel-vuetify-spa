import * as types from '../mutation-types'

// state
export const state = {
  type: '',
  title: '',
  text: '',
  modal: false
}

// mutations
export const mutations = {
  [types.RESPONSE_MSG] (state, { type, text, title, modal }) {
    state.type = type
    state.text = text
    state.title = title
    state.modal = modal
  },
  [types.CLEAR_MSG] (state) {
    state.type = ''
    state.text = ''
    state.title = ''
    state.modal = false
  }
}

// actions
export const actions = {
  responseMessage ({ commit, state }, payload) {
    commit(types.RESPONSE_MSG, payload)
    if (!state.modal) {
      setTimeout(() => { commit(types.CLEAR_MSG) }, 8000)
    }
  },
  clearMessage ({ commit }) {
    commit(types.CLEAR_MSG)
  }
}

// getters
export const getters = {
  responseMessage: state => { 
    return {
      type: state.type, 
      text: state.text,
      title: state.title,
      modal: state.modal
    }
  }
}
