<template>
  <div v-if="data" class="shop-info">
    <div class="shop-base-info">
      <img :src="data.logo" alt="">
      <span class="shop-name">{{ data.name }}</span>
    </div>
    <div class="shop-evaluate">
      <div class="shop-evaluate-info">
        <div class="shop-sells">
          <div class="shop-sells-count">{{ data.sells | sellCountFilter }}</div>
          <div class="shop-sells-text">总销量</div>
        </div>
        <div class="shop-goods">
          <div class="shop-goods-count">{{ data.count }}</div>
          <div class="shop-goods-text">全部宝贝</div>
        </div>
      </div>
      <div class="shop-evaluate-score">
        <table>
          <tr v-for="(value, index) in data.score" :key="index">
            <td>{{ value.name }}</td>
            <td :class="{'score-better': value.isBetter}" class="score">{{ value.score }}</td>
            <td :class="{'better-more': value.isBetter}" class="better">
              <span>{{ value.isBetter ? '高' : '低' }}</span>
            </td>
          </tr>
        </table>
      </div>
    </div>
    <div class="enter-shop">
      <div class="enter-shop-text">进店逛逛</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailShopInfo",
  props: {
    data: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  filters: {
    sellCountFilter: (value) => {
      if (value < 10000) return value;
      return (value / 10000).toFixed(1) + '万'
    }
  }
}
</script>

<style scoped>
.shop-info {
  padding: 25px 8px;
  border-bottom: 5px solid #f2f5f8;
}

.shop-base-info {
  line-height: 45px;
  /* 元素垂直居中 */
  display: flex;
  align-content: center;
}

.shop-base-info img {
  width: 45px;
  height: 45px;
  border-radius: 50%;
}

.shop-base-info .shop-name {
  margin-left: 10px;
  vertical-align: center;
}

.shop-evaluate {
  margin-top: 15px;
  display: flex;
  align-items: center;
}

.shop-evaluate-info, .shop-evaluate-score {
  flex: 1;
}

.shop-evaluate-info {
  display: flex;
  justify-content: space-evenly;
  color: #333;
  text-align: center;
  border-right: 1px solid rgba(0, 0, 0, 0.1);
}

.shop-sells-count, .shop-goods-count {
  font-size: 18px;
}

.shop-sells-text, .shop-goods-text {
  margin-top: 10px;
  font-size: 12px;
}

.shop-evaluate-score {
  font-size: 13px;
  color: #333;
}

.shop-evaluate-score table {
  width: 140px;
  margin-left: 30px;
}

.shop-evaluate-score table td {
  padding: 5px 0;
}

.shop-evaluate-score .score {
  color: #99f158;
}

.shop-evaluate-score .score-better {
  color: #f52443;
}

.shop-evaluate-score .better span {
  background-color: #99f158;
  color: #fff;
  text-align: center;
}

.shop-evaluate-score .better-more span {
  background-color: #f52443;
}

.enter-shop {
  width: 40%;
  height: 40px;
  line-height: 40px;
  font-size: 20px;
  background-color: rgba(0, 0, 0, 0.1);
  display: flex;
  text-align: center;
  border-radius: 10px;
  margin: 12px 0 0 30%;
}

.enter-shop-text {
  flex: 1;
}
</style>
