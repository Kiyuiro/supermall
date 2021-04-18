<template>
  <div class="cart-summary">
    <div :class="{check: isSelectAll}" class="item-select" @click="checkClick">
      <i class="fas fa-check"></i>
    </div>
    <div class="text">
      <span class="left">全选</span>
      <span class="right">合计: ¥{{ totalPrice }}</span>
    </div>
    <div class="pay">
      <span>结算({{ goodsCount }})</span>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  name: "CartSummary",
  methods: {
    checkClick() {
      let t = this.isSelectAll;
      this.$store.getters.cartList.forEach(value => {
        value.check = !t;
      });
    }
  },
  computed: {
    ...mapGetters({
      goodsCount: 'goodsCount'
    }),
    totalPrice() {
      let p = 0;
      this.$store.getters.cartList.forEach(value => {
        if (value.check) p += value.price * value.count
      });
      return p;
    },
    isSelectAll() {
      let res = true;
      this.$store.getters.cartList.forEach(value => {
        if (!value.check) res = false;
      });
      return res;
    }
  }
}
</script>

<style scoped>
.cart-summary {
  height: 40px;
  background-color: #e7e3e3;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 50px;
  display: flex;
}

.item-select {
  width: 30px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding-left: 4px;
}


.item-select i {
  width: 18px;
  height: 18px;
  font-size: 15px;
  line-height: 18px;
  border: 1px solid black;
  border-radius: 50%;
  color: #e7e3e3;
}

.check i {
  background-color: #66ccff;
  border: 0;
  color: #fff;
}

.text span {
  line-height: 40px;
  padding-left: 5px;
  font-size: 17px;
}

.text .left {
  padding-left: 5px;
}

.text .right {
  padding-left: 210px;
}

.pay {
  position: absolute;
  top: 5px;
  right: 10px;
  width: 90px;
  height: 30px;
  text-align: center;
  color: white;
  background: linear-gradient(to bottom, #FF512F, #F09819);
  border-radius: 20px;
}

.pay span {
  height: 30px;
  line-height: 30px;
}
</style>
