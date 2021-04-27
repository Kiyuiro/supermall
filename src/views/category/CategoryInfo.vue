<template>
  <div class="category-info">
    <category-info-item v-for="(value, index) in info" :key="index" :data="value"/>
  </div>
</template>

<script>
import CategoryInfoItem from "@/views/category/CategoryInfoItem";

export default {
  name: "CategoryInfo",
  props: {
    info: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  components: {
    CategoryInfoItem
  }
}
</script>

<style scoped>
 .category-info {
   display: flex;
   width: 100%;
   text-align: center;
   font-size: 15px;
   padding: 10px 0 10px 0;
   flex-wrap: wrap;
   justify-content: space-evenly;
 }
</style>
