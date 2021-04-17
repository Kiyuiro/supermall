<template>
  <div v-if="data" class="detail-base-info">
    <!--title-->
    <div class="detail-title">{{ data.title }}</div>
    <!--price-->
    <div class="detail-price">
      <span class="new-price"><b>{{ data.newPrice }}</b></span>
      <span class="old-price"><s>{{ data.oldPrice }}</s></span>
      <span v-if="data.discount" class="discount">{{ data.discount }}</span>
    </div>
    <!--info-->
    <div class="info-other">
      <span>{{ data.columns[0] }}</span>
      <span>{{ data.columns[1] }}</span>
      <span>{{ data.services[data.services.length - 1].name }}</span>
    </div>
    <div class="info-service">
      <span v-for="index in data.services.length-1" :key="index"
            class="info-service-item">
        <img :src="data.services[index-1].icon" alt="">
        <span>{{ data.services[index - 1].name }}</span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailBaseInfo",
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
.detail-base-info {
  margin-top: 15px;
  padding: 0 8px;
  color: #999;
  border-bottom: 5px solid #f2f5f8;
}

.detail-title {
  font-size: 20px;
  color: #222;
}

.detail-price {
  margin-top: 10px;
}

.detail-price .new-price {
  font-size: 24px;
  color: #f15b71;
}

.detail-price .old-price {
  font-size: 13px;
  margin-left: 5px;
}

.detail-price .discount {
  font-size: 12px;
  padding: 2px 5px;
  color: #fff;
  background-color: #f13e3a;
  border-radius: 8px;
  margin-left: 5px;
  /* 让元素上浮 */
  position: relative;
  top: -8px
}

.info-other {
  display: flex;
  margin-top: 15px;
  line-height: 30px;
  font-size: 13px;
  border-bottom: 1px solid #d7cfcf;
  justify-content: space-between;
}

.info-service {
  display: flex;
  justify-content: space-between;
  line-height: 60px;
}

.info-service-item img {
  width: 14px;
  height: 14px;
  position: relative;
  top: 2px;
  margin-right: 4px;
}

.info-service-item span {
  font-size: 13px;
  color: #333;
}
</style>
