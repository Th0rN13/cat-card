const actions = {
  addshopCard({ commit }, shopCard) {
    commit('ADD_shopCard', shopCard)
  },
  setshopCards({ commit }, shopCards) {
    commit('SET_shopCards', shopCards)
  },
  removeshopCard({ commit }, shopCard) {
    commit('REMOVE_shopCard', shopCard)
  },
  allDone({ state, commit }) {
    var value = state.shopCards.filter(shopCard => shopCard.completed).length === state.shopCards.length
    commit('FILTER_shopCards', value)
  },
  saveshopCards({ state }) {
    axios.put('/api/shopCards', { shopCards: state.shopCards })
  },
  nuxtServerInit({ commit }, { req }) {
    commit('SET_shopCards', req.session ? (req.session.shopCards || []) : [])
  }
}

export default actions