<template>
  <div v-if="goods" class="goods-list">
    <goods-list-item v-for="(value, index) in goods" :key="index" :goods-item="value"/>
  </div>
</template>

<script>
import GoodsListItem from "@/components/content/goods/GoodsListItem";
export default {
  name: "GoodsList",
  props: {
    goods: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  components: {
    GoodsListItem
  }
}
</script>

<style scoped>
  .goods-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
  }
</style>
