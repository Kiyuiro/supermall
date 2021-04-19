export default {
  goodsCount(state) {
    let count = 0;
    state.cartList.forEach(value => {
      if(value.check) count += value.count;
    })
    return count;
  },
  cartList(state) {
    return state.cartList;
  }
}
