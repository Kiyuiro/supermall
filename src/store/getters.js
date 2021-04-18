export default {
  goodsCount(state) {
    let count = 0;
    state.cartList.forEach(value => {
      count += value.count;
    })
    return count;
  },
  cartList(state) {
    return state.cartList;
  }
}
