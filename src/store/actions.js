const actions = {
  setUserInfo: ({ commit }, userInfo) => {
    return commit('user/SET_USER_INFO', userInfo)
  },
  setGoodsInfo: ({ commit }, info) => {
    return commit('goods/SET_GOODS_INFO', info)
  },
}

export default actions
