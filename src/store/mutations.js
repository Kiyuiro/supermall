import {
  ADD_GOOD_COUNT,
  ADD_TO_CART
} from "@/store/mutations-types";

export default {
  [ADD_GOOD_COUNT](state, payload) {
    console.log('addGoodCount');
    payload.count++;
  },
  [ADD_TO_CART](state, payload) {
    console.log('addToCart');
    payload.count = 1;
    payload.check = true;
    state.cartList.push(payload);
  }
}
