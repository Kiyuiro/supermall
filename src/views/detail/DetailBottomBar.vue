<template>
  <div class="bottom-bar">
    <div class="bar-item bar-left">
      <div>
        <i class="fas fa-headset icon"></i>
        <span class="text">客服</span>
      </div>
      <div>
        <i class="fas fa-store icon"></i>
        <span class="text">店铺</span>
      </div>
      <div>
        <i class="far fa-star icon"></i>
        <span class="text">收藏</span>
      </div>
    </div>
    <div class="bar-item bar-right">
      <div class="cart">加入购物车</div>
      <div class="buy">购买</div>
    </div>
  </div>
</template>

<script>
import TabBarItem from "@/components/common/tabbar/TabBarItem";

export default {
  name: "DetailBottomBar",
  components: {
    TabBarItem
  }
}
</script>

<style scoped>
.bottom-bar {
  height: 49px;
  background-color: #fff;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  text-align: center;
}

.bar-item {
  flex: 1;
  display: flex;
}

.bar-item>div {
  flex: 1;
}

.bar-left .text {
  font-size: 13px;
}

.bar-left .icon {
  display: block;
  width: 22px;
  height: 22px;
  margin: 8px auto -3px;
}

.bar-right {
  font-size: 15px;
  color: #333;
  line-height: 58px;
}

.bar-right .cart {
  background-color: #ffe817;
  color: #333;
}

.bar-right .buy {
  background-color: #f69;
}

.sport-ball {
  position: absolute;
  left: 225px;
  bottom: 20px;
}
</style>
