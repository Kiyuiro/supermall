<template>
  <div class="category-list">
    <category-list-item v-for="(value, index) in list"
                        :class="{active: index === currentIndex}"
                        :key="index" :title="value.title"
                        @itemClick="itemClick(index)"/>
  </div>
</template>

<script>
import CategoryListItem from "@/views/category/CategoryListItem";

export default {
  name: "CategoryList",
  props: {
    list: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {
      currentIndex: 0,
    }
  },
  components: {
    CategoryListItem
  },
  methods: {
    itemClick(index) {
      this.currentIndex = index;
      this.$emit('itemClick', index);
    }
  }
}
</script>

<style scoped>
.category-list {
  width: 100px;
  text-align: center;
}

.active {
  color: var(--color-high-text);
  border-left: 3px solid var(--color-high-text);
  padding-right: 3px;
  background-color: #fff;
}
</style>
