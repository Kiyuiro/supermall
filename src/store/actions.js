import {
  ADD_GOOD_COUNT,
  ADD_TO_CART
} from "@/store/mutations-types";

export default {
  addToCart(context, payload) {
    // 判断是否已经添加该商品
    let product = context.state.cartList.find(item => item.id === payload.id);  // 返回一个满足条件的对象, 如果没有就返回 undefined
    if (product) {
      // 如果已经添加, 商品数量加一
      context.commit(ADD_GOOD_COUNT, product);
    } else {
      // 没有添加就给商品添加进购物车列表
      context.commit(ADD_TO_CART, payload);
    }
  }
}
