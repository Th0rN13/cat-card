const mutations = {
  SET_shopCards(state, shopCards) {
    state.shopCards = shopCards
  },
  ADD_shopCard(state, shopCard) {
    state.shopCards.push(shopCard)
  },
  REMOVE_shopCard(state, shopCard) {
    var i = state.shopCards.indexOf(shopCard)
    state.shopCards.splice(i, 1)
  },
  FILTER_shopCards(state, value) {
    state.shopCards.forEach((shopCard) => {
      shopCard.completed = !value
    })
  },
  increment(state) {
    state.counter++
  }
}

export default mutations