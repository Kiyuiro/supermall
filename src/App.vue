<template>
  <div id="app">
    <keep-alive exclude="Detail">
      <router-view/>
    </keep-alive>
    <tab-bar v-show="this.$route.path.indexOf('/detail') === -1" class="tab-bar"/>
  </div>
</template>

<script>
import TabBar from "@/components/common/tabbar/TabBar";

export default {
  name: 'app',
  components: {
    TabBar
  }
}
</script>

<style>
@import "assets/css/base.css";

.tab-bar {
  z-index: 8;
}
</style>
