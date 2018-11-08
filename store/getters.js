const getters = {
  allshopCards(state) {
    return state.shopCards
  },
  activeshopCards(state) {
    return state.shopCards.filter(shopCard => !shopCard.completed)
  },
  completedshopCards(state) {
    return state.shopCards.filter(shopCard => shopCard.completed)
  }
}

export default getters