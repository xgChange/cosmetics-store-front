const state = {
  userInfo: null,
}

const mutations = {
  SET_USER_INFO: (state, userInfo) => {
    state.userInfo = userInfo
  },
}

export default {
  state,
  mutations,
  namespaced: true,
}
