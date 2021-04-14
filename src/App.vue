<template>
  <div id="app">
    <keep-alive exclude="Detail">
      <router-view/>
    </keep-alive>
    <tab-bar class="tab-bar"/>
  </div>
</template>

<script>
import TabBar from "@/components/content/tabber/TabBar";

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
