<template>
  <div v-if="product" class="cart-list-item">
    <div class="item-select" :class="{check: product.check}" @click="checkClick">
      <i class="fas fa-check"></i>
    </div>
    <div class="item-img">
      <img :src="product.image" alt="商品图片">
    </div>
    <div class="item-info">
      <div class="item-title">{{ product.title }}</div>
      <div class="item-desc">{{ product.desc }}</div>
      <div class="info-bottom">
        <div class="item-price left">¥{{ product.price }}</div>
        <div class="item-count right">X{{ product.count }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CartListItem",
  props: {
    product: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  methods: {
    checkClick() {
      this.product.check = !this.product.check;
    }
  }
}
</script>

<style scoped>
.cart-list-item {
  width: 100%;
  display: flex;
  font-size: 0;
  border-bottom: 1px solid #ccc;
}

.item-select {
  width: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding-left: 4px;
}

.item-select i{
  width: 20px;
  height: 20px;
  font-size: 15px;
  line-height: 20px;
  border: 1px solid black;
  border-radius: 50%;
  color: white;
}

.check i {
  background-color: #66ccff;
  border: 0;
  color: #fff;
}

.item-title, .item-desc {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.item-img {
  padding: 5px;
}

.item-img img {
  width: 80px;
  height: 100px;
  display: block;
  border-radius: 5px;
}

.item-info {
  font-size: 17px;
  color: #333;
  padding: 5px 10px;
  position: relative;
  overflow: hidden;
}

.item-info .item-desc {
  font-size: 14px;
  color: #666;
  margin-top: 15px;
}

.info-bottom {
  margin-top: 10px;
  position: absolute;
  bottom: 10px;
  left: 10px;
  right: 10px;
}

.info-bottom .item-price {
  color: orangered;
}
</style>
