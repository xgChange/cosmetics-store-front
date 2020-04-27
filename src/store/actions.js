const actions = {
  setUserInfo: ({ commit }, userInfo) => {
    return commit('user/SET_USER_INFO', userInfo)
  },
}

export default actions
