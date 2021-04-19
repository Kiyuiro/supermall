<template>
  <div id="tab-bar">
    <tab-bar-item v-for="(value, index) in information" :key='index' :path="value[0]">
      <span>
        <i :class="value[1]"></i>
        <br>{{ value[2] }}
      </span>
    </tab-bar-item>
  </div>
</template>

<script>
import TabBarItem from "@/components/common/tabbar/TabBarItem";

export default {
  name: "TabBar",
  data() {
    return {
      information: [
        ['/home', 'fas fa-home', '首页'],
        ['/category', 'fab fa-windows', '分类'],
        ['/cart', 'fas fa-shopping-cart', '购物车'],
        ['/user', 'fas fa-user', '用户']
      ]
    }
  },
  components: {
    TabBarItem
  }
}
</script>

<style scoped>
#tab-bar {
  display: flex;
  background: #f6f6f6;

  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;

  height: 50px;

  box-shadow: 0 -2px 1px rgba(100, 100, 100, .1);
}

i {
  font-size: 22px;
  padding-bottom: 1px;
}
</style>
