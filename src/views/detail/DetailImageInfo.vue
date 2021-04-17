<template>
  <div v-if="data" class="image-info">
    <div class="info-desc clear-fix">
      <div class="start"></div>
      <div class="desc">{{ data.title }}</div>
      <div class="end"></div>
    </div>
    <div v-for="(value, index) in data.detailImage" :key="index" class="info">
      <div class="info-key">{{ value.key }}</div>
      <div class="info-list">
        <img v-for="index in 3" v-if="value.list[index]" :key="index" :src="value.list[index]" alt="">
      </div>
    </div>
    <div v-if="data.detailImage[0].list.length > 3" class="info-list">
      <img src="//s11.mogucdn.com/p2/170317/77101615_86e9f0elcl86499l16jf26aallg14_1125x380.jpg" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailGoodsInfo",
  props: {
    data: {
      type: Object,
      default() {
        return {};
      }
    }
  }
}
</script>

<style scoped>
.image-info {
  padding: 20px 0;
  border-bottom: 5px solid #f2f5f8;
}

.info-desc {
  padding: 0 15px;
}

.info-desc .start, .info-desc .end {
  width: 90px;
  height: 1px;
  background-color: #a3a3a5;
  position: relative;
}

.info-desc .start {
  float: left;
}

.info-desc .end {
  float: right;
}

.info-desc .start::before, .info-desc .end::after {
  content: '';
  position: absolute;
  width: 5px;
  height: 5px;
  background-color: #333;
  bottom: 0;
}

.info-desc .end::after {
  right: 0;
}

.info-desc .desc {
  padding: 15px 0;
  font-size: 14px;
}

.info-key {
  margin: 10px 0 10px 15px;
  color: #333;
  font-size: 15px;
}

.info-list img{
  width: 100%;
}
</style>
