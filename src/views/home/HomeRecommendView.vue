<template>
  <div class="recommend">
    <div v-for="(value, index) in recommends" :key="index" class="recommend-item">
      <a :href="value.link">
        <img :src="value.image" alt="">
        <div>{{ value.title }}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeRecommendView",
  props: {
    recommends: {
      type: Array,
      default() {
        return [];
      }
    }
  }
}
</script>

<style scoped>
.recommend {
  display: flex;
  width: 100%;
  text-align: center;
  font-size: 15px;
  padding: 10px 0 10px 0;
  border-bottom: 8px solid #eee;
}

.recommend-item {
  flex: 1;
}

.recommend-item img {
  width: 65px;
  height: 65px;
  margin-bottom: 5px;
}
</style>
