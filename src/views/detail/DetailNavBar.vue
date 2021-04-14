<template>
  <div class="detail-nav-bar">
    <nav-bar>
      <div slot="left" @click="backPage">
        <i class="fas fa-chevron-left"></i>
      </div>
      <div slot="center" class="titles">
        <div v-for="(value, index) in titles" :key="index"
             :class="{active: index === currentIndex}" class="title-item"
             @click="titleClick(index)">
          {{ value }}
        </div>
      </div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar";

export default {
  name: "DetailNavbar",
  data() {
    return {
      titles: ['商品', '参数', '评论', '推荐'],
      currentIndex: 0
    }
  },
  components: {
    NavBar
  },
  methods: {
    backPage() {
      console.log("返回上一页");
      this.$router.back();
    },
    titleClick(index) {
      this.currentIndex = index;
    }
  }
}
</script>

<style scoped>
/* 快速实现吸顶效果 */
.detail-nav-bar {
  position: sticky;
  top: 0;
  z-index: 8;
  background-color: #fff;
}

.titles {
  display: flex;
  font-size: 13px;
}

.title-item {
  flex: 1;
}

.active {
  color: var(--color-high-text);
}
</style>
