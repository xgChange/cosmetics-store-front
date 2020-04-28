const state = {
  info: null,
}

const mutations = {
  SET_GOODS_INFO: (state, info) => {
    state.info = info
  },
}

export default {
  state,
  mutations,
  namespaced: true,
}
