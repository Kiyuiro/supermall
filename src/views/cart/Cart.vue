<template>
  <div class="cart">
    <nav-bar class="nav-bar">
      <div slot="center">购物车</div>
    </nav-bar>
    <scroll class="content">
      <cart-list :data="cartList"/>
    </scroll>
    <cart-summary/>
  </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar";
import CartList from "@/views/cart/CartList";
import CartSummary from "@/views/cart/CartSummary";

import Scroll from "@/components/content/scroll/Scroll";

import {mapGetters} from "vuex"

export default {
  name: "cart",
  components: {
    NavBar,
    CartList,
    Scroll,
    CartSummary
  },
  computed: {
    ...mapGetters({
      cartList: 'cartList'
    })
  }
}
</script>

<style scoped>
.cart {
  height: 100vh;
  position: relative;
}

.nav-bar {
  background-color: var(--color-tint);
  color: #fff;
  font-size: 18px;
  z-index: 9;
}

.content {
  overflow: hidden;
  position: absolute;
  top: 44px;
  bottom: 80px;
  left: 0;
  right: 0;
}
</style>
