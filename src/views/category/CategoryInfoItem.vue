<template>
  <div class="category-info-item">
    <img v-lazy="data.image" src="" alt="">
    <span class="text">{{ data.title }}</span>
  </div>
</template>

<script>
export default {
  name: "CategoryInfoItem",
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
.category-info-item {
  width: 100px;
  flex-wrap: wrap;
}

.category-info-item img {
  width: 100px;
  height: 100px;
}

.category-info-item span {
  position: relative;
  padding-top: 10px;
}
</style>
