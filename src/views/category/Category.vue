<template>
  <div class="category">
    <nav-bar class="nav-bar">
      <div slot="center">商品分类</div>
    </nav-bar>
    <scroll ref="scrollList" :probe-type="3" class="content list">
      <category-list ref="categoryList" :list="categoryList" @itemClick="getCategoryInfo"/>
    </scroll>
    <scroll ref="scrollDetail" :probe-type="3" class="content detail">
      <category-info :info="categoryInfo"/>
    </scroll>
  </div>
</template>

<script>
import NavBar from "@/components/content/navbar/NavBar";
import CategoryList from "@/views/category/CategoryList";
import CategoryInfo from "@/views/category/CategoryInfo";

import Scroll from "@/components/common/scroll/Scroll";

import {getCategoryList, getCategoryInfo} from "@/network/category";

export default {
  name: "Category",
  data() {
    return {
      categoryList: [],
      categoryInfo: []
    }
  },
  components: {
    NavBar,
    CategoryList,
    CategoryInfo,
    Scroll
  },
  methods: {
    // 请求商品分类列表
    getCategoryList() {
      getCategoryList().then(res => {
        this.categoryList = res.data.category.list;
        this.getCategoryInfo(0);
      });
    },
    // 请求商品分类数据
    getCategoryInfo(index) {
      getCategoryInfo(this.categoryList[index].maitKey).then(res => {
        this.categoryInfo = res.data.list;
      })
    }
  },
  created() {
    this.getCategoryList();
  }
}
</script>

<style scoped>
.category {
  height: 100vh;
  position: relative;
}

.nav-bar {
  background-color: var(--color-tint);
  color: #fff;
  font-size: 18px;
  z-index: 9;
}

.content {
  overflow: hidden;
  position: absolute;
  top: 44px;
  bottom: 50px;
}

.list {
  left: 0;
  right: calc(100% - 100px);
  background-color: rgba(0, 0, 0, .03);
}

.detail {
  left: 100px;
  right: 0;
}
</style>
