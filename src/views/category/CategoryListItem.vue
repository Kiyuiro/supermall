<template>
  <div class="category-list-item">
    <div class="title" @click="itemClick">{{ title }}</div>
  </div>
</template>

<script>
export default {
  name: "CategoryListItem",
  props: {
    title: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      currentIndex: 0,
    }
  },
  methods: {
    itemClick() {
      this.$emit("itemClick");
    }
  }
}
</script>

<style scoped>
.category-list-item {
  background-color: rgba(0, 0, 0, .03);
}

.category-list-item .title {
  font-size: 16px;
  height: 40px;
  line-height: 40px;
}
</style>
